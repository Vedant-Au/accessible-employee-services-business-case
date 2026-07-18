# Accessible Employee Services Business Case

**A prioritisation, cost-benefit and delivery model for making high-use employee self-service journeys accessible.**

[![Quality checks](https://github.com/Vedant-Au/accessible-employee-services-business-case/actions/workflows/quality.yml/badge.svg)](https://github.com/Vedant-Au/accessible-employee-services-business-case/actions/workflows/quality.yml)
[![Live prototype](https://img.shields.io/badge/live-accessible_prototype-0B6E4F)](https://vedant-au.github.io/accessible-employee-services-business-case/)

**Portfolio:** [Digital inclusion](https://github.com/Vedant-Au/ons-census-2031-digital-inclusion-risk) · [Enterprise risk](https://github.com/Vedant-Au/enterprise-risk-management-framework) · [Carbon modelling](https://github.com/Vedant-Au/offshore-wind-carbon-footprint-model) · [Workflow automation](https://github.com/Vedant-Au/vfx-workflow-automation-decision-model)

> Portfolio context: this repository develops an MSc group case study into an auditable analyst portfolio. “GlobalTech” is the case organisation. The outputs are decision-support estimates, not a production accessibility certification or legal advice.

## Recruiter quick scan

| Lens | Evidence |
| --- | --- |
| Business analysis | Problem framing, prioritisation, requirements, roadmap and benefits case |
| Decision modelling | MCDA, cost-benefit analysis and 1,000-run uncertainty testing |
| Delivery thinking | 90-day stabilisation phase, release gates and outcome measures |
| Technical assurance | Reproducible Python, reconciliation tests and an accessible prototype |

**Contribution and provenance:** the source was an MSc group case. This repository is an individual portfolio reconstruction that converts the case evidence into a reproducible model, decision narrative and working prototype. Estimates remain assumptions to validate in discovery.

## Decision required

Approve a controlled 90-day stabilisation phase that fixes shared design-system barriers, establishes a WCAG 2.2 AA release gate and validates the highest-risk employee journeys before scaling an eight-month programme.

## Evidence at a glance

| Signal | Result | Implication |
| --- | ---: | --- |
| Employee and contractor population | 400,000 | Self-service failure can create enterprise-scale support demand |
| Annual views across four pages | 561,005 | The analysed journeys are materially used |
| Estimated accessibility issues | 137 | Manual verification and prioritised remediation are required |
| First redesign priority | Training & Learning, 88.0/100 | Highest combined traffic, issues and process exposure |
| Base implementation cost | £306,273 | Controlled programme investment |
| Base three-year NPV | £787,496 | Positive but assumption-dependent business case |
| Frozen simulation positive-NPV rate | 98% | Reported model remains positive across most sampled cases |

![Priority scores](outputs/figures/priority_scores.png)

![NPV uncertainty](outputs/figures/npv_distribution.png)

## Recommendation

1. Fix shared patterns before individual pages: colour tokens, focus, landmarks, headings, forms and error handling.
2. Prioritise Training & Learning and HR Portal for deeper redesign.
3. Require automated, keyboard, screen-reader and disabled-employee task testing before release.
4. Track employee task success, accessibility-related support demand, regression failures and exception ageing.
5. Validate model assumptions during discovery before committing the full budget.

## Working prototype

[Launch the interactive prototype](https://vedant-au.github.io/accessible-employee-services-business-case/) or serve [`prototype/index.html`](prototype/index.html) locally. It demonstrates skip navigation, semantic landmarks, labelled inputs, visible focus and text-based status. Automated validation is useful evidence, not certification; manual assistive-technology and user testing remain required.

## Analytical assets

- Sanitised reference tables and a frozen 1,000-run simulation audit trail
- Python reproduction of MCDA and base cost-benefit calculations
- Source-to-output reconciliation tests for transparent review
- Accessible HTML prototype
- Automated unit and reconciliation tests

## Reproduce

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python analysis.py
python -m unittest discover -s tests -v
```

See [methodology](docs/METHODOLOGY.md), [validation status](docs/VALIDATION.md), and [asset notice](ASSET_NOTICE.md).
