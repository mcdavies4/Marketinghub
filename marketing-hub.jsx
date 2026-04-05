import { useState } from "react";

const APPS = [
  {
    id: "tally",
    name: "Tally",
    tagline: "Credit layer API for usage-based SaaS",
    description: "A credit layer API for developers building usage-based SaaS products. Features SDK, sandbox mode, low balance webhooks, credit expiry, and a hosted top-up page.",
    stage: "Launched",
    market: "Global / Developers",
    url: "usetally.dev",
    color: "#00D4AA",
    accent: "#00FF99",
    category: "Developer Infrastructure",
  },
  {
    id: "atlas-ng",
    name: "Atlas Nigeria",
    tagline: "AI logistics dispatch bot · Abuja",
    description: "AI-powered logistics courier dispatch bot for the Nigerian market (Abuja), enabling businesses to dispatch couriers via WhatsApp and Telegram with intelligent routing.",
    stage: "Live",
    market: "Nigeria · Abuja",
    url: "atlas.app",
    color: "#FF6B35",
    accent: "#FFB347",
    category: "Logistics / AI",
  },
  {
    id: "atlas-uk",
    name: "Atlas UK",
    tagline: "AI logistics dispatch bot · London",
    description: "AI-powered logistics courier dispatch bot for the UK market (London), enabling businesses to dispatch couriers via WhatsApp and Telegram with intelligent routing.",
    stage: "Live",
    market: "UK · London",
    url: "atlas.app",
    color: "#FF8C42",
    accent: "#FFCC80",
    category: "Logistics / AI",
  },
  {
    id: "zeno",
    name: "Zeno",
    tagline: "AI banking assistant for Nigeria",
    description: "AI banking assistant for Nigeria built on WhatsApp and Telegram. Supports BVN/NIN KYC via Prembly, open banking via Mono, and payments via Flutterwave.",
    stage: "Live",
    market: "Nigeria",
    url: "joinzeno.co.uk",
    color: "#6C63FF",
    accent: "#A78BFA",
    category: "Fintech / AI",
  },
  {
    id: "chorequest",
    name: "ChoreQuest",
    tagline: "Family chore & allowance management",
    description: "Family chore and allowance management app with chore approval workflow, recurring chores, photo proof upload, and Stripe billing at $9.99/month.",
    stage: "Live",
    market: "Global / Families",
    url: "chorequestv2.vercel.app",
    color: "#F59E0B",
    accent: "#FDE68A",
    category: "Productivity / Family",
  },
  {
    id: "ledgr",
    name: "Ledgr",
    tagline: "Finance & invoicing for freelancers",
    description: "A finance and invoicing app built for freelancers. Manage invoices, track income and expenses, and stay on top of your finances — all in one clean interface.",
    stage: "Live",
    market: "Global / Freelancers",
    url: "ledgrapp.co.uk",
  },
  {
    id: "afriilink",
    name: "Afriilink",
    tagline: "Link-in-bio for African creators",
    description: "A single-page link hub for African creators — like Linktree but built with the African creator economy in mind. Showcase all your links, social profiles, and content in one branded page.",
    stage: "Live",
    market: "Africa / Creators",
    url: "afriilink.com",
    accent: "#F9A8D4",
    category: "Creator Tools",
  },
];

const PLATFORM_CONFIG = {
  twitter: {
    label: "Twitter / X",
    icon: "𝕏",
    limit: 280,
    style: "punchy, hook-first, thread format with numbered tweets",
    format: "Thread (1/n)",
  },
  linkedin: {
    label: "LinkedIn",
    icon: "in",
    limit: 3000,
    style: "professional but conversational, founder story angle, insight-driven",
    format: "Long-form post",
  },
};

const CONTENT_TYPES = [
  { id: "launch", label: "🚀 Launch Announcement" },
  { id: "feature", label: "⚡ Feature Spotlight" },
  { id: "story", label: "📖 Founder Story" },
  { id: "social_proof", label: "💬 Social Proof / Traction" },
  { id: "problem", label: "🎯 Problem & Solution" },
];

function StatusBadge({ stage }) {
  const colors = {
    Launched: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    Live: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    Building: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  };
  return (
    <span className={`text-xs px-2 py-0.5 rounded-full border font-mono ${colors[stage] || colors.Building}`}>
      {stage}
    </span>
  );
}

function AppCard({ app, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-xl border transition-all duration-200 group ${
        selected
          ? "border-white/30 bg-white/10 scale-[1.02]"
          : "border-white/10 bg-white/5 hover:bg-white/8 hover:border-white/20"
      }`}
    >
      <div className="flex items-start justify-between mb-2">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-black"
          style={{ backgroundColor: app.color }}
        >
          {app.name[0]}
        </div>
        <StatusBadge stage={app.stage} />
      </div>
      <div className="font-semibold text-white text-sm mt-2">{app.name}</div>
      <div className="text-xs text-white/50 mt-0.5">{app.tagline}</div>
      <div className="text-xs text-white/30 mt-2 font-mono">{app.market}</div>
    </button>
  );
}

function GeneratedContent({ content, platform }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-4 rounded-xl border border-white/10 bg-white/5 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/5">
        <span className="text-xs text-white/50 font-mono">
          {PLATFORM_CONFIG[platform]?.label} · {content.length} chars
        </span>
        <button
          onClick={handleCopy}
          className="text-xs px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all"
        >
          {copied ? "✓ Copied!" : "Copy"}
        </button>
      </div>
      <div className="p-4">
        <pre className="text-sm text-white/80 whitespace-pre-wrap font-sans leading-relaxed">
          {content}
        </pre>
      </div>
    </div>
  );
}

export default function MarketingHub() {
  const [selectedApp, setSelectedApp] = useState(null);
  const [platform, setPlatform] = useState("twitter");
  const [contentType, setContentType] = useState("launch");
  const [customContext, setCustomContext] = useState("");
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(null);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("generate"); // "generate" | "dashboard"

  const handleGenerate = async () => {
    if (!selectedApp) return;
    setLoading(true);
    setGenerated(null);
    setError(null);

    const app = APPS.find((a) => a.id === selectedApp);
    const plt = PLATFORM_CONFIG[platform];
    const type = CONTENT_TYPES.find((t) => t.id === contentType);

    const systemPrompt = `You are a world-class tech startup marketer and copywriter. You write authentic, high-performing social media content for indie hackers and solo founders. Your writing is direct, punchy, and avoids corporate fluff. You write like a founder, not an agency.`;

    const userPrompt = `Write a ${type.label} post for ${app.name} for ${plt.label}.

ABOUT THE APP:
- Name: ${app.name}
- Tagline: ${app.tagline}
- Description: ${app.description}
- Category: ${app.category}
- Target Market: ${app.market}
- Stage: ${app.stage}
${app.url ? `- URL: ${app.url}` : ""}

PLATFORM: ${plt.label}
FORMAT: ${plt.format}
STYLE: ${plt.style}
CHARACTER LIMIT: ~${plt.limit} characters

${customContext ? `EXTRA CONTEXT FROM FOUNDER: ${customContext}` : ""}

${
  platform === "twitter"
    ? `Format as a numbered thread. Start with a killer hook tweet (no number), then tweets 2-6 that build the story. End with a CTA tweet. Each tweet must be under 280 chars. Separate tweets with a blank line.`
    : `Write a LinkedIn post. Start with a compelling first line that stops the scroll. Use short paragraphs. Add 3-5 relevant hashtags at the end.`
}

Write only the post content — no preamble, no explanation.`;

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system: systemPrompt,
          prompt: userPrompt,
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "API error");
      const text = data.text || "";
      if (!text) throw new Error("No content returned");
      setGenerated(text);
    } catch (err) {
      setError("Generation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen text-white"
      style={{
        background: "radial-gradient(ellipse at top left, #0f1729 0%, #080d1a 50%, #040810 100%)",
        fontFamily: "'Georgia', serif",
      }}
    >
      {/* Grain overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-400 to-violet-600 flex items-center justify-center text-xs font-bold">
              36
            </div>
            <span className="text-white/40 text-sm font-mono tracking-widest uppercase">The 36th Company</span>
          </div>
          <h1 className="text-4xl font-bold text-white" style={{ letterSpacing: "-0.03em" }}>
            Marketing Hub
          </h1>
          <p className="text-white/40 text-sm mt-1">
            AI-generated content for your product portfolio · X & LinkedIn
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-1 mb-8 bg-white/5 p-1 rounded-xl w-fit border border-white/10">
          {["generate", "dashboard"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-lg text-sm transition-all capitalize ${
                activeTab === tab
                  ? "bg-white text-black font-semibold"
                  : "text-white/50 hover:text-white"
              }`}
            >
              {tab === "generate" ? "✦ Generate Content" : "◈ Dashboard"}
            </button>
          ))}
        </div>

        {activeTab === "dashboard" && (
          <div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: "Products", value: "7" },
                { label: "Markets", value: "NG + UK" },
                { label: "Twitter Handle", value: "@mcdavies4" },
                { label: "Company", value: "The 36th Co." },
              ].map((stat) => (
                <div key={stat.label} className="p-5 rounded-xl border border-white/10 bg-white/5">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/40 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {APPS.map((app) => (
                <div
                  key={app.id}
                  className="p-5 rounded-xl border border-white/10 bg-white/5"
                  style={{ borderLeftColor: app.color, borderLeftWidth: "3px" }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-white">{app.name}</span>
                    <StatusBadge stage={app.stage} />
                  </div>
                  <p className="text-xs text-white/50 leading-relaxed mb-3">{app.tagline}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full text-white/50">{app.category}</span>
                    <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full text-white/50">{app.market}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "generate" && (
          <div className="grid grid-cols-3 gap-6">
            {/* Left — App picker */}
            <div>
              <p className="text-xs text-white/40 font-mono uppercase tracking-widest mb-3">01 · Select App</p>
              <div className="space-y-2">
                {APPS.map((app) => (
                  <AppCard
                    key={app.id}
                    app={app}
                    selected={selectedApp === app.id}
                    onClick={() => setSelectedApp(app.id)}
                  />
                ))}
              </div>
            </div>

            {/* Middle — Config */}
            <div>
              <p className="text-xs text-white/40 font-mono uppercase tracking-widest mb-3">02 · Configure</p>

              {/* Platform */}
              <div className="mb-5">
                <p className="text-xs text-white/40 mb-2">Platform</p>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(PLATFORM_CONFIG).map(([key, plt]) => (
                    <button
                      key={key}
                      onClick={() => setPlatform(key)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        platform === key
                          ? "border-white/40 bg-white/10"
                          : "border-white/10 bg-white/5 hover:bg-white/8"
                      }`}
                    >
                      <div className="text-lg mb-1">{plt.icon}</div>
                      <div className="text-xs text-white/70">{plt.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Content type */}
              <div className="mb-5">
                <p className="text-xs text-white/40 mb-2">Content Type</p>
                <div className="space-y-1.5">
                  {CONTENT_TYPES.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setContentType(type.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all ${
                        contentType === type.id
                          ? "bg-white/15 text-white border border-white/20"
                          : "text-white/50 hover:text-white hover:bg-white/8 border border-transparent"
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Extra context */}
              <div className="mb-5">
                <p className="text-xs text-white/40 mb-2">Extra context (optional)</p>
                <textarea
                  value={customContext}
                  onChange={(e) => setCustomContext(e.target.value)}
                  placeholder="e.g. We just hit 100 signups, launching on Product Hunt Tuesday..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-xs text-white/70 placeholder-white/20 resize-none focus:outline-none focus:border-white/30 leading-relaxed"
                  rows={4}
                />
              </div>

              <button
                onClick={handleGenerate}
                disabled={!selectedApp || loading}
                className={`w-full py-3 rounded-xl text-sm font-semibold transition-all ${
                  !selectedApp || loading
                    ? "bg-white/10 text-white/30 cursor-not-allowed"
                    : "bg-white text-black hover:bg-white/90 active:scale-95"
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-spin">◌</span> Generating...
                  </span>
                ) : (
                  "✦ Generate Post"
                )}
              </button>
            </div>

            {/* Right — Output */}
            <div>
              <p className="text-xs text-white/40 font-mono uppercase tracking-widest mb-3">03 · Output</p>

              {!generated && !loading && !error && (
                <div className="h-64 rounded-xl border border-dashed border-white/10 flex items-center justify-center">
                  <p className="text-white/20 text-sm text-center">
                    Select an app and hit<br />Generate Post
                  </p>
                </div>
              )}

              {loading && (
                <div className="h-64 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl animate-pulse mb-2">✦</div>
                    <p className="text-white/30 text-xs">Writing your post...</p>
                  </div>
                </div>
              )}

              {error && (
                <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/10 text-red-300 text-sm">
                  {error}
                </div>
              )}

              {generated && !loading && (
                <GeneratedContent content={generated} platform={platform} />
              )}

              {generated && !loading && (
                <button
                  onClick={handleGenerate}
                  className="mt-3 w-full py-2 rounded-xl text-xs text-white/40 hover:text-white/70 border border-white/10 hover:border-white/20 transition-all"
                >
                  ↻ Regenerate
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
