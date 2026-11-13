import { ImageResponse } from "next/og";

export const alt = "Rishabh Yadav — Full-Stack & AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Share card shown when the site link is posted on LinkedIn, X, Slack, etc.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#111214",
          color: "#f2f2f2",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 14,
              border: "2px solid #3a3d44",
              background: "#1c1e22",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            RY
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 22, color: "#a1a1aa" }}>
            <div style={{ width: 12, height: 12, borderRadius: 6, background: "#4ade80" }} />
            Open to new opportunities
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -3 }}>Rishabh Yadav</div>
          <div style={{ marginTop: 12, fontSize: 36, color: "#93a9ff" }}>
            Full-Stack &amp; AI Engineer
          </div>
        </div>

        <div style={{ display: "flex", gap: 14, fontSize: 22, color: "#a1a1aa" }}>
          {["Next.js", "TypeScript", "FastAPI", "LangChain", "LangGraph", "RAG"].map((t) => (
            <div
              key={t}
              style={{ display: "flex", padding: "8px 16px", border: "1px solid #3a3d44", borderRadius: 8 }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
