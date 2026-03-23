// Section08_Integration.tsx — LLM Capsule Integration (SynTitan + Compliance)
// Framer Code Component
import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

interface Props {
  eyebrow?: string
  title?: string
  titleProduct?: string
  titleBrand?: string
  // Left column — SynTitan
  syntitanBadge?: string
  syntitanCardTitle?: string
  syntitanCardDesc?: string
  syntitanBullet1?: string
  syntitanBullet2?: string
  syntitanBullet3?: string
  syntitanBullet4?: string
  infoText1?: string
  infoText2?: string
  // Right column — Blockers
  blockersIconLabel?: string
  blockersTitle?: string
  gdprBadge?: string
  gdprTitle?: string
  gdprDesc?: string
  hipaaBadge?: string
  hipaaTitle?: string
  hipaaDesc?: string
  soc2Badge?: string
  soc2Title?: string
  soc2Desc?: string
}

export default function Section08_Integration({
  eyebrow = "Integration",
  title = "Works with ",
  titleProduct = "SynTitan",
  titleBrand = "Works standalone too.",
  syntitanBadge = "WITHIN SYNTITAN",
  syntitanCardTitle = "Full execution traceability for LLM workflows",
  syntitanCardDesc = "When LLM Capsule runs within SynTitan, every anonymization run is bound to a Release State. LLM workflows become reproducible, auditable, and compliant.",
  syntitanBullet1 = "Anonymization config versioned in Release State",
  syntitanBullet2 = "Each run linked via Run Binding",
  syntitanBullet3 = "Change Log records what was detected and replaced",
  syntitanBullet4 = "Re-run any prior LLM workflow under identical conditions",
  infoText1 = "SynTitan performs data quality refinement as part of execution stability.",
  infoText2 = "SynTitan can use a subset of DTS capabilities when privacy-safe synthetic data is needed, while DTS is a full standalone enterprise synthetic data engine.",
  blockersIconLabel = "Blockers removed by industry",
  blockersTitle = "Blockers removed by industry",
  gdprBadge = "GDPR / CCPA",
  gdprTitle = "Customer data no longer blocks LLM usage",
  gdprDesc = "Prevents personal data from being processed by external LLM providers without lawful basis. Supports data minimization requirements.",
  hipaaBadge = "HIPAA",
  hipaaTitle = "Clinical data no longer off-limits for AI",
  hipaaDesc = "Healthcare teams couldn't use LLMs on patient data. LLM Capsule removes that blocker — clinical and insurance workflows are now fully AI-ready.",
  soc2Badge = "SOC 2 / ENTERPRISE SECURITY",
  soc2Title = "Audit-ready LLM data handling",
  soc2Desc = "Every prompt and output is logged. Detection and anonymization decisions are traceable. Security teams have the records they need.",
}: Props) {
  return (
    <>
      <style>{`
        .s8-section {
          width: 100%;
          padding: 80px 0;
          font-family: "DM Sans", sans-serif;
          color: #0f0f0f;
          background-color: #f7f7f7;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s8-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        /* Section Header */
        .s8-section-header {
          margin-bottom: 48px;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s8-eyebrow {
          display: block;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #636363;
          margin-bottom: 12px;
        }
        .s8-section-title {
          font-family: "DM Sans", sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -1px;
          margin: 0;
        }
        .s8-title-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }
        .s8-title-brand {
          background: linear-gradient(130deg, #6C54A0, #b44fcc 50%, #ff266a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Two-col layout */
        .s8-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }

        /* Card */
        .s8-card {
          background: #ffffff;
          border: 1px solid #e6e7e9;
          border-radius: 16px;
          padding: 28px;
          margin-bottom: 16px;
        }
        .s8-card:last-child { margin-bottom: 0; }

        .s8-badge {
          display: inline-flex;
          align-items: center;
          padding: 4px 12px;
          border-radius: 9999px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 12px;
          width: fit-content;
        }
        .s8-badge--brand { background-color: #f0ecff; color: #6C54A0; }
        .s8-badge--gray { background-color: #f2f2f2; color: #636363; }

        .s8-card-title {
          font-size: 18px;
          font-weight: 700;
          color: #0f0f0f;
          margin: 0 0 10px;
          line-height: 1.35;
        }
        .s8-card-title--sm { font-size: 15px; }
        .s8-card-desc {
          font-size: 14px;
          color: #636363;
          line-height: 1.7;
          margin: 0 0 16px;
        }

        /* Bullet list */
        .s8-bullet-list {
          list-style: none;
          margin: 0 0 4px;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .s8-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14px;
          color: #636363;
          line-height: 1.55;
        }
        .s8-bullet-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #725bea;
          flex-shrink: 0;
          margin-top: 6px;
        }

        /* Info banner */
        .s8-info-banner {
          background: #e8f0fe;
          border: 1px solid #c5d8fc;
          border-radius: 12px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .s8-info-text {
          font-size: 13px;
          color: #3061f2;
          line-height: 1.6;
          margin: 0;
        }

        /* Section title with icon */
        .s8-title-icon-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }
        .s8-title-icon-emoji {
          font-size: 20px;
        }
        .s8-title-icon-text {
          font-size: 15px;
          font-weight: 700;
          color: #0f0f0f;
          margin: 0;
        }

        /* Responsive */
        @media (min-width: 768px) {
          .s8-container { padding: 0 32px; }
          .s8-section-title { font-size: 42px; }
        }
        @media (min-width: 1024px) {
          .s8-container { padding: 0 32px; }
          .s8-grid { grid-template-columns: repeat(2, 1fr); }
          .s8-section-title { font-size: 48px; }
        }
        @media (min-width: 1440px) {
          .s8-container { padding: 0 120px; max-width: 1440px; }
        }
      `}</style>

      <section className="s8-section">
        <div className="s8-container">
          {/* Section Header */}
          <div className="s8-section-header">
            <span className="s8-eyebrow">{eyebrow}</span>
            <h2 className="s8-section-title">
              {title}
              <span className="s8-title-product">{titleProduct}</span>
              {". "}
              <span className="s8-title-brand">{titleBrand}</span>
            </h2>
          </div>

          {/* Two-col grid */}
          <div className="s8-grid">
            {/* Left: SynTitan Integration */}
            <div>
              <div className="s8-card">
                <span className="s8-badge s8-badge--brand">{syntitanBadge}</span>
                <h3 className="s8-card-title">{syntitanCardTitle}</h3>
                <p className="s8-card-desc">{syntitanCardDesc}</p>
                <ul className="s8-bullet-list">
                  {[syntitanBullet1, syntitanBullet2, syntitanBullet3, syntitanBullet4].map((item, i) => (
                    <li key={i} className="s8-bullet-item">
                      <span className="s8-bullet-dot" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="s8-info-banner">
                <p className="s8-info-text">{infoText1}</p>
                <p className="s8-info-text">{infoText2}</p>
              </div>
            </div>

            {/* Right: Compliance Cards */}
            <div>
              <div className="s8-title-icon-row">
                <span className="s8-title-icon-emoji" aria-hidden="true">🔒</span>
                <h3 className="s8-title-icon-text">{blockersTitle}</h3>
              </div>
              <div className="s8-card">
                <span className="s8-badge s8-badge--gray">{gdprBadge}</span>
                <h4 className="s8-card-title s8-card-title--sm">{gdprTitle}</h4>
                <p className="s8-card-desc">{gdprDesc}</p>
              </div>
              <div className="s8-card">
                <span className="s8-badge s8-badge--gray">{hipaaBadge}</span>
                <h4 className="s8-card-title s8-card-title--sm">{hipaaTitle}</h4>
                <p className="s8-card-desc">{hipaaDesc}</p>
              </div>
              <div className="s8-card">
                <span className="s8-badge s8-badge--gray">{soc2Badge}</span>
                <h4 className="s8-card-title s8-card-title--sm">{soc2Title}</h4>
                <p className="s8-card-desc">{soc2Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section08_Integration, {
  eyebrow: {
    type: ControlType.String,
    title: "Eyebrow",
    defaultValue: "Integration",
  },
  title: {
    type: ControlType.String,
    title: "Title",
    defaultValue: "Works with ",
  },
  titleProduct: {
    type: ControlType.String,
    title: "Title (Product)",
    defaultValue: "SynTitan",
  },
  titleBrand: {
    type: ControlType.String,
    title: "Title (Brand)",
    defaultValue: "Works standalone too.",
  },
  syntitanBadge: {
    type: ControlType.String,
    title: "SynTitan Badge",
    defaultValue: "WITHIN SYNTITAN",
  },
  syntitanCardTitle: {
    type: ControlType.String,
    title: "SynTitan Card Title",
    defaultValue: "Full execution traceability for LLM workflows",
  },
  syntitanCardDesc: {
    type: ControlType.String,
    title: "SynTitan Card Description",
    displayTextArea: true,
    defaultValue:
      "When LLM Capsule runs within SynTitan, every anonymization run is bound to a Release State. LLM workflows become reproducible, auditable, and compliant.",
  },
  gdprBadge: {
    type: ControlType.String,
    title: "GDPR Badge",
    defaultValue: "GDPR / CCPA",
  },
  gdprTitle: {
    type: ControlType.String,
    title: "GDPR Card Title",
    defaultValue: "Customer data no longer blocks LLM usage",
  },
  hipaaBadge: {
    type: ControlType.String,
    title: "HIPAA Badge",
    defaultValue: "HIPAA",
  },
  hipaaTitle: {
    type: ControlType.String,
    title: "HIPAA Card Title",
    defaultValue: "Clinical data no longer off-limits for AI",
  },
  soc2Badge: {
    type: ControlType.String,
    title: "SOC2 Badge",
    defaultValue: "SOC 2 / ENTERPRISE SECURITY",
  },
  soc2Title: {
    type: ControlType.String,
    title: "SOC2 Card Title",
    defaultValue: "Audit-ready LLM data handling",
  },
})
