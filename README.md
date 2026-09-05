# Gulf Coast Automation

Marketing site for Gulf Coast Automation — practical automation for Houston small businesses.

## Structure

- `index.html` — Home
- `services.html` — Services
- `pricing.html` — Pricing
- `about.html` — About
- `contact.html` — Contact form
- `lawn-care-demo.html` — Sample operations dashboard
- `css/styles.css` — shared styles
- `js/main.js` — nav + form fallback
- `assets/logo.svg` — brand mark

## Local development

No build step. Open `index.html` or serve the folder with any static file server.

## Deployment

Cloudflare Pages, connected to this repo. Pushes to `main` deploy automatically.

## To-do

- **Still recommended:** replace `YOUR_FORM_ID` in `contact.html` with a real Formspree form ID. Until then, the form falls back to `mailto:tjshed@gmail.com`.
