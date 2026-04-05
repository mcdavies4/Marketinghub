# Marketing Hub · The 36th Company

AI-powered social media content generator for your product portfolio.

---

## Project Structure

```
marketing-hub/
├── api/
│   └── generate.js        # Vercel serverless function (proxies Anthropic API)
├── src/
│   ├── App.jsx            # Main React app
│   ├── main.jsx           # Entry point
│   └── index.css          # Tailwind CSS
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## Local Setup

```bash
# 1. Install dependencies
npm install

# 2. Create a .env file
echo "ANTHROPIC_API_KEY=your_key_here" > .env

# 3. Run locally
npm run dev
```

> Get your API key at https://console.anthropic.com

---

## Deploy to Vercel

### Option A — Vercel CLI (fastest)

```bash
npm install -g vercel
vercel
```

Follow the prompts. When asked about the framework, select **Vite**.

### Option B — GitHub + Vercel Dashboard

1. Push this project to a GitHub repo
2. Go to https://vercel.com → **Add New Project**
3. Import your repo
4. Set **Framework Preset** to `Vite`
5. Add environment variable:
   - Key: `ANTHROPIC_API_KEY`
   - Value: your key from console.anthropic.com
6. Click **Deploy**

That's it — Vercel auto-detects the `/api` folder and deploys `generate.js` as a serverless function.

---

## Environment Variables

| Variable | Description |
|---|---|
| `ANTHROPIC_API_KEY` | Your Anthropic API key (server-side only, never exposed to browser) |

---

## How it works

- The React frontend calls `/api/generate` (your own serverless function)
- The serverless function adds the API key and proxies the request to Anthropic
- The API key never touches the browser
