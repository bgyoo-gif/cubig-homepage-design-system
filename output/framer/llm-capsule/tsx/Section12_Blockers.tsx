// Section12_Blockers.tsx — When Teams Need LLM Capsule (bg-image section)
// Framer Code Component
import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

interface BlockerCard {
  badgeText: string
  title: string
  description: string
}

interface Props {
  eyebrow?: string
  title?: string
  titleBrand?: string
  description?: string
  primaryBtnText?: string
  primaryBtnHref?: string
  secondaryBtn1Text?: string
  secondaryBtn1Href?: string
  secondaryBtn2Text?: string
  secondaryBtn2Href?: string
  cards?: BlockerCard[]
}

const defaultCards: BlockerCard[] = [
  {
    badgeText: "BLOCKER: PII IN PROMPTS",
    title: "Employees want to use LLMs on enterprise data, but prompts contain PII.",
    description:
      "Names, customer IDs, account numbers, health records — all appear naturally in enterprise text. When employees paste this into ChatGPT, Claude, or any external LLM, it creates a prompt data leakage risk. LLM Capsule intercepts, anonymizes, and re-maps — so LLM usage can proceed safely.",
  },
  {
    badgeText: "BLOCKER: COMPLIANCE",
    title: "Compliance blocks LLM usage entirely, even for internal tools.",
    description:
      "Legal and compliance teams block LLM adoption because no safe-use policy exists for data containing regulated fields. LLM Capsule gives compliance teams a technical control layer — inline anonymization with audit logs — that makes AI-use policies enforceable and demonstrable.",
  },
  {
    badgeText: "BLOCKER: OUTPUT EXPOSURE",
    title: "LLM outputs may contain or infer sensitive information from prompts.",
    description:
      "Anonymizing the input alone isn't enough. LLMs can reflect, restructure, or infer sensitive patterns in their output. LLM Capsule applies detection and shield on both directions — input and output — so downstream workflows receive safe, usable responses.",
  },
  {
    badgeText: "BLOCKER: USABILITY",
    title: "Existing masking tools destroy data usability, making LLM output meaningless.",
    description:
      "Simple string replacement (replacing \"John Smith\" with \"XXXX\") breaks the semantic meaning that LLMs rely on. LLM Capsule maps sensitive tokens to coherent anonymized substitutes, and re-maps them in the output — preserving both safety and usability for downstream AI workflows.",
  },
]

export default function Section12_Blockers({
  eyebrow = "When Teams Need LLM Capsule",
  title = "Four situations where sensitive data",
  titleBrand = "blocks AI adoption.",
  description = "Enterprise LLM adoption stalls when data contains fields that can't leave the perimeter. LLM Capsule was built for exactly these blockers.",
  primaryBtnText = "Run technical walkthrough",
  primaryBtnHref = "/contact",
  secondaryBtn1Text = "Explore LLM Capsule",
  secondaryBtn1Href = "https://llmcapsule.ai",
  secondaryBtn2Text = "Explore concept: Prompt data leakage",
  secondaryBtn2Href = "/learn/prompt-data-leakage",
  cards = defaultCards,
}: Props) {
  return (
    <>
      <style>{`
        .s12-section {
          width: 100%;
          padding: 80px 0;
          font-family: "DM Sans", sans-serif;
          color: #ffffff;
          background-color: #171719;
          background-image: url('${IMAGE_BASE}/bg-green-wave.png');
          background-size: cover;
          background-position: center;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
          position: relative;
        }
        .s12-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(15, 15, 15, 0.72);
          pointer-events: none;
        }
        .s12-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
          position: relative;
          z-index: 1;
        }

        /* Section Header */
        .s12-section-header {
          margin-bottom: 48px;
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(255,255,255,0.15);
        }
        .s12-eyebrow {
          display: block;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.6);
          margin-bottom: 12px;
        }
        .s12-section-title {
          font-family: "DM Sans", sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          letter-spacing: -1px;
          margin: 0 0 16px;
        }
        .s12-title-brand {
          background: linear-gradient(130deg, #6C54A0, #b44fcc 50%, #ff266a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .s12-section-desc {
          font-size: 16px;
          color: rgba(255,255,255,0.75);
          line-height: 1.7;
          max-width: 720px;
          margin: 0;
        }

        /* Card Grid */
        .s12-card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          margin-bottom: 40px;
        }

        /* Cards */
        .s12-card {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 16px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          backdrop-filter: blur(8px);
        }

        /* Badge */
        .s12-badge--red {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 9999px;
          background: rgba(255, 48, 48, 0.18);
          color: #ff3030;
          border: 1px solid rgba(255, 48, 48, 0.3);
        }

        .s12-card__title {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.4;
          margin: 0;
        }
        .s12-card__description {
          font-size: 14px;
          color: rgba(255,255,255,0.7);
          line-height: 1.7;
          margin: 0;
        }

        /* Actions */
        .s12-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
        }
        .s12-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          font-size: 15px;
          cursor: pointer;
          border: none;
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap;
          text-decoration: none;
          padding: 11px 28px;
        }
        .s12-btn--primary {
          background: linear-gradient(130deg, #6C54A0, #b44fcc 50%, #ff266a);
          color: #ffffff;
        }
        .s12-btn--primary:hover { opacity: 0.88; }
        .s12-btn--secondary {
          background-color: rgba(255,255,255,0.08);
          color: #ffffff;
          border: 1px solid rgba(255,255,255,0.25);
        }
        .s12-btn--secondary:hover { background-color: rgba(255,255,255,0.14); }

        /* Responsive */
        @media (min-width: 768px) {
          .s12-container { padding: 0 32px; }
          .s12-section-title { font-size: 42px; }
          .s12-card-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 1024px) {
          .s12-container { padding: 0 32px; }
          .s12-section-title { font-size: 48px; }
        }
        @media (min-width: 1440px) {
          .s12-container { padding: 0 120px; max-width: 1440px; }
        }
      `}</style>

      <section className="s12-section">
        <div className="s12-container">
          {/* Section Header */}
          <div className="s12-section-header">
            <span className="s12-eyebrow">{eyebrow}</span>
            <h2 className="s12-section-title">
              {title}{" "}
              <span className="s12-title-brand">{titleBrand}</span>
            </h2>
            <p className="s12-section-desc">{description}</p>
          </div>

          {/* Card Grid */}
          <div className="s12-card-grid">
            {cards.map((card, i) => (
              <div className="s12-card" key={i}>
                <span className="s12-badge--red">{card.badgeText}</span>
                <h3 className="s12-card__title">{card.title}</h3>
                <p className="s12-card__description">{card.description}</p>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="s12-actions">
            <a href={primaryBtnHref} className="s12-btn s12-btn--primary">
              {primaryBtnText}
            </a>
            {secondaryBtn1Text && (
              <a
                href={secondaryBtn1Href}
                target={secondaryBtn1Href?.startsWith("http") ? "_blank" : undefined}
                rel={secondaryBtn1Href?.startsWith("http") ? "noopener noreferrer" : undefined}
                className="s12-btn s12-btn--secondary"
              >
                {secondaryBtn1Text}
              </a>
            )}
            {secondaryBtn2Text && (
              <a href={secondaryBtn2Href} className="s12-btn s12-btn--secondary">
                {secondaryBtn2Text}
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section12_Blockers, {
  eyebrow: {
    type: ControlType.String,
    title: "Eyebrow",
    defaultValue: "When Teams Need LLM Capsule",
  },
  title: {
    type: ControlType.String,
    title: "Title",
    defaultValue: "Four situations where sensitive data",
  },
  titleBrand: {
    type: ControlType.String,
    title: "Title (Brand)",
    defaultValue: "blocks AI adoption.",
  },
  description: {
    type: ControlType.String,
    title: "Description",
    displayTextArea: true,
    defaultValue:
      "Enterprise LLM adoption stalls when data contains fields that can't leave the perimeter. LLM Capsule was built for exactly these blockers.",
  },
  primaryBtnText: {
    type: ControlType.String,
    title: "Primary Button",
    defaultValue: "Run technical walkthrough",
  },
  primaryBtnHref: {
    type: ControlType.String,
    title: "Primary Link",
    defaultValue: "/contact",
  },
  secondaryBtn1Text: {
    type: ControlType.String,
    title: "Secondary 1 Text",
    defaultValue: "Explore LLM Capsule",
  },
  secondaryBtn1Href: {
    type: ControlType.String,
    title: "Secondary 1 Link",
    defaultValue: "https://llmcapsule.ai",
  },
  secondaryBtn2Text: {
    type: ControlType.String,
    title: "Secondary 2 Text",
    defaultValue: "Explore concept: Prompt data leakage",
  },
  secondaryBtn2Href: {
    type: ControlType.String,
    title: "Secondary 2 Link",
    defaultValue: "/learn/prompt-data-leakage",
  },
})
