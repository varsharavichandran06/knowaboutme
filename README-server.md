# Portfolio backend (Claude chat assistant)

A minimal Node/Express server behind the portfolio site. It powers the **chat assistant** (currently disabled in `index.html`/`script.js`) — answers visitor questions about Varsha using Claude (Opus 4.8), built from `Varsha_Ravichandran.pdf`, `index.html`, and her LinkedIn URL.

Running this server requires it to be deployed and kept running somewhere (Render, Railway, Fly.io, etc.) — it does **not** run on GitHub Pages, which only serves static files. It's optional; the rest of the site works without it.

The **contact form** does not use this backend at all — it's an embedded Google Form, so it works on a purely static GitHub Pages deployment. See `## Contact form setup` below.

## Setup (chat assistant only)

1. Add your Anthropic API key to `.env`:

```
ANTHROPIC_API_KEY=your_anthropic_api_key_here
```

2. Install dependencies and run:

```powershell
cd path\to\knowaboutme
npm install
npm start
# or for development with auto-reload:
npm run dev
```

3. Open `http://localhost:3000` in your browser.

## Contact form setup (no server required, free & unlimited)

The contact section embeds a real Google Form via `<iframe>` (see `index.html`, inside `.contact-form-wrapper`). Google handles hosting, spam filtering, submission storage, and (once you turn it on) emailing you — no code on your side beyond the embed URL.

1. Go to [forms.google.com](https://forms.google.com) and create a new form. Add fields matching what the site previously asked for:
   - **Name** (short answer, required)
   - **Title / Subject** (short answer, required)
   - **Message** (paragraph, required)
   - **Your email or LinkedIn profile URL** (short answer, required)
2. Turn on email notifications: in the **Responses** tab, click the three-dot menu → **Get email notifications for new responses**. Now every submission lands in your inbox automatically.
3. Click **Send** (top right) → the `<>` (embed HTML) icon. Copy the `src` URL from the `<iframe>` snippet it gives you — it looks like `https://docs.google.com/forms/d/e/1FAIpQLS.../viewform?embedded=true`.
4. In `index.html`, find the `<iframe>` inside `.google-form-embed` and replace `YOUR_GOOGLE_FORM_ID` in the `src` attribute with your real form's ID (the long string between `/d/e/` and `/viewform`), or just paste the whole `src` URL Google gave you.
5. Google's embed height depends on how many fields your form has — if the form gets cut off or leaves extra blank space, adjust the `height="800"` attribute on the `<iframe>` up or down.

That's it — no environment variables, no server, works as-is on GitHub Pages, and Google Forms has no submission cap on the free tier.

**One UX difference from the old email-based form:** Google's notification email comes from Google Forms itself, not from the visitor — there's no automatic "Reply-To" like Formspree offered. To respond, open the notification email (or the Google Form's Responses sheet), copy the "Your email or LinkedIn profile URL" the visitor gave, and reach out manually.

## Notes & security

- The chat assistant backend is optional and only needed if you re-enable the chat widget and deploy `server.js` somewhere with Node support.
