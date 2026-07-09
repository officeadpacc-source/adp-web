# Google reCAPTCHA v3 — Next.js + Netlify Setup Guide

Both the contact form and the quote wizard (cenová ponuka) on this site are equipped with Google reCAPTCHA v3 (Score-based).

reCAPTCHA v3 works invisibly (no user interaction required) and generates a score (0.0 to 1.0) for every submission to evaluate how likely it is to be a bot. If the score is low (under `0.5`) or verification fails, the serverless functions will block the email silently (mimicking success so spammers do not learn how to bypass it).

---

## 1. Register with Google reCAPTCHA

To set up or change the keys:
1. Go to the [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin/create).
2. Enter a **Label** (e.g. `adpacc-fresh`).
3. Select **Score based (v3)** as the reCAPTCHA type.
4. Under **Domains**, add:
   - `adpacc.sk` (for production)
   - `localhost` (for local development)
   - Your Netlify site domain (e.g., `*.netlify.app`)
5. Select or create the Google Cloud project to link to.
6. Click **Submit** to generate your **Site Key** and **Secret Key**.

---

## 2. Set Up Environment Variables

To activate verification, you must add the site and secret keys to your environment. If they are not configured, the site will degrade gracefully and use the honeypot + time-gate defenses.

### Netlify (Production)
Go to **Site settings** → **Environment variables** in the Netlify dashboard and add:

| Environment Variable | Value |
| --- | --- |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Your **Site Key** (starts with `6L...`) |
| `RECAPTCHA_SECRET_KEY` | Your **Secret Key** |

### Local Development (`.env`)
Add the keys to your local `.env` file to test locally:
```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-new-site-key
RECAPTCHA_SECRET_KEY=your-new-secret-key
```

---

## 3. How to Test
1. Run local development with Netlify functions:
   ```bash
   npx netlify dev
   ```
2. Submit a contact form or request a quote.
3. Check the console and server logs:
   - If the verification succeeded, the email will be sent via SMTP2GO.
   - If the verification failed (or score < 0.5), you will see `reCAPTCHA failed: [IP] [Details]` in the CLI console logs, and the request will return a success JSON but send no email.
