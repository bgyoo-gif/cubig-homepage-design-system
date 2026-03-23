import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

interface Props {
  title?: string
  bannerText?: string
  body?: string
  tagline?: string
  ctaLabel?: string
  ctaHref?: string
}

export default function Section11_OperationalExample({
  title = "Operational Example: Fraud Detection with Rare Events",
  bannerText = "A financial services team building a fraud detection model found that rare anomaly events were severely underrepresented in training data -- real fraud cases were too few to train a reliable classifier.",
  body = "DTS generated synthetic fraud scenarios using differential privacy, expanding the rare-event class to statistically meaningful coverage. The resulting dataset could not be reverse-engineered to individual records -- satisfying both compliance requirements and model training needs.",
  tagline = "Blocker removed: unusable data (imbalanced dataset / rare class underrepresentation)",
  ctaLabel = "See enterprise use cases",
  ctaHref = "/#enterprise-use-cases",
}: Props) {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s11-section {
          width: 100%;
          padding: 80px 0;
          background-color: #ffffff;
          font-family: "DM Sans", sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        .s11-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s11-section-header {
          margin-bottom: 32px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s11-title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: balance;
        }
        .s11-title-brand { color: #a617ff; }
        .s11-banner-full {
          width: 100%;
          text-align: center;
          padding: 32px 48px;
          border-radius: 40px;
          background-image: url('${IMAGE_BASE}/bg-peach.png');
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.7;
          border: none;
          isolation: isolate;
        }
        .s11-banner-full::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.45);
          z-index: 0;
        }
        .s11-banner-full > p {
          position: relative;
          z-index: 1;
          color: #0f0f0f;
        }
        .s11-body-wrap {
          max-width: 860px;
          margin: 32px auto 0;
        }
        .s11-body-text {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 1.5;
          color: #0f0f0f;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s11-tagline {
          margin-top: 16px;
          color: #9c9c9c;
          text-align: center;
          font-size: 12px;
          font-weight: 500;
          line-height: 1.5;
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
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap;
          text-decoration: none;
          padding: 8px 16px;
          background-color: transparent;
          color: #0f0f0f;
          border: 1px solid #e6e7e9;
        }
        .s11-btn:hover { background-color: #f7f7f7; }

        @media (min-width: 768px) {
          .s11-container { padding: 0 32px; }
          .s11-title { font-size: 22px; }
          .s11-section-header { text-align: left; }
        }
        @media (min-width: 1024px) {
          .s11-container { padding: 0 32px; }
          .s11-title { font-size: 24px; }
        }
        @media (min-width: 1440px) {
          .s11-container { padding: 0 120px; max-width: 1440px; }
          .s11-title { font-size: 28px; }
        }
        @media (max-width: 767px) {
          .s11-section-header { text-align: left; }
          .s11-title { font-size: 20px; }
          .s11-banner-full { padding: 24px; }
          .s11-body-wrap { margin: 24px auto 0; }
        }
      `}</style>
      <section className="s11-section">
        <div className="s11-container">
          <div className="s11-section-header">
            <h2 className="s11-title">
              Operational Example: <span className="s11-title-brand">Fraud Detection</span> with Rare Events
            </h2>
          </div>
          <div className="s11-banner-full">
            <p>{bannerText}</p>
          </div>
          <div className="s11-body-wrap">
            <p className="s11-body-text">{body}</p>
            <p className="s11-tagline">{tagline}</p>
            <div className="s11-cta">
              <a href={ctaHref} className="s11-btn">{ctaLabel}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section11_OperationalExample, {
  title: { type: ControlType.String, title: "Title", defaultValue: "Operational Example: Fraud Detection with Rare Events" },
  bannerText: {
    type: ControlType.String,
    title: "Banner Text",
    defaultValue: "A financial services team building a fraud detection model found that rare anomaly events were severely underrepresented in training data -- real fraud cases were too few to train a reliable classifier.",
    displayTextArea: true,
  },
  body: {
    type: ControlType.String,
    title: "Body",
    defaultValue: "DTS generated synthetic fraud scenarios using differential privacy, expanding the rare-event class to statistically meaningful coverage. The resulting dataset could not be reverse-engineered to individual records -- satisfying both compliance requirements and model training needs.",
    displayTextArea: true,
  },
  tagline: {
    type: ControlType.String,
    title: "Tagline",
    defaultValue: "Blocker removed: unusable data (imbalanced dataset / rare class underrepresentation)",
  },
  ctaLabel: { type: ControlType.String, title: "CTA Label", defaultValue: "See enterprise use cases" },
  ctaHref: { type: ControlType.String, title: "CTA Href", defaultValue: "/#enterprise-use-cases" },
})
