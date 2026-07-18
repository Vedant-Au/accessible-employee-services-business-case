# GitHub setup

## Pre-upload check

1. Open `prototype/index.html` locally in Chrome and confirm the prototype loads.
2. Navigate it with the keyboard and verify that focus is visible. Treat this as a demonstration check, not WCAG certification.

## Create and upload

1. On GitHub, select **New repository**.
2. Name it `accessible-employee-services-business-case`, set it to **Public**, and leave all initialisation options unticked.
3. Select **uploading an existing file**.
4. In Finder, open the extracted project folder and press **Command + Shift + .** to show `.github` and `.gitignore`.
5. Drag everything inside the folder into GitHub. Do not upload the ZIP or outer folder.
6. Confirm that `.github/workflows/quality.yml`, `.gitignore`, `README.md`, `analysis.py`, `data`, `docs`, `outputs`, `prototype` and `tests` are staged.
7. Commit directly to `main` with `Add accessible employee services business case`.

## Verify and present

1. Confirm the README renders the prioritisation and NPV charts.
2. Open **Actions** and confirm the `quality` workflow passes.
3. Add description `WCAG prioritisation, financial model and accessible employee-service prototype.`
4. Add topics: `accessibility`, `wcag`, `business-case`, `mcda`, `monte-carlo`, `python`, `service-design`.
5. Pin this repository. It is the strongest all-round evidence of analysis, financial modelling and implementation.

## Publish the prototype

1. Open **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.
3. Run or wait for **Deploy prototype to GitHub Pages** under **Actions**.
4. Open `https://vedant-au.github.io/accessible-employee-services-business-case/`.
