// Section10_CaseStudies.tsx — Enterprise Deployments / Case Studies
// Framer Code Component
import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

interface CaseStudyCard {
  category: string
  title: string
  badgeText: string
  badgeVariant: "teal" | "brand" | "red"
  description: string
  tags: string[]
}

interface Props {
  eyebrow?: string
  title?: string
  titleBrand?: string
  description?: string
  cards?: CaseStudyCard[]
}

const defaultCards: CaseStudyCard[] = [
  {
    category: "Global Telco",
    title: "Deutsche\nTelekom",
    badgeText: "T Challenge 2026 — Top 12",
    badgeVariant: "teal",
    description:
      "Top 12 finalist in T Challenge 2026 for enterprise LLM data protection. Evaluated across telco-scale sensitive data workflows — customer care, network ops, billing AI — where PII protection at the interaction layer was required.",
    tags: ["Telco", "LLM Privacy"],
  },
  {
    category: "Global OT Security",
    title: "Claroty",
    badgeText: "OT Infrastructure AI",
    badgeVariant: "brand",
    description:
      "OT infrastructure AI without exposing critical operational technology data. LLM Capsule anonymizes sensitive OT network identifiers at the interaction layer — the LLM processes the task without ever seeing the raw operational data.",
    tags: ["OT Security", "Industrial AI"],
  },
  {
    category: "Finance / Health / Legal",
    title: "DB Insurance\nEUMC\nShin&Kim",
    badgeText: "Multi-Industry Deployment",
    badgeVariant: "teal",
    description:
      "LLM Capsule deployed across Korean financial services (DB Insurance), medical research (EUMC), and legal practice (Shin&Kim). Sensitive claim, clinical, and contract data protected during LLM-assisted document workflows.",
    tags: ["Finance", "Healthcare", "Legal"],
  },
]

export default function Section10_CaseStudies({
  eyebrow = "Enterprise Deployments",
  title = "Deployed across",
  titleBrand = "global regulated industries.",
  description = "LLM Capsule is in production across global telco, financial services, and healthcare — industries where AI adoption was previously blocked by sensitive internal data. Now it isn't.",
  cards = defaultCards,
}: Props) {
  return (
    <>
      <style>{`
        .s10-section {
          width: 100%;
          padding: 80px 0;
          font-family: "DM Sans", sans-serif;
          color: #0f0f0f;
          background-color: #f7f7f7;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s10-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        /* Section Header */
        .s10-section-header {
          margin-bottom: 48px;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s10-eyebrow {
          display: block;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #636363;
          margin-bottom: 12px;
        }
        .s10-section-title {
          font-family: "DM Sans", sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -1px;
          margin: 0 0 16px;
        }
        .s10-title-brand {
          background: linear-gradient(130deg, #6C54A0, #b44fcc 50%, #ff266a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .s10-section-desc {
          font-size: 16px;
          color: #636363;
          line-height: 1.7;
          max-width: 720px;
          margin: 0;
        }

        /* Card Grid */
        .s10-card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        /* Case Study Card */
        .s10-card {
          display: flex;
          flex-direction: column;
          background: #ffffff;
          border: 1px solid #e6e7e9;
          border-radius: 16px;
          overflow: hidden;
        }
        .s10-card__left {
          padding: 24px 24px 0;
          flex-shrink: 0;
        }
        .s10-card__left-category {
          display: block;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #9c9c9c;
          margin-bottom: 6px;
        }
        .s10-card__left-title {
          font-family: "DM Sans", sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.25;
          margin: 0;
          white-space: pre-line;
        }
        .s10-card__right {
          padding: 20px 24px 24px;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        /* Badges */
        .s10-badge {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 9999px;
        }
        .s10-badge--teal {
          background: #e0f7f2;
          color: #0d7a5f;
        }
        .s10-badge--brand {
          background: linear-gradient(130deg, #6C54A0, #b44fcc 50%, #ff266a);
          color: #ffffff;
        }
        .s10-badge--red {
          background: #fde8e8;
          color: #c0392b;
        }

        .s10-card__description {
          font-size: 14px;
          color: #636363;
          line-height: 1.7;
          margin: 0;
        }
        .s10-card__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 4px;
        }
        .s10-tag {
          display: inline-block;
          font-size: 11px;
          font-weight: 500;
          color: #636363;
          background: #f2f2f2;
          border-radius: 9999px;
          padding: 3px 10px;
        }

        /* Responsive */
        @media (min-width: 768px) {
          .s10-container { padding: 0 32px; }
          .s10-section-title { font-size: 42px; }
          .s10-card-grid { grid-template-columns: 1fr 1fr; }
          .s10-card { flex-direction: row; }
          .s10-card__left { padding: 28px 0 28px 28px; width: 160px; min-width: 160px; }
          .s10-card__right { padding: 28px 28px 28px 24px; }
        }
        @media (min-width: 1024px) {
          .s10-container { padding: 0 32px; }
          .s10-section-title { font-size: 48px; }
          .s10-card-grid { grid-template-columns: 1fr 1fr 1fr; }
        }
        @media (min-width: 1440px) {
          .s10-container { padding: 0 120px; max-width: 1440px; }
        }
      `}</style>

      <section className="s10-section">
        <div className="s10-container">
          {/* Section Header */}
          <div className="s10-section-header">
            <span className="s10-eyebrow">{eyebrow}</span>
            <h2 className="s10-section-title">
              {title}{" "}
              <span className="s10-title-brand">{titleBrand}</span>
            </h2>
            <p className="s10-section-desc">{description}</p>
          </div>

          {/* Card Grid */}
          <div className="s10-card-grid">
            {cards.map((card, i) => (
              <article className="s10-card" key={i}>
                <div className="s10-card__left">
                  <span className="s10-card__left-category">{card.category}</span>
                  <h3 className="s10-card__left-title">{card.title}</h3>
                </div>
                <div className="s10-card__right">
                  <span className={`s10-badge s10-badge--${card.badgeVariant}`}>
                    {card.badgeText}
                  </span>
                  <p className="s10-card__description">{card.description}</p>
                  <div className="s10-card__tags">
                    {card.tags.map((tag, j) => (
                      <span className="s10-tag" key={j}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section10_CaseStudies, {
  eyebrow: {
    type: ControlType.String,
    title: "Eyebrow",
    defaultValue: "Enterprise Deployments",
  },
  title: {
    type: ControlType.String,
    title: "Title",
    defaultValue: "Deployed across",
  },
  titleBrand: {
    type: ControlType.String,
    title: "Title (Brand)",
    defaultValue: "global regulated industries.",
  },
  description: {
    type: ControlType.String,
    title: "Description",
    displayTextArea: true,
    defaultValue:
      "LLM Capsule is in production across global telco, financial services, and healthcare — industries where AI adoption was previously blocked by sensitive internal data. Now it isn't.",
  },
})
