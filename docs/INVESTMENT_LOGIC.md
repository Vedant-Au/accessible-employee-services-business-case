# Accessibility investment logic

## Priority score

Four services are compared using traffic (20%), issue count (25%), process criticality (25%), legal/HR sensitivity (15%) and feasibility (15%). Traffic and issue counts are normalised to the maximum; judgement-based values remain visible in the reference table for challenge.

## Benefits case

Benefits include productivity time, assisted-support deflection, retention protection, expected legal-risk reduction and avoided rework. Costs include audit, design-system work, development, QA, user research, change enablement, contingency and annual governance.

The model discounts three years of annual flows at 3.5%:

- `NPV = PV gross benefits − implementation cost − PV governance cost`
- `benefit-cost ratio = PV benefits / PV costs`

## Uncertainty treatment

The repository preserves 1,000 triangular-input draws from the source model as a frozen audit trail. Python independently reconciles the deterministic base case. The distribution tests whether the decision survives plausible assumption changes; it is not a forecast of realised savings.

## Discovery questions before funding

Validate actual support contacts, loaded staff cost, attribution of time savings, remediation estimates, adoption and disabled-employee task success. Update the model with observed ranges before progressing beyond stabilisation.
