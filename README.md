# Accessible Employee Services: Investment and Delivery Model

**Turning accessibility findings into a prioritised investment case, controlled delivery plan and working service prototype.**

[![Quality checks](https://github.com/Vedant-Au/accessible-employee-services-business-case/actions/workflows/quality.yml/badge.svg)](https://github.com/Vedant-Au/accessible-employee-services-business-case/actions/workflows/quality.yml)
[![Live prototype](https://img.shields.io/badge/open-live_prototype-0B6E4F)](https://vedant-au.github.io/accessible-employee-services-business-case/)

## The decision

GlobalTech, the case organisation, needed to decide whether accessibility remediation should be handled as a series of page fixes or as a governed service-improvement programme.

My recommendation is a **controlled 90-day stabilisation phase**: fix shared design-system barriers, establish a WCAG 2.2 AA release gate and validate the highest-risk employee journeys before scaling the full eight-month programme.

## Case in numbers

| Evidence | Result | Why it matters |
| --- | ---: | --- |
| Employee and contractor population | 400,000 | Small failure rates can create enterprise-scale support demand |
| Annual views across four services | 561,005 | The affected journeys are materially used |
| Issues identified in the case evidence | 137 | Remediation requires prioritisation, not a flat backlog |
| Highest-priority service | Training & Learning, 88/100 | Highest combined exposure across traffic, issues and process risk |
| Base implementation cost | £306,273 | Investment required under the case assumptions |
| Base three-year NPV | £787,496 | Positive scenario, subject to discovery validation |
| Positive-NPV simulations | 98% of 1,000 | The reported model is robust across most sampled assumptions |

![Priority scores](outputs/figures/priority_scores.png)

![NPV uncertainty](outputs/figures/npv_distribution.png)

## From analysis to delivery

This implementation connects four artefacts that are often produced separately:

1. **Prioritisation model** - MCDA ranks services using traffic, issue volume, process criticality, legal/HR sensitivity and feasibility.
2. **Benefits case** - implementation cost, annual benefit, NPV, benefit-cost ratio and payback are calculated from explicit assumptions.
3. **Delivery backlog** - each remediation item has an owner, test method, acceptance criterion and delivery horizon.
4. **Service prototype** - the [interactive employee portal](https://vedant-au.github.io/accessible-employee-services-business-case/) demonstrates skip navigation, landmarks, labelled inputs, visible focus and text-based status.

The key design choice was to fix reusable patterns before individual pages. Colour tokens, focus states, landmarks, headings, forms and error handling create leverage across multiple employee journeys.

## What I would validate next

The financial model is decision support, not a guaranteed return. Before committing the full budget I would validate support-demand volumes, loaded staff costs, benefit attribution, remediation estimates and disabled-employee task success. Automated accessibility checks would be supplemented with keyboard, screen-reader and user testing.

See the [methodology](docs/METHODOLOGY.md) and [validation record](docs/VALIDATION.md) for formulas, assumptions and evidence limits.

## Reproduce the analysis

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python analysis.py
python -m unittest discover -s tests -v
```

## Repository map

```text
analysis.py           MCDA and financial-model reproduction
data/reference/       Sanitised case inputs and simulation trail
docs/                 Methodology and validation record
outputs/              Reconciled decision tables and figures
prototype/            Accessible employee-service implementation
tests/                Calculation and reconciliation tests
```

## Evidence boundary

This is a sanitised implementation derived from an MSc group case. GlobalTech is the case organisation. The results are not a production accessibility certification or legal advice, and the source workbook, submitted report and presentation are excluded. See [ASSET_NOTICE.md](ASSET_NOTICE.md).
