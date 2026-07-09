# Portfolio chat assistant (Claude-powered)

A minimal Node/Express server that answers visitor questions about Varsha using Claude (Opus 4.8). It builds its knowledge from:

- `Varsha_Ravichandran.pdf` (resume, parsed automatically at startup)
- `index.html` (the portfolio page itself)
- Varsha's LinkedIn profile URL (hardcoded in `server.js` — LinkedIn blocks scraping, so only the link is included, not the profile content)

The assistant is guardrailed to only answer questions about Varsha's background, skills, projects, and experience, and politely declines anything off-topic.

## Setup

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

## Usage

- Open `http://localhost:3000` in your browser.
- Click the chat icon in the bottom-right corner and ask a question.

## Notes & security

- This is a minimal demo; consider rate-limiting and input validation before deploying publicly.
