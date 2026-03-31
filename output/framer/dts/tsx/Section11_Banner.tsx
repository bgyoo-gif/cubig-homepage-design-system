// Section11_Banner.tsx — DTS Operational Example: Fraud Detection with Rare Events
// Framer Code Component
import { useEffect } from "react"
import { addPropertyControls, ControlType } from "framer"

const FONT_URL = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap"

const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

interface Props {
  marginTop?: number
  sectionTitle?: string
  sectionTitleHighlight?: string
  sectionTitleSuffix?: string
  bannerText?: string
  bodyText?: string
  taglineText?: string
  ctaBtnText?: string
  ctaBtnHref?: string
}

export default function Section11_Banner({
  marginTop = 0,
  sectionTitle = "Operational Example:",
  sectionTitleHighlight = "Fraud Detection",
  sectionTitleSuffix = "with Rare Events",
  bannerText = "A financial services team building a fraud detection model found that rare anomaly events were severely underrepresented in training data -- real fraud cases were too few to train a reliable classifier.",
  bodyText = "DTS generated synthetic fraud scenarios using differential privacy, expanding the rare-event class to statistically meaningful coverage. The resulting dataset could not be reverse-engineered to individual records -- satisfying both compliance requirements and model training needs.",
  taglineText = "Blocker removed: unusable data (imbalanced dataset / rare class underrepresentation)",
  ctaBtnText = "See enterprise use cases",
  ctaBtnHref = "/#enterprise-use-cases",
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

        .s11-section {
          width: 100%;
          padding: 80px 0;
          font-family: "DM Sans", sans-serif;
          color: #0f0f0f;
          background-color: #ffffff;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s11-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s11-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        @container (min-width: 768px)  { .s11-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s11-container { padding: 0 120px; max-width: 1440px; } }

        /* Section Header */
        .s11-section-header {
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
          margin-bottom: 32px;
        }
        .s11-section-title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          text-wrap: balance;
        }
        .s11-brand { color: #725bea; }
        @container (max-width: 767px) {
          .s11-section-header { text-align: left; }
          .s11-section-title  { font-size: 28px; }
        }
        @container (min-width: 768px)  { .s11-section-title { font-size: 36px; } }
        @container (min-width: 1024px) { .s11-section-title { font-size: 40px; } }

        /* Full-width Banner */
        .s11-banner {
          width: 100%;
          text-align: center;
          padding: 32px 48px;
          border-radius: 40px;
          background-image: url('${IMAGE_BASE}/bg-peach.png');
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
          color: #0f0f0f;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.7;
          isolation: isolate;
        }
        .s11-banner::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.45);
          z-index: 0;
        }
        .s11-banner-text {
          position: relative;
          z-index: 1;
          margin: 0;
          text-wrap: pretty;
        }
        @container (max-width: 767px) {
          .s11-banner { padding: 24px 20px; border-radius: 24px; font-size: 16px; }
        }

        /* Operational Body */
        .s11-operational-body {
          max-width: 860px;
          margin: 32px auto 0;
        }
        .s11-body-text {
          font-size: 16px;
          font-weight: 500;
          color: #0f0f0f;
          line-height: 1.5;
          margin: 0;
          text-wrap: pretty;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s11-tagline {
          font-size: 12px;
          font-weight: 500;
          color: #9c9c9c;
          line-height: 1.5;
          margin-top: 16px;
          text-align: center;
          text-wrap: pretty;
        }
        .s11-cta {
          margin-top: 24px;
          text-align: center;
        }
        .s11-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          font-size: 14px;
          cursor: pointer;
          border: 1px solid #e6e7e9;
          background-color: transparent;
          color: #0f0f0f;
          padding: 8px 16px;
          text-decoration: none;
          transition: background-color 0.2s;
          white-space: nowrap;
        }
        .s11-btn:hover { background-color: #f7f7f7; }
      `}</style>

      <section className="s11-section" id="section-11" style={{ marginTop: `${marginTop}px` }}>
        <div className="s11-inner">
        <div className="s11-container">
          {/* Section Header */}
          <div className="s11-section-header">
            <h2 className="s11-section-title">
              {sectionTitle} <span className="s11-brand">{sectionTitleHighlight}</span>{" "}
              {sectionTitleSuffix}
            </h2>
          </div>

          {/* Full-width Banner with background image */}
          <div className="s11-banner">
            <p className="s11-banner-text">{bannerText}</p>
          </div>

          {/* Body text below banner */}
          <div className="s11-operational-body">
            <p className="s11-body-text">{bodyText}</p>
            <p className="s11-tagline">{taglineText}</p>
            <div className="s11-cta">
              <a href={ctaBtnHref} className="s11-btn">
                {ctaBtnText}
              </a>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section11_Banner, {
  marginTop: {
    type: ControlType.Number,
    title: "Top Margin",
    defaultValue: 0,
    min: 0,
    max: 200,
    step: 10,
  },
  sectionTitle: {
    type: ControlType.String,
    title: "Section Title",
    defaultValue: "Operational Example:",
  },
  sectionTitleHighlight: {
    type: ControlType.String,
    title: "Title Highlight",
    defaultValue: "Fraud Detection",
  },
  sectionTitleSuffix: {
    type: ControlType.String,
    title: "Title Suffix",
    defaultValue: "with Rare Events",
  },
  bannerText: {
    type: ControlType.String,
    title: "Banner Text",
    displayTextArea: true,
    defaultValue:
      "A financial services team building a fraud detection model found that rare anomaly events were severely underrepresented in training data -- real fraud cases were too few to train a reliable classifier.",
  },
  bodyText: {
    type: ControlType.String,
    title: "Body Text",
    displayTextArea: true,
    defaultValue:
      "DTS generated synthetic fraud scenarios using differential privacy, expanding the rare-event class to statistically meaningful coverage. The resulting dataset could not be reverse-engineered to individual records -- satisfying both compliance requirements and model training needs.",
  },
  taglineText: {
    type: ControlType.String,
    title: "Tagline",
    defaultValue:
      "Blocker removed: unusable data (imbalanced dataset / rare class underrepresentation)",
  },
  ctaBtnText: {
    type: ControlType.String,
    title: "CTA Button Text",
    defaultValue: "See enterprise use cases",
  },
  ctaBtnHref: {
    type: ControlType.String,
    title: "CTA Button Link",
    defaultValue: "/#enterprise-use-cases",
  },
})
