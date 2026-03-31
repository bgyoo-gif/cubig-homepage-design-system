import { useState } from "react"
import { useEffect } from "react"
import { addPropertyControls, ControlType } from "framer"

const FONT_URL = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap"

// ─── Design Tokens ───────────────────────────────────────────────────────────
const tokens = {
  colorBrandPurple:    "#725bea",
  colorBrandPurpleLt:  "#c6c5fa",
  colorTextPrimary:    "#0f0f0f",
  colorTextSecondary:  "#636363",
  colorTextTertiary:   "#9c9c9c",
  colorBorderDefault:  "#e6e7e9",
  colorSurfaceWhite:   "#ffffff",
  colorSurfaceLight:   "#f7f7f7",
  colorSuccess:        "#0e824c",
  gradientInnerPurple: "linear-gradient(99deg, #F8EDFF 0%, #FCFCFE 58%, #fff 100%)",
  shadowCard:          "0px 24px 40px rgba(0, 0, 0, 0.04)",
  fontBase:            '"DM Sans", sans-serif',
  fontBrand:           '"Oxanium", sans-serif',
  fontCode:            '"Fragment Mono", monospace',
}

// ─── Card data ────────────────────────────────────────────────────────────────
interface ImpactCard {
  badge: string
  kpi: string
  description: React.ReactNode
}

interface Props {
  marginTop: number
  sectionTitle: string
  sectionDescription: string
  card1Badge: string
  card1Kpi: string
  card1Description: string
  card2Badge: string
  card2Kpi: string
  card2Description: string
  card3Badge: string
  card3Kpi: string
  card3Description: string
  card4Badge: string
  card4Kpi: string
  card4Description: string
  card5Badge: string
  card5Kpi: string
  card5Description: string
  card2ProductName: string
  threadBadge: string
  threadBody: string
  threadCtaLabel: string
  threadCtaHref: string
}

export default function Section07_BusinessImpact(props: Props) {
  const {
    marginTop,
    sectionTitle,
    sectionDescription,
    card1Badge,
    card1Kpi,
    card1Description,
    card2Badge,
    card2Kpi,
    card2Description,
    card3Badge,
    card3Kpi,
    card3Description,
    card4Badge,
    card4Kpi,
    card4Description,
    card5Badge,
    card5Kpi,
    card5Description,
    card2ProductName,
    threadBadge,
    threadBody,
    threadCtaLabel,
    threadCtaHref,
  } = props

  const impactCards = [
    { badge: card1Badge, kpi: card1Kpi, description: card1Description },
    { badge: card2Badge, kpi: card2Kpi, description: card2Description, hasDTS: true },
    { badge: card3Badge, kpi: card3Kpi, description: card3Description },
    { badge: card4Badge, kpi: card4Kpi, description: card4Description },
    { badge: card5Badge, kpi: card5Kpi, description: card5Description },
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

        .s7-section {
          width: 100%; overflow: hidden; box-sizing: border-box;
          background-color: #f7f7f7;
          padding: 80px 0;
          font-family: "DM Sans", sans-serif;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s7-inner {
          width: 100%;
          container-type: inline-size;
        }

        .s7-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        .s7-section-header {
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
          margin-bottom: 32px;
        }

        .s7-section-header__title {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          text-wrap: balance;
        }

        .s7-section-header__title .brand {
          color: #725bea;
        }

        .s7-section-header__description {
          font-size: 18px;
          color: #636363;
          line-height: 1.7;
          max-width: 100%;
          margin: 0 auto;
          text-wrap: pretty;
        }

        .s7-card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        .s7-card {
          background-color: #ffffff;
          border-radius: 18px;
          border: 1px solid #e6e7e9;
          padding: 24px;
          box-shadow: 0px 24px 40px rgba(0, 0, 0, 0.04);
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }

        .s7-card--thread {
          background: linear-gradient(99deg, #F8EDFF 0%, #FCFCFE 58%, #fff 100%);
        }

        .s7-card__badge {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          padding: 4px 12px;
          border-radius: 9999px;
          font-size: 12px;
          font-weight: 500;
          font-family: "Fragment Mono", monospace;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          border: 1px solid currentColor;
          margin-bottom: 16px;
        }

        .s7-card__badge--teal {
          color: #0e824c;
          border-color: #0e824c;
        }

        .s7-card__badge--brand {
          color: #725bea;
          border-color: #725bea;
        }

        .s7-impact-kpi {
          font-family: "DM Sans", sans-serif;
          font-size: 30px;
          font-weight: 700;
          color: #725bea;
          line-height: 1.2;
          margin-bottom: 12px;
        }

        .s7-impact-desc {
          font-size: 14px;
          color: #636363;
          line-height: 1.7;
          flex: 1;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s7-impact-desc .product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }

        .s7-thread-body {
          font-size: 16px;
          color: #0f0f0f;
          line-height: 1.7;
          flex: 1;
        }

        .s7-thread-actions {
          margin-top: 24px;
        }

        .s7-btn--secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 16px;
          font-size: 14px;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          border-radius: 9999px;
          background-color: transparent;
          color: #0f0f0f;
          border: 1px solid #e6e7e9;
          cursor: pointer;
          text-decoration: none;
          transition: background-color 0.2s;
          white-space: nowrap;
        }

        .s7-btn--secondary:hover {
          background-color: #f7f7f7;
        }

        @container (min-width: 768px) {
          .s7-container {
            padding: 0 32px;
          }
          .s7-section-header__title {
            font-size: 28px;
          }
          .s7-section-header__description {
            max-width: 720px;
          }
          .s7-card-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @container (min-width: 1024px) {
          .s7-section-header__title {
            font-size: 32px;
          }
          .s7-card-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @container (min-width: 1440px) {
          .s7-container {
            padding: 0 120px;
            max-width: 1440px;
          }
          .s7-section-header__title {
            font-size: 40px;
          }
          .s7-section-header__description {
            max-width: 860px;
          }
        }
      `}</style>

      <section
        className="s7-section"
        id="section-7"
        style={{ marginTop }}
      >
        <div className="s7-inner">
        <div className="s7-container">
          <div className="s7-section-header">
            <h2 className="s7-section-header__title">
              What Changes When AI Execution Is{" "}
              <span className="brand">{sectionTitle}</span>
            </h2>
            <p className="s7-section-header__description">
              {sectionDescription}
            </p>
          </div>

          <div className="s7-card-grid">

            {/* Card 1: Incident Recovery */}
            <article className="s7-card">
              <span className="s7-card__badge s7-card__badge--teal">{card1Badge}</span>
              <div className="s7-impact-kpi">{card1Kpi}</div>
              <p className="s7-impact-desc">{card1Description}</p>
            </article>

            {/* Card 2: Data Usability */}
            <article className="s7-card">
              <span className="s7-card__badge s7-card__badge--teal">{card2Badge}</span>
              <div className="s7-impact-kpi">{card2Kpi}</div>
              <p className="s7-impact-desc">
                Model accuracy improvement after{" "}
                <span className="product">{card2ProductName}</span>{" "}
                {card2Description}
              </p>
            </article>

            {/* Card 3: LLM Adoption */}
            <article className="s7-card">
              <span className="s7-card__badge s7-card__badge--teal">{card3Badge}</span>
              <div className="s7-impact-kpi">{card3Kpi}</div>
              <p className="s7-impact-desc">{card3Description}</p>
            </article>

            {/* Card 4: Rollback Speed */}
            <article className="s7-card">
              <span className="s7-card__badge s7-card__badge--teal">{card4Badge}</span>
              <div className="s7-impact-kpi">{card4Kpi}</div>
              <p className="s7-impact-desc">{card4Description}</p>
            </article>

            {/* Card 5: Compliance-Safe AI Data */}
            <article className="s7-card">
              <span className="s7-card__badge s7-card__badge--teal">{card5Badge}</span>
              <div className="s7-impact-kpi">{card5Kpi}</div>
              <p className="s7-impact-desc">{card5Description}</p>
            </article>

            {/* Card 6: Common Thread */}
            <article className="s7-card s7-card--thread">
              <span className="s7-card__badge s7-card__badge--brand">{threadBadge}</span>
              <p className="s7-thread-body">
                {threadBody}
              </p>
              <div className="s7-thread-actions">
                <a href={threadCtaHref} className="s7-btn--secondary">
                  {threadCtaLabel}
                </a>
              </div>
            </article>

          </div>
        </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section07_BusinessImpact, {
  marginTop: {
    type: ControlType.Number,
    title: "Margin Top",
    defaultValue: 0,
    min: 0,
    max: 200,
    step: 4,
    displayStepper: true,
  },
  sectionTitle: {
    type: ControlType.String,
    title: "Title Highlight",
    defaultValue: "Reproducible",
  },
  sectionDescription: {
    type: ControlType.String,
    title: "Section Description",
    defaultValue:
      "These are the business outcomes the operational evidence demonstrates — not theoretical capabilities, but changes documented in production deployments.",
  },
  card1Badge: {
    type: ControlType.String,
    title: "Card 1 Badge",
    defaultValue: "Incident Recovery",
  },
  card1Kpi: {
    type: ControlType.String,
    title: "Card 1 KPI",
    defaultValue: "21 days to <4h",
  },
  card1Description: {
    type: ControlType.String,
    title: "Card 1 Description",
    defaultValue:
      "Root cause identification time. Schema change detected at ingestion via Release State. Incident resolved before next training run.",
  },
  card2Badge: {
    type: ControlType.String,
    title: "Card 2 Badge",
    defaultValue: "Data Usability",
  },
  card2Kpi: {
    type: ControlType.String,
    title: "Card 2 KPI",
    defaultValue: "+30pp F1",
  },
  card2ProductName: {
    type: ControlType.String,
    title: "Card 2 Product Name",
    defaultValue: "DTS",
  },
  card2Description: {
    type: ControlType.String,
    title: "Card 2 Description (after product name)",
    defaultValue:
      "fixed class imbalance. Rare defect class augmented with privacy-safe synthetic data. Deploy time cut from 4 weeks to 1 day.",
  },
  card3Badge: {
    type: ControlType.String,
    title: "Card 3 Badge",
    defaultValue: "LLM Adoption",
  },
  card3Kpi: {
    type: ControlType.String,
    title: "Card 3 KPI",
    defaultValue: "98.1%",
  },
  card3Description: {
    type: ControlType.String,
    title: "Card 3 Description",
    defaultValue:
      "PII detection accuracy in enterprise prompts. Compliance-blocked LLM projects unblocked without sacrificing data usability or audit requirements.",
  },
  card4Badge: {
    type: ControlType.String,
    title: "Card 4 Badge",
    defaultValue: "Rollback Speed",
  },
  card4Kpi: {
    type: ControlType.String,
    title: "Card 4 KPI",
    defaultValue: "<2h rollback",
  },
  card4Description: {
    type: ControlType.String,
    title: "Card 4 Description",
    defaultValue:
      "Run Binding enabled stable-state re-execution after preprocessing drift caused inference inconsistency. Prior Release State re-run confirmed. Score distribution matched baseline.",
  },
  card5Badge: {
    type: ControlType.String,
    title: "Card 5 Badge",
    defaultValue: "Compliance-Safe AI Data",
  },
  card5Kpi: {
    type: ControlType.String,
    title: "Card 5 KPI",
    defaultValue: "277K records",
  },
  card5Description: {
    type: ControlType.String,
    title: "Card 5 Description",
    defaultValue:
      "DP-safe synthetic records generated to replace retention-deleted data. F1 churn model reached 0.92. Zero real customer data accessed or exported. Full regulatory compliance.",
  },
  threadBadge: {
    type: ControlType.String,
    title: "Thread Card Badge",
    defaultValue: "Common Thread",
  },
  threadBody: {
    type: ControlType.String,
    title: "Thread Card Body",
    defaultValue:
      "Each case reduced deployment risk, incident investigation time, or AI adoption blockers — without replacing existing data infrastructure.",
  },
  threadCtaLabel: {
    type: ControlType.String,
    title: "Thread CTA Label",
    defaultValue: "Talk to our engineers",
  },
  threadCtaHref: {
    type: ControlType.String,
    title: "Thread CTA Href",
    defaultValue: "mailto:contact@cubig.ai",
  },
})
