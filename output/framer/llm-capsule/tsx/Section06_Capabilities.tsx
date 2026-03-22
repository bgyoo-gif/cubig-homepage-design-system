// Section06_Capabilities.tsx — LLM Capsule Four Capabilities
// Framer Code Component
import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

interface CapabilityCard {
  badge: string
  title: string
  description: string
}

interface Props {
  eyebrow?: string
  title?: string
  titleBrand?: string
  cards?: CapabilityCard[]
}

const defaultCards: CapabilityCard[] = [
  {
    badge: "DETECT",
    title: "PII Detection",
    description:
      "Detects sensitive fields in prompts and LLM outputs — including names, IDs, dates, addresses, medical terms, and financial identifiers — using pattern recognition and contextual analysis.",
  },
  {
    badge: "ANONYMIZE",
    title: "Prompt Anonymization",
    description:
      "Detected sensitive tokens are replaced with structured placeholders before the prompt is transmitted to the LLM API. No real PII leaves the enterprise perimeter.",
  },
  {
    badge: "RE-MAP",
    title: "Output Re-mapping",
    description:
      "LLM outputs referencing anonymized tokens are re-mapped for downstream use — preserving semantic structure and output usability without exposing any real data to the LLM.",
  },
  {
    badge: "AUDIT",
    title: "Audit & Traceability",
    description:
      "Each anonymization run is logged and — when used within SynTitan — bound to a Release State. Every LLM workflow becomes auditable, reproducible, and compliant.",
  },
]

export default function Section06_Capabilities({
  eyebrow = "Capabilities",
  title = "Four steps to ",
  titleBrand = "AI-ready data.",
  cards = defaultCards,
}: Props) {
  return (
    <>
      <style>{`
        .s6-section {
          width: 100%;
          padding: 80px 0;
          font-family: "DM Sans", sans-serif;
          color: #0f0f0f;
          background-color: #f7f7f7;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s6-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        /* Section Header */
        .s6-section-header {
          margin-bottom: 48px;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s6-eyebrow {
          display: block;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #636363;
          margin-bottom: 12px;
        }
        .s6-section-title {
          font-family: "DM Sans", sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -1px;
          margin: 0;
        }
        .s6-title-brand {
          background: linear-gradient(130deg, #6C54A0, #b44fcc 50%, #ff266a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Card Grid */
        .s6-card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        .s6-card {
          background: #ffffff;
          border: 1px solid #e6e7e9;
          border-radius: 16px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .s6-badge {
          display: inline-flex;
          align-items: center;
          padding: 4px 12px;
          border-radius: 9999px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          background-color: #f0ecff;
          color: #6C54A0;
          width: fit-content;
        }
        .s6-card-title {
          font-size: 16px;
          font-weight: 700;
          color: #0f0f0f;
          margin: 0;
        }
        .s6-card-desc {
          font-size: 14px;
          color: #636363;
          line-height: 1.7;
          margin: 0;
        }

        /* Responsive */
        @media (min-width: 768px) {
          .s6-container { padding: 0 32px; }
          .s6-card-grid { grid-template-columns: repeat(2, 1fr); }
          .s6-section-title { font-size: 42px; }
        }
        @media (min-width: 1024px) {
          .s6-container { padding: 0 32px; }
          .s6-card-grid { grid-template-columns: repeat(4, 1fr); }
          .s6-section-title { font-size: 48px; }
        }
        @media (min-width: 1440px) {
          .s6-container { padding: 0 120px; max-width: 1440px; }
        }
      `}</style>

      <section className="s6-section">
        <div className="s6-container">
          {/* Section Header */}
          <div className="s6-section-header">
            <span className="s6-eyebrow">{eyebrow}</span>
            <h2 className="s6-section-title">
              {title}
              <span className="s6-title-brand">{titleBrand}</span>
            </h2>
          </div>

          {/* Cards */}
          <div className="s6-card-grid">
            {cards.map((card, i) => (
              <div key={i} className="s6-card">
                <span className="s6-badge">{card.badge}</span>
                <h3 className="s6-card-title">{card.title}</h3>
                <p className="s6-card-desc">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section06_Capabilities, {
  eyebrow: {
    type: ControlType.String,
    title: "Eyebrow",
    defaultValue: "Capabilities",
  },
  title: {
    type: ControlType.String,
    title: "Title",
    defaultValue: "Four steps to ",
  },
  titleBrand: {
    type: ControlType.String,
    title: "Title (Brand)",
    defaultValue: "AI-ready data.",
  },
})
