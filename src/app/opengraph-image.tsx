import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const runtime = "edge";
export const alt = `${profile.name} — ${profile.role.en}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#07070c",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(139,107,255,0.35), transparent 45%), radial-gradient(circle at 85% 80%, rgba(63,224,208,0.25), transparent 45%)",
          fontFamily: '"Arial"',
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 26,
            color: "#3fe0d0",
            letterSpacing: 2,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              backgroundColor: "#3fe0d0",
            }}
          />
          AVAILABLE FOR OPPORTUNITIES
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 104,
            fontWeight: 700,
            lineHeight: 1.02,
            color: "#ffffff",
          }}
        >
          <span>Muhammad</span>
          <span style={{ color: "#8b6bff" }}>Moeez</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#8b8b9c",
            marginTop: 32,
            maxWidth: 900,
          }}
        >
          Deep Learning &amp; Full-Stack Developer
        </div>
      </div>
    ),
    { ...size }
  );
}
