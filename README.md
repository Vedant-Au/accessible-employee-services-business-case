# Accessible Employee Services

### A service prototype backed by prioritisation, economics and a delivery backlog

[![Open the prototype](https://img.shields.io/badge/OPEN_THE_PROTOTYPE-0B6E4F?style=for-the-badge)](https://vedant-au.github.io/accessible-employee-services-business-case/)
[![Quality checks](https://github.com/Vedant-Au/accessible-employee-services-business-case/actions/workflows/quality.yml/badge.svg)](https://github.com/Vedant-Au/accessible-employee-services-business-case/actions/workflows/quality.yml)

## Try the service first

The [working employee-services prototype](https://vedant-au.github.io/accessible-employee-services-business-case/) demonstrates the design response: skip navigation, semantic landmarks, labelled inputs, visible focus, plain-language status and keyboard-operable interactions.

The point of the case is not the interface alone. It connects the user experience to a funded and governed improvement programme.

## One case, four connected outputs

| 1 · Diagnose | 2 · Prioritise | 3 · Fund | 4 · Deliver |
| --- | --- | --- | --- |
| 137 issues across four employee services | MCDA ranks risk, reach, criticality and feasibility | Three-year benefits case and uncertainty test | Owned backlog, acceptance criteria and prototype |

Treating the work as isolated page fixes would leave the same barriers in shared components. The recommended first move is a **90-day stabilisation phase**: repair design-system patterns, introduce a WCAG 2.2 AA release gate and validate the highest-risk journeys before scaling the eight-month programme.

## Investment snapshot

| Measure | Base result |
| --- | ---: |
| Population in the case | 400,000 employees and contractors |
| Annual views across four services | 561,005 |
| Highest-priority service | Training & Learning — 88/100 |
| Implementation cost | £306,273 |
| Three-year NPV | £787,496 |
| Positive-NPV simulations | 98% of 1,000 |

![Service priority scores](outputs/figures/priority_scores.png)

The model does not turn accessibility into a guaranteed financial return. Its purpose is to make assumptions visible enough to challenge before funding. See [investment logic](docs/INVESTMENT_LOGIC.md).

## Delivery starts with reusable barriers

The backlog gives priority to colour tokens, focus states, landmarks, headings, form labels and error handling because one shared correction can improve several journeys. Each item carries an owner, test method, acceptance criterion and delivery horizon.

Before committing the full budget, I would validate support-demand volumes, loaded staff costs, benefit attribution, remediation estimates and disabled-employee task success. Automated checks would be supplemented by keyboard, screen-reader and moderated user testing. The current assurance position is recorded in [accessibility QA](docs/ACCESSIBILITY_QA.md).

## Explore the build

```text
prototype/            Working employee-service interface
analysis.py           Priority and investment model
data/reference/       Sanitised assumptions and simulation trail
outputs/              Decision tables and figures
tests/                Calculation and reconciliation checks
```

```bash
pip install -r requirements.txt
python analysis.py
python -m unittest discover -s tests -v
```

> **Case context:** GlobalTech is the case organisation in an MSc group exercise. The prototype is not a production WCAG certification, and the financial outputs depend on assumptions requiring discovery validation. Source exclusions: [ASSET_NOTICE.md](ASSET_NOTICE.md).
