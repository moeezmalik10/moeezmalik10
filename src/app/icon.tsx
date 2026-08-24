import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 14,
          backgroundImage: "linear-gradient(135deg, #8b6bff, #3fe0d0)",
          color: "#07070c",
          fontSize: 38,
          fontWeight: 800,
          fontFamily: '"Arial"',
        }}
      >
        M
      </div>
    ),
    { ...size }
  );
}
