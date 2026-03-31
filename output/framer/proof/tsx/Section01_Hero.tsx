import { useEffect } from "react"
import { addPropertyControls, ControlType } from "framer"

const FONT_URL = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap"

// ─── Design Tokens ───────────────────────────────────────────────────────────
const tokens = {
  colorBrandPrimary: "#3061f2",
  colorBrandPurple: "#725bea",
  colorBrandPurpleLt: "#c6c5fa",
  colorTextPrimary: "#0f0f0f",
  colorTextSecondary: "#636363",
  colorBorderDefault: "#e6e7e9",
  colorSurfaceWhite: "#ffffff",
  colorSurfaceLight: "#f7f7f7",
  colorWhite: "#ffffff",
  gradientBrand: "linear-gradient(130deg, #673AFF 0%, #D932FF 50%, #FF266A 100%)",
  fontBase: '"DM Sans", sans-serif',
  fontBrand: '"Oxanium", sans-serif',
  fontCode: '"Fragment Mono", monospace',
}

// ─── Props ────────────────────────────────────────────────────────────────────
interface Props {
  marginTop: number
  heroTitle: string
  heroDescription: string
  bannerText: string
  ctaPrimaryLabel: string
  ctaPrimaryHref: string
  ctaSecondaryLabel: string
  ctaSecondaryHref: string
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Section01_Hero({
  marginTop = 0,
  heroTitle = "Proof",
  heroDescription = "PoC runs in controlled conditions. Production data changes. Pipelines update. Environments shift. Here's the evidence that AI execution doesn't have to break.",
  bannerText = "True AI-ready data means it is usable, privacy-safe, and stable for production execution.",
  ctaPrimaryLabel = "Request Walkthrough",
  ctaPrimaryHref = "mailto:contact@cubig.ai",
  ctaSecondaryLabel = "Try SynTitan ↗",
  ctaSecondaryHref = "https://syntitan.ai",
}: Partial<Props>) {
  useEffect(() => {
    const id = "font-dm-sans"
    if (document.getElementById(id)) return
    const link = document.createElement("link")
    link.id = id
    link.rel = "stylesheet"
    link.href = FONT_URL
    document.head.appendChild(link)
  }, [])

  return (
    <>
      <style>{`

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s1-section {
          width: 100%; overflow: hidden; box-sizing: border-box;
          padding: 100px 0 100px;
          background-color: ${tokens.colorSurfaceWhite};
          font-family: ${tokens.fontBase};
          -webkit-font-smoothing: antialiased;
        }

        .s1-inner {
          width: 100%;
          container-type: inline-size;
        }

        .s1-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        @container (min-width: 768px)  { .s1-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s1-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s1-container { padding: 0 120px; max-width: 1440px; } }

        .s1-hero {
          max-width: 860px;
          margin: 0 auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .s1-hero__title {
          font-family: ${tokens.fontBase};
          font-size: 68px;
          font-weight: 700;
          color: ${tokens.colorTextPrimary};
          line-height: 1.2;
          letter-spacing: -2px;
          margin-bottom: 12px;
          text-wrap: balance;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        @container (max-width: 767px) {
          .s1-hero__title { font-size: 40px; letter-spacing: -1px; }
        }
        @container (min-width: 768px) and (max-width: 1023px) {
          .s1-hero__title { font-size: 48px; }
        }
        @container (min-width: 1024px) and (max-width: 1439px) {
          .s1-hero__title { font-size: 56px; }
        }

        .s1-hero__description {
          font-size: 18px;
          color: ${tokens.colorTextSecondary};
          line-height: 1.7;
          max-width: 720px;
          margin: 0 auto 32px;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        @container (min-width: 1440px) { .s1-hero__description { max-width: 860px; } }

        .s1-banner {
          width: 100%;
          padding: 16px 24px;
          border-top: 1px solid ${tokens.colorBorderDefault};
          border-bottom: 1px solid ${tokens.colorBorderDefault};
          background-color: ${tokens.colorSurfaceLight};
          font-size: 14px;
          line-height: 1.7;
          text-align: center;
          word-break: keep-all;
          overflow-wrap: break-word;
          margin-top: 32px;
          margin-bottom: 32px;
          font-family: ${tokens.fontBase};
          color: ${tokens.colorTextPrimary};
        }

        .s1-hero__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
        }
        @container (max-width: 767px) {
          .s1-hero__actions { flex-direction: column; align-items: center; width: 100%; }
        }

        .s1-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 9999px;
          font-family: ${tokens.fontBase};
          font-weight: 500;
          font-size: 16px;
          cursor: pointer;
          border: none;
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap;
          text-decoration: none;
          padding: 12px 32px;
        }
        @container (max-width: 767px) {
          .s1-btn { width: 100%; max-width: 320px; }
        }

        .s1-btn--primary {
          background: ${tokens.gradientBrand};
          color: ${tokens.colorWhite};
        }
        .s1-btn--primary:hover { opacity: 0.88; }

        .s1-btn--secondary {
          background-color: transparent;
          color: ${tokens.colorTextPrimary};
          border: 1px solid ${tokens.colorBorderDefault};
        }
        .s1-btn--secondary:hover { background-color: ${tokens.colorSurfaceLight}; }
      `}</style>

      <section
        className="s1-section"
        id="section-1"
        style={{ marginTop }}
      >
        <div className="s1-inner">
        <div className="s1-container">
          <div className="s1-hero">
            <h1 className="s1-hero__title">{heroTitle}</h1>
            <p className="s1-hero__description">{heroDescription}</p>

            <div className="s1-banner" role="note">
              {bannerText}
            </div>

            <div className="s1-hero__actions">
              <a
                href={ctaPrimaryHref}
                className="s1-btn s1-btn--primary"
              >
                {ctaPrimaryLabel}
              </a>
              <a
                href={ctaSecondaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="s1-btn s1-btn--secondary"
              >
                {ctaSecondaryLabel}
              </a>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

// ─── Property Controls ────────────────────────────────────────────────────────
addPropertyControls(Section01_Hero, {
  marginTop: {
    type: ControlType.Number,
    title: "Margin Top",
    defaultValue: 0,
    min: 0,
    max: 200,
    step: 10,
    displayStepper: true,
  },
  heroTitle: {
    type: ControlType.String,
    title: "Title",
    defaultValue: "Proof",
  },
  heroDescription: {
    type: ControlType.String,
    title: "Description",
    defaultValue:
      "PoC runs in controlled conditions. Production data changes. Pipelines update. Environments shift. Here's the evidence that AI execution doesn't have to break.",
    displayTextArea: true,
  },
  bannerText: {
    type: ControlType.String,
    title: "Banner Text",
    defaultValue:
      "True AI-ready data means it is usable, privacy-safe, and stable for production execution.",
    displayTextArea: true,
  },
  ctaPrimaryLabel: {
    type: ControlType.String,
    title: "CTA Primary",
    defaultValue: "Request Walkthrough",
  },
  ctaPrimaryHref: {
    type: ControlType.String,
    title: "CTA Primary URL",
    defaultValue: "mailto:contact@cubig.ai",
  },
  ctaSecondaryLabel: {
    type: ControlType.String,
    title: "CTA Secondary",
    defaultValue: "Try SynTitan ↗",
  },
  ctaSecondaryHref: {
    type: ControlType.String,
    title: "CTA Secondary URL",
    defaultValue: "https://syntitan.ai",
  },
})
