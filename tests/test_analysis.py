from __future__ import annotations

import sys
import unittest
from pathlib import Path

import pandas as pd

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from analysis import calculate_business_case, calculate_mcda


class AccessibilityModelTests(unittest.TestCase):
    def test_case_totals(self) -> None:
        pages = pd.read_csv(ROOT / "data/reference/case_pages.csv")
        self.assertEqual(int(pages["annual_views"].sum()), 561005)
        self.assertEqual(int(pages["estimated_issues"].sum()), 137)

    def test_mcda_reconciles(self) -> None:
        frame = calculate_mcda(pd.read_csv(ROOT / "data/reference/mcda_priorities.csv"))
        self.assertLess((frame["calculated_score"] - frame["reported_score"]).abs().max(), 1e-9)
        self.assertTrue((frame["calculated_rank"] == frame["reported_rank"]).all())

    def test_base_business_case_reconciles(self) -> None:
        pages = pd.read_csv(ROOT / "data/reference/case_pages.csv")
        assumptions = pd.read_csv(ROOT / "data/reference/base_assumptions.csv").set_index("parameter")["value"].astype(float).to_dict()
        result = calculate_business_case(float(pages["annual_views"].sum()), assumptions)
        self.assertAlmostEqual(result["implementation_cost"], 306273, places=0)
        self.assertAlmostEqual(result["annual_gross_benefit"], 485404, places=0)
        self.assertAlmostEqual(result["npv"], 787496, places=0)
        self.assertAlmostEqual(result["benefit_cost_ratio"], 2.3757, places=3)

    def test_frozen_simulation_is_complete(self) -> None:
        frame = pd.read_csv(ROOT / "data/reference/monte_carlo_npv.csv")
        self.assertEqual(len(frame), 1000)
        self.assertGreater(frame["positive_npv"].mean(), 0.95)


if __name__ == "__main__":
    unittest.main()
