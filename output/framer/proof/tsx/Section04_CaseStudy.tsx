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

// ─── Props ────────────────────────────────────────────────────────────────────
interface Props {
  marginTop?: number
  sectionTitle?: string
  sectionDescription?: string

  // Card 1
  card1Icon?: string
  card1Badge?: string
  card1BadgeVariant?: "brand" | "teal"
  card1Title?: string
  card1Description?: string

  // Card 2
  card2Icon?: string
  card2Badge?: string
  card2BadgeVariant?: "brand" | "teal"
  card2Title?: string
  card2Description?: string

  // Card 3
  card3Icon?: string
  card3Badge?: string
  card3BadgeVariant?: "brand" | "teal"
  card3Title?: string
  card3Description?: string

  // Card 4
  card4Icon?: string
  card4Badge?: string
  card4BadgeVariant?: "brand" | "teal"
  card4Title?: string
  card4Description?: string

  // Card 5
  card5Icon?: string
  card5Badge?: string
  card5BadgeVariant?: "brand" | "teal"
  card5Title?: string
  card5Description?: string

  // Card 6
  card6Icon?: string
  card6Badge?: string
  card6BadgeVariant?: "brand" | "teal"
  card6Title?: string
  card6Description?: string

  // Banner
  bannerText?: string
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function Section04_CaseStudy({
  marginTop = 0,
  sectionTitle = "Operational Case Records",
  sectionDescription = "Each record follows the same format: Before, After, What Changed, Reproduce.",

  card1Icon = "🏦",
  card1Badge = "Execution Stability",
  card1BadgeVariant = "brand",
  card1Title = "Model retraining pipeline — schema drift detection",
  card1Description = "Before: Schema change in upstream data caused silent model degradation. Root cause took 21 days to identify. After: Release State detected the schema diff at ingestion — issue flagged in <1 run, root cause from 21 days to under 4 hours.",

  card2Icon = "📡",
  card2Badge = "Execution Stability",
  card2BadgeVariant = "brand",
  card2Title = "Real-time inference service — pipeline version rollback",
  card2Description = "Before: Preprocessing update produced inconsistent scores. No way to trace which version caused drift. After: Run Binding linked every score to its exact Release State. Rollback completed in <2 hours with 100% score distribution match.",

  card3Icon = "🏭",
  card3Badge = "Data Usability",
  card3BadgeVariant = "teal",
  card3Title = "Quality inspection model — rare defect class coverage",
  card3Description = "Before: 3 rare defect classes underrepresented — model missed edge cases in production. After: DTS generated DP-safe synthetic samples for all 3 classes. Coverage gap closed, defect detection recall improved.",

  card4Icon = "🏥",
  card4Badge = "Data Usability",
  card4BadgeVariant = "teal",
  card4Title = "Clinical AI validation — restricted patient data replacement",
  card4Description = "Before: Validation pipeline stalled — real patient records inaccessible due to HIPAA constraints. After: DTS generated differential-privacy synthetic records matching real distributions. Validation unblocked, compliance passed.",

  card5Icon = "🔒",
  card5Badge = "Secure LLM Usage",
  card5BadgeVariant = "brand",
  card5Title = "LLM-assisted claims processing — PII leakage prevention",
  card5Description = "Before: Claims documents with PII passed directly to external LLM API — compliance blocked the workflow. After: LLM Capsule intercepted and anonymized all PII. Zero PII fields reached the API, output usability preserved.",

  card6Icon = "🛒",
  card6Badge = "Execution Stability",
  card6BadgeVariant = "brand",
  card6Title = "Recommendation engine — runtime environment drift",
  card6Description = "Before: Scores degraded after infrastructure upgrade — runtime parameters unrecorded, reproduction impossible. After: Run Binding captured every runtime parameter. Pre-upgrade state re-run in <3 hours, exact environment reproduced.",

  bannerText = "SynTitan performs data quality refinement as part of execution stability. SynTitan can use a subset of DTS capabilities when privacy-safe synthetic data is needed, while DTS is a full standalone enterprise synthetic data engine.",
}: Props) {
  const cards = [
    { icon: card1Icon, badge: card1Badge, badgeVariant: card1BadgeVariant, title: card1Title, description: card1Description,
      tags: ["Financial Services", "Fraud Detection"] },
    { icon: card2Icon, badge: card2Badge, badgeVariant: card2BadgeVariant, title: card2Title, description: card2Description,
      tags: ["Telco", "Customer Churn Prediction"] },
    { icon: card3Icon, badge: card3Badge, badgeVariant: card3BadgeVariant, title: card3Title, description: card3Description,
      tags: ["Manufacturing", "Imbalanced Dataset", "AI-Ready Data"] },
    { icon: card4Icon, badge: card4Badge, badgeVariant: card4BadgeVariant, title: card4Title, description: card4Description,
      tags: ["Healthcare", "DP Audit Log"] },
    { icon: card5Icon, badge: card5Badge, badgeVariant: card5BadgeVariant, title: card5Title, description: card5Description,
      tags: ["Insurance", "PII Protection", "Enterprise LLM Search"] },
    { icon: card6Icon, badge: card6Badge, badgeVariant: card6BadgeVariant, title: card6Title, description: card6Description,
      tags: ["Retail / E-Commerce", "Personalization Systems"] },
  ]

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

        .s4-section {
          width: 100%;
          background-color: #f7f7f7;
          padding: 80px 16px;
          font-family: "DM Sans", sans-serif;
          word-break: keep-all;
          overflow-wrap: break-word;
          -webkit-font-smoothing: antialiased;
        }
        .s4-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s4-container { width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 16px; box-sizing: border-box; }
        @container (min-width: 768px)  { .s4-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s4-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s4-container { padding: 0 120px; max-width: 1440px; } }

        .s4-section-header {
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
          margin-bottom: 32px;
        }
        @container (max-width: 767px) { .s4-section-header { text-align: left; } }

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
        @container (min-width: 768px)  { .s4-header-title { font-size: 28px; } }
        @container (min-width: 1024px) { .s4-header-title { font-size: 32px; } }
        @container (min-width: 1440px) { .s4-header-title { font-size: 40px; } }

        .s4-header-desc {
          font-size: 18px;
          color: #636363;
          line-height: 1.7;
          max-width: 720px;
          margin: 0 auto;
          text-wrap: pretty;
        }
        @container (min-width: 1440px) { .s4-header-desc { max-width: 860px; } }

        .s4-card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @container (min-width: 768px)  { .s4-card-grid { grid-template-columns: repeat(2, 1fr); } }
        @container (min-width: 1024px) { .s4-card-grid { grid-template-columns: repeat(3, 1fr); } }

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
      `}</style>

      <section className="s4-section" id="section-4" style={{ marginTop }}>
       <div className="s4-inner">
        <div className="s4-container">

          {/* Section Header */}
          <div className="s4-section-header">
            <h2 className="s4-header-title">{sectionTitle}</h2>
            <p className="s4-header-desc">{sectionDescription}</p>
          </div>

          {/* Card Grid */}
          <div className="s4-card-grid">
            {cards.map((card, i) => (
              <article key={i} className="s4-card">
                <div className="s4-card-graphic" aria-hidden="true">{card.icon}</div>
                <div className="s4-card-body">
                  <span className={`s4-badge s4-badge--${card.badgeVariant}`}>{card.badge}</span>
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

          {/* Banner */}
          <div className="s4-banner" role="note">
            {bannerText}
          </div>

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
    displayTextArea: true,
  },

  card1Icon: { type: ControlType.String, title: "Card 1 Icon", defaultValue: "🏦" },
  card1Badge: { type: ControlType.String, title: "Card 1 Badge", defaultValue: "Execution Stability" },
  card1BadgeVariant: {
    type: ControlType.Enum,
    title: "Card 1 Badge Variant",
    options: ["brand", "teal"],
    optionTitles: ["Brand (Purple)", "Teal (Green)"],
    defaultValue: "brand",
  },
  card1Title: {
    type: ControlType.String,
    title: "Card 1 Title",
    defaultValue: "Model retraining pipeline — schema drift detection",
    displayTextArea: true,
  },
  card1Description: {
    type: ControlType.String,
    title: "Card 1 Description",
    defaultValue: "Before: Schema change in upstream data caused silent model degradation. Root cause took 21 days to identify. After: Release State detected the schema diff at ingestion — issue flagged in <1 run, root cause from 21 days to under 4 hours.",
    displayTextArea: true,
  },

  card2Icon: { type: ControlType.String, title: "Card 2 Icon", defaultValue: "📡" },
  card2Badge: { type: ControlType.String, title: "Card 2 Badge", defaultValue: "Execution Stability" },
  card2BadgeVariant: {
    type: ControlType.Enum,
    title: "Card 2 Badge Variant",
    options: ["brand", "teal"],
    optionTitles: ["Brand (Purple)", "Teal (Green)"],
    defaultValue: "brand",
  },
  card2Title: {
    type: ControlType.String,
    title: "Card 2 Title",
    defaultValue: "Real-time inference service — pipeline version rollback",
    displayTextArea: true,
  },
  card2Description: {
    type: ControlType.String,
    title: "Card 2 Description",
    defaultValue: "Before: Preprocessing update produced inconsistent scores. No way to trace which version caused drift. After: Run Binding linked every score to its exact Release State. Rollback completed in <2 hours with 100% score distribution match.",
    displayTextArea: true,
  },

  card3Icon: { type: ControlType.String, title: "Card 3 Icon", defaultValue: "🏭" },
  card3Badge: { type: ControlType.String, title: "Card 3 Badge", defaultValue: "Data Usability" },
  card3BadgeVariant: {
    type: ControlType.Enum,
    title: "Card 3 Badge Variant",
    options: ["brand", "teal"],
    optionTitles: ["Brand (Purple)", "Teal (Green)"],
    defaultValue: "teal",
  },
  card3Title: {
    type: ControlType.String,
    title: "Card 3 Title",
    defaultValue: "Quality inspection model — rare defect class coverage",
    displayTextArea: true,
  },
  card3Description: {
    type: ControlType.String,
    title: "Card 3 Description",
    defaultValue: "Before: 3 rare defect classes underrepresented — model missed edge cases in production. After: DTS generated DP-safe synthetic samples for all 3 classes. Coverage gap closed, defect detection recall improved.",
    displayTextArea: true,
  },

  card4Icon: { type: ControlType.String, title: "Card 4 Icon", defaultValue: "🏥" },
  card4Badge: { type: ControlType.String, title: "Card 4 Badge", defaultValue: "Data Usability" },
  card4BadgeVariant: {
    type: ControlType.Enum,
    title: "Card 4 Badge Variant",
    options: ["brand", "teal"],
    optionTitles: ["Brand (Purple)", "Teal (Green)"],
    defaultValue: "teal",
  },
  card4Title: {
    type: ControlType.String,
    title: "Card 4 Title",
    defaultValue: "Clinical AI validation — restricted patient data replacement",
    displayTextArea: true,
  },
  card4Description: {
    type: ControlType.String,
    title: "Card 4 Description",
    defaultValue: "Before: Validation pipeline stalled — real patient records inaccessible due to HIPAA constraints. After: DTS generated differential-privacy synthetic records matching real distributions. Validation unblocked, compliance passed.",
    displayTextArea: true,
  },

  card5Icon: { type: ControlType.String, title: "Card 5 Icon", defaultValue: "🔒" },
  card5Badge: { type: ControlType.String, title: "Card 5 Badge", defaultValue: "Secure LLM Usage" },
  card5BadgeVariant: {
    type: ControlType.Enum,
    title: "Card 5 Badge Variant",
    options: ["brand", "teal"],
    optionTitles: ["Brand (Purple)", "Teal (Green)"],
    defaultValue: "brand",
  },
  card5Title: {
    type: ControlType.String,
    title: "Card 5 Title",
    defaultValue: "LLM-assisted claims processing — PII leakage prevention",
    displayTextArea: true,
  },
  card5Description: {
    type: ControlType.String,
    title: "Card 5 Description",
    defaultValue: "Before: Claims documents with PII passed directly to external LLM API — compliance blocked the workflow. After: LLM Capsule intercepted and anonymized all PII. Zero PII fields reached the API, output usability preserved.",
    displayTextArea: true,
  },

  card6Icon: { type: ControlType.String, title: "Card 6 Icon", defaultValue: "🛒" },
  card6Badge: { type: ControlType.String, title: "Card 6 Badge", defaultValue: "Execution Stability" },
  card6BadgeVariant: {
    type: ControlType.Enum,
    title: "Card 6 Badge Variant",
    options: ["brand", "teal"],
    optionTitles: ["Brand (Purple)", "Teal (Green)"],
    defaultValue: "brand",
  },
  card6Title: {
    type: ControlType.String,
    title: "Card 6 Title",
    defaultValue: "Recommendation engine — runtime environment drift",
    displayTextArea: true,
  },
  card6Description: {
    type: ControlType.String,
    title: "Card 6 Description",
    defaultValue: "Before: Scores degraded after infrastructure upgrade — runtime parameters unrecorded, reproduction impossible. After: Run Binding captured every runtime parameter. Pre-upgrade state re-run in <3 hours, exact environment reproduced.",
    displayTextArea: true,
  },

  bannerText: {
    type: ControlType.String,
    title: "Banner Text",
    defaultValue: "SynTitan performs data quality refinement as part of execution stability. SynTitan can use a subset of DTS capabilities when privacy-safe synthetic data is needed, while DTS is a full standalone enterprise synthetic data engine.",
    displayTextArea: true,
  },
})
