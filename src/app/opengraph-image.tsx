import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Kayiratech — Architecture IT & Transformation Digitale";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "public/logo-kayiratech.png"), "base64");
  const logoSrc = `data:image/png;base64,${logoData}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f172a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 32,
        }}
      >
        <img src={logoSrc} width={320} height={128} style={{ objectFit: "contain" }} />
        <div
          style={{
            color: "#94a3b8",
            fontSize: 28,
            fontFamily: "sans-serif",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          Architecture IT · Transformation Digitale · Montréal
        </div>
      </div>
    ),
    { ...size }
  );
}
