import { useEffect } from "react"
import { addPropertyControls, ControlType } from "framer"

const FONT_URL = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap"

// ─── Image Base ───────────────────────────────────────────────────────────────
const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

// ─── Props ────────────────────────────────────────────────────────────────────
interface Props {
  marginTop?: number
  bannerText?: string
  highlightText?: string
  productName?: string
  trailText?: string
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function Section06_Banner({
  marginTop = 0,
  bannerText = "Databricks versioned the data. MLflow tracked the model. The AI still broke in production.",
  highlightText = "Because neither tool versions the data state the model was bound to at run time.",
  productName = "SynTitan",
  trailText = "does. That\u2019s the difference these cases reflect.",
}: Props) {
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

        .s6-section {
          width: 100%;
          background-color: #ffffff;
          font-family: "DM Sans", sans-serif;
          word-break: keep-all;
          overflow-wrap: break-word;
          -webkit-font-smoothing: antialiased;
        }

        .s6-inner {
          width: 100%;
          container-type: inline-size;
          padding: 80px 16px;
          box-sizing: border-box;
        }
        @container (min-width: 768px)  { .s6-inner { padding: 80px 32px; } }
        @container (min-width: 1024px) { .s6-inner { padding: 80px 32px; } }
        @container (min-width: 1440px) { .s6-inner { padding: 80px 120px; max-width: 1440px; margin-left: auto; margin-right: auto; } }

        .s6-container { width: 100%; max-width: 1200px; margin: 0 auto; }

        .s6-banner-full {
          width: 100%;
          text-align: center;
          padding: 32px 48px;
          border-radius: 40px;
          background-image: url('${IMAGE_BASE}/bg-wave-teal-blue.png');
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.7;
          color: #0f0f0f;
          isolation: isolate;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        @container (max-width: 767px) {
          .s6-banner-full { padding: 24px; font-size: 16px; }
        }

        .s6-banner-full::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.72);
          z-index: 0;
        }

        .s6-banner-content {
          position: relative;
          z-index: 1;
        }

        .s6-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }

        .s6-banner-strong {
          font-weight: 700;
        }
      `}</style>

      <section className="s6-section" id="section-6" style={{ marginTop }}>
        <div className="s6-inner">
        <div className="s6-container">
          <div className="s6-banner-full">
            <p className="s6-banner-content">
              {bannerText}{" "}
              <strong className="s6-banner-strong">{highlightText}</strong>{" "}
              <span className="s6-product">{productName}</span> {trailText}
            </p>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section06_Banner, {
  marginTop: {
    type: ControlType.Number,
    title: "Margin Top",
    defaultValue: 0,
    min: 0,
    max: 200,
    step: 4,
  },
  bannerText: {
    type: ControlType.String,
    title: "Banner Text",
    defaultValue:
      "Databricks versioned the data. MLflow tracked the model. The AI still broke in production.",
  },
  highlightText: {
    type: ControlType.String,
    title: "Highlight (Bold) Text",
    defaultValue:
      "Because neither tool versions the data state the model was bound to at run time.",
  },
  productName: {
    type: ControlType.String,
    title: "Product Name",
    defaultValue: "SynTitan",
  },
  trailText: {
    type: ControlType.String,
    title: "Trail Text (after product name)",
    defaultValue: "does. That\u2019s the difference these cases reflect.",
  },
})
