import { addPropertyControls, ControlType } from "framer"

// ─── Image Base ───────────────────────────────────────────────────────────────
const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

// ─── Props ────────────────────────────────────────────────────────────────────
interface Props {
  marginTop?: number
  bannerText?: string
  highlightText?: string
  productName?: string
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function Section06_Banner({
  marginTop = 0,
  bannerText = "Databricks versioned the data. MLflow tracked the model. The AI still broke in production.",
  highlightText = "Because neither tool versions the data state the model was bound to at run time.",
  productName = "SynTitan",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Oxanium:wght@700&family=Fragment+Mono:ital@0;1&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s6-section {
          width: 100%;
          background-color: #ffffff;
          padding: 80px 16px;
          font-family: "DM Sans", sans-serif;
          word-break: keep-all;
          overflow-wrap: break-word;
          -webkit-font-smoothing: antialiased;
        }
        @media (min-width: 768px)  { .s6-section { padding: 80px 32px; } }
        @media (min-width: 1024px) { .s6-section { padding: 80px 32px; } }
        @media (min-width: 1440px) { .s6-section { padding: 80px 120px; max-width: 1440px; margin-left: auto; margin-right: auto; } }

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
        @media (max-width: 767px) {
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
        <div className="s6-container">
          <div className="s6-banner-full">
            <p className="s6-banner-content">
              {bannerText}{" "}
              <strong className="s6-banner-strong">{highlightText}</strong>{" "}
              <span className="s6-product">{productName}</span> does. That&rsquo;s the difference these cases reflect.
            </p>
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
})
