import { addPropertyControls, ControlType } from "framer"

// ─── Design Tokens ───────────────────────────────────────────────────────────
const tokens = {
  colorBrandPrimary: "#3061f2",
  colorBrandPurple: "#725bea",
  colorBrandPurpleLt: "#c6c5fa",
  colorTextPrimary: "#0f0f0f",
  colorTextSecondary: "#636363",
  colorTextTertiary: "#9c9c9c",
  colorBorderDefault: "#e6e7e9",
  colorSurfaceWhite: "#ffffff",
  colorSurfaceLight: "#f7f7f7",
  colorSuccess: "#0e824c",
  colorError: "#ff3030",
  fontBase: '"DM Sans", sans-serif',
  fontBrand: '"Oxanium", sans-serif',
  fontCode: '"Fragment Mono", "Geist Mono", monospace',
  shadowCard: "0px 24px 40px rgba(0,0,0,0.04)",
  gradientInnerPurple: "linear-gradient(99deg, #F8EDFF 0%, #FCFCFE 58%, #fff 100%)",
}

// ─── Case Study Data ──────────────────────────────────────────────────────────
const caseStudies = [
  {
    icon: "🏦",
    badgeLabel: "Execution Stability",
    badgeVariant: "brand",
    title: "Model retraining pipeline — schema drift detection",
    description:
      "Before: Schema change in upstream data caused silent model degradation. Root cause took 21 days to identify. After: Release State detected the schema diff at ingestion — issue flagged in <1 run, root cause from 21 days to under 4 hours.",
    tags: ["Financial Services", "Fraud Detection"],
  },
  {
    icon: "📡",
    badgeLabel: "Execution Stability",
    badgeVariant: "brand",
    title: "Real-time inference service — pipeline version rollback",
    description:
      "Before: Preprocessing update produced inconsistent scores. No way to trace which version caused drift. After: Run Binding linked every score to its exact Release State. Rollback completed in <2 hours with 100% score distribution match.",
    tags: ["Telco", "Customer Churn Prediction"],
  },
  {
    icon: "🏭",
    badgeLabel: "Data Usability",
    badgeVariant: "teal",
    title: "Quality inspection model — rare defect class coverage",
    description:
      "Before: 3 rare defect classes underrepresented — model missed edge cases in production. After: DTS generated DP-safe synthetic samples for all 3 classes. Coverage gap closed, defect detection recall improved.",
    tags: ["Manufacturing", "Imbalanced Dataset", "AI-Ready Data"],
  },
  {
    icon: "🏥",
    badgeLabel: "Data Usability",
    badgeVariant: "teal",
    title: "Clinical AI validation — restricted patient data replacement",
    description:
      "Before: Validation pipeline stalled — real patient records inaccessible due to HIPAA constraints. After: DTS generated differential-privacy synthetic records matching real distributions. Validation unblocked, compliance passed.",
    tags: ["Healthcare", "DP Audit Log"],
  },
  {
    icon: "🔒",
    badgeLabel: "Secure LLM Usage",
    badgeVariant: "brand",
    title: "LLM-assisted claims processing — PII leakage prevention",
    description:
      "Before: Claims documents with PII passed directly to external LLM API — compliance blocked the workflow. After: LLM Capsule intercepted and anonymized all PII. Zero PII fields reached the API, output usability preserved.",
    tags: ["Insurance", "PII Protection", "Enterprise LLM Search"],
  },
  {
    icon: "🛒",
    badgeLabel: "Execution Stability",
    badgeVariant: "brand",
    title: "Recommendation engine — runtime environment drift",
    description:
      "Before: Scores degraded after infrastructure upgrade — runtime parameters unrecorded, reproduction impossible. After: Run Binding captured every runtime parameter. Pre-upgrade state re-run in <3 hours, exact environment reproduced.",
    tags: ["Retail / E-Commerce", "Personalization Systems"],
  },
]

// ─── Props ────────────────────────────────────────────────────────────────────
interface Props {
  marginTop?: number
  sectionTitle?: string
  sectionDescription?: string
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function Section04_CaseStudy({
  marginTop = 0,
  sectionTitle = "Operational Case Records",
  sectionDescription = "Each record follows the same format: Before, After, What Changed, Reproduce.",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Oxanium:wght@700&family=Fragment+Mono:ital@0;1&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s4-section {
          width: 100%;
          background-color: #f7f7f7;
          padding: 80px 16px;
          font-family: "DM Sans", sans-serif;
          word-break: keep-all;
          overflow-wrap: break-word;
          -webkit-font-smoothing: antialiased;
        }
        @media (min-width: 768px)  { .s4-section { padding: 80px 32px; } }
        @media (min-width: 1024px) { .s4-section { padding: 80px 32px; } }
        @media (min-width: 1440px) { .s4-section { padding: 80px 120px; max-width: 1440px; margin-left: auto; margin-right: auto; } }

        .s4-container { width: 100%; max-width: 1200px; margin: 0 auto; }

        .s4-section-header {
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
          margin-bottom: 32px;
        }
        @media (max-width: 767px) { .s4-section-header { text-align: left; } }

        .s4-header-title {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          text-wrap: balance;
        }
        @media (min-width: 768px)  { .s4-header-title { font-size: 28px; } }
        @media (min-width: 1024px) { .s4-header-title { font-size: 32px; } }
        @media (min-width: 1440px) { .s4-header-title { font-size: 40px; } }

        .s4-header-title .s4-brand { color: #725bea; }

        .s4-header-desc {
          font-size: 18px;
          color: #636363;
          line-height: 1.7;
          max-width: 720px;
          margin: 0 auto;
          text-wrap: pretty;
        }
        @media (min-width: 1440px) { .s4-header-desc { max-width: 860px; } }

        .s4-card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @media (min-width: 768px)  { .s4-card-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .s4-card-grid { grid-template-columns: repeat(3, 1fr); } }

        .s4-card {
          background-color: #ffffff;
          border-radius: 18px;
          border: 1px solid #e6e7e9;
          box-shadow: 0px 24px 40px rgba(0,0,0,0.04);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .s4-card-graphic {
          width: 100%;
          height: 100px;
          background: linear-gradient(99deg, #F8EDFF 0%, #FCFCFE 58%, #fff 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 40px;
          flex-shrink: 0;
        }

        .s4-card-body {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 24px;
          flex: 1;
        }

        .s4-badge {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          padding: 4px 12px;
          border-radius: 9999px;
          font-size: 12px;
          font-weight: 500;
          font-family: "Fragment Mono", "Geist Mono", monospace;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          border: 1px solid currentColor;
          margin-bottom: 16px;
        }
        .s4-badge--brand { color: #725bea; border-color: #725bea; }
        .s4-badge--teal  { color: #0e824c; border-color: #0e824c; }

        .s4-card-title {
          font-size: 16px;
          font-weight: 600;
          color: #0f0f0f;
          line-height: 1.2;
          margin-bottom: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s4-card-desc {
          font-size: 14px;
          color: #636363;
          line-height: 1.7;
          flex: 1;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        .s4-card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 8px;
        }

        .s4-card-tag {
          font-size: 12px;
          font-family: "Fragment Mono", "Geist Mono", monospace;
          color: #9c9c9c;
          background-color: #f7f7f7;
          border: 1px solid #e6e7e9;
          border-radius: 9999px;
          padding: 2px 10px;
        }

        .s4-banner {
          margin-top: 32px;
          padding: 16px 24px;
          border-top: 1px solid #e6e7e9;
          border-bottom: 1px solid #e6e7e9;
          background-color: #f7f7f7;
          font-size: 14px;
          line-height: 1.7;
          text-align: center;
          word-break: keep-all;
          overflow-wrap: break-word;
          color: #0f0f0f;
        }

        .s4-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }
      `}</style>

      <section className="s4-section" id="section-4" style={{ marginTop }}>
        <div className="s4-container">

          {/* Section Header */}
          <div className="s4-section-header">
            <h2 className="s4-header-title">
              {sectionTitle.replace("Case Records", "")}
              <span className="s4-brand">Case Records</span>
            </h2>
            <p className="s4-header-desc">{sectionDescription}</p>
          </div>

          {/* Card Grid */}
          <div className="s4-card-grid">
            {caseStudies.map((card, i) => (
              <article key={i} className="s4-card">
                <div className="s4-card-graphic" aria-hidden="true">{card.icon}</div>
                <div className="s4-card-body">
                  <span className={`s4-badge s4-badge--${card.badgeVariant}`}>{card.badgeLabel}</span>
                  <h3 className="s4-card-title">{card.title}</h3>
                  <p className="s4-card-desc">{card.description}</p>
                  <div className="s4-card-tags">
                    {card.tags.map((tag, j) => (
                      <span key={j} className="s4-card-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Overlap prevention note */}
          <div className="s4-banner" role="note">
            <span className="s4-product">SynTitan</span> performs data quality refinement as part of execution stability. <span className="s4-product">SynTitan</span> can use a subset of <span className="s4-product">DTS</span> capabilities when privacy-safe synthetic data is needed, while <span className="s4-product">DTS</span> is a full standalone enterprise synthetic data engine.
          </div>

        </div>
      </section>
    </>
  )
}

addPropertyControls(Section04_CaseStudy, {
  marginTop: {
    type: ControlType.Number,
    title: "Margin Top",
    defaultValue: 0,
    min: 0,
    max: 200,
    step: 4,
  },
  sectionTitle: {
    type: ControlType.String,
    title: "Section Title",
    defaultValue: "Operational Case Records",
  },
  sectionDescription: {
    type: ControlType.String,
    title: "Section Description",
    defaultValue: "Each record follows the same format: Before, After, What Changed, Reproduce.",
  },
})
