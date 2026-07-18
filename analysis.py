from __future__ import annotations

from pathlib import Path

import matplotlib.pyplot as plt
import numpy as np
import pandas as pd


ROOT = Path(__file__).resolve().parent
MCDA_WEIGHTS = {
    "traffic_score": 0.20,
    "issue_score": 0.25,
    "process_criticality": 0.25,
    "legal_hr_sensitivity": 0.15,
    "feasibility": 0.15,
}


def calculate_mcda(frame: pd.DataFrame) -> pd.DataFrame:
    missing = set(MCDA_WEIGHTS).difference(frame.columns)
    if missing:
        raise ValueError(f"Missing MCDA columns: {sorted(missing)}")
    result = frame.copy()
    result["calculated_score"] = sum(result[column] * weight for column, weight in MCDA_WEIGHTS.items())
    result["calculated_rank"] = result["calculated_score"].rank(ascending=False, method="min").astype(int)
    return result


def calculate_business_case(annual_views: float, assumptions: dict[str, float]) -> dict[str, float]:
    a = assumptions
    productivity = annual_views * a["affected_visit_share"] * a["delay_minutes"] / 60 * a["hourly_cost"] * a["improvement_capture"]
    support = annual_views * a["support_contact_rate"] * a["ticket_cost"] * a["improvement_capture"]
    retention = a["prevented_exits"] * a["median_salary"] * a["replacement_cost_share"]
    gross = productivity + support + retention + a["legal_risk_reduction"] + a["avoided_rework"]

    triage = a["issue_count"] * a["triage_hours_per_issue"] * a["consultant_rate"]
    development = a["issue_count"] * a["development_hours_per_issue"] * a["developer_rate"]
    qa = a["issue_count"] * a["qa_hours_per_issue"] * a["qa_rate"]
    subtotal = triage + development + qa + a["user_research_cost"] + a["design_system_cost"] + a["training_change_cost"]
    implementation = subtotal * (1 + a["contingency_rate"])
    annuity = sum(1 / (1 + a["discount_rate"]) ** year for year in range(1, int(a["horizon_years"]) + 1))
    pv_benefits = gross * annuity
    pv_costs = implementation + a["annual_governance_cost"] * annuity
    return {
        "annual_gross_benefit": gross,
        "implementation_cost": implementation,
        "net_annual_benefit": gross - a["annual_governance_cost"],
        "npv": pv_benefits - pv_costs,
        "benefit_cost_ratio": pv_benefits / pv_costs,
        "simple_payback_years": implementation / (gross - a["annual_governance_cost"]),
    }


def main() -> None:
    priorities = calculate_mcda(pd.read_csv(ROOT / "data/reference/mcda_priorities.csv"))
    pages = pd.read_csv(ROOT / "data/reference/case_pages.csv")
    assumptions = pd.read_csv(ROOT / "data/reference/base_assumptions.csv").set_index("parameter")["value"].astype(float).to_dict()
    business_case = calculate_business_case(float(pages["annual_views"].sum()), assumptions)
    simulations = pd.read_csv(ROOT / "data/reference/monte_carlo_npv.csv")

    tables = ROOT / "outputs/tables"; figures = ROOT / "outputs/figures"
    tables.mkdir(parents=True, exist_ok=True); figures.mkdir(parents=True, exist_ok=True)
    priorities.to_csv(tables / "priority_reconciliation.csv", index=False)
    pd.Series(business_case, name="value").to_csv(tables / "base_business_case.csv")

    ordered = priorities.sort_values("calculated_score")
    fig, ax = plt.subplots(figsize=(8.5, 5.2))
    bars = ax.barh(ordered["page"], ordered["calculated_score"], color="#006D77")
    ax.bar_label(bars, labels=[f"{value:.1f}" for value in ordered["calculated_score"]], padding=4)
    ax.set(title="Training and HR carry the highest combined exposure", xlabel="MCDA priority score / 100", xlim=(0, 100))
    ax.grid(axis="x", alpha=0.2)
    fig.tight_layout(); fig.savefig(figures / "priority_scores.png", dpi=180, facecolor="white"); plt.close(fig)

    fig, ax = plt.subplots(figsize=(8.5, 5.2))
    ax.hist(simulations["npv"] / 1000, bins=35, color="#006D77", alpha=0.85)
    ax.axvline(0, color="#C44536", linestyle="--", label="Break-even")
    ax.axvline(simulations["npv"].mean() / 1000, color="#E9C46A", linewidth=2, label=f"Mean £{simulations['npv'].mean()/1000:,.0f}k")
    ax.set(title="Frozen simulation shows a positive but uncertain business case", xlabel="Three-year NPV (£000s)", ylabel="Simulation count")
    ax.legend(frameon=False); ax.grid(axis="y", alpha=0.2)
    fig.tight_layout(); fig.savefig(figures / "npv_distribution.png", dpi=180, facecolor="white"); plt.close(fig)

    print(pd.Series(business_case))
    print(f"Frozen positive-NPV rate: {simulations['positive_npv'].mean():.1%}")


if __name__ == "__main__":
    main()
