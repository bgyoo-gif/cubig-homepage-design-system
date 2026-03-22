// Section13_KeyConcepts.tsx — Key Concepts: LLM Data Security Fundamentals
// Framer Code Component
import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

interface Props {
  eyebrow?: string
  title?: string
  titleBrand?: string
}

export default function Section13_KeyConcepts({
  eyebrow = "Key Concepts",
  title = "LLM",
  titleBrand = "data security",
}: Props) {
  return (
    <>
      <style>{`
        .s13-section {
          width: 100%;
          padding: 80px 0;
          font-family: "DM Sans", sans-serif;
          color: #0f0f0f;
          background-color: #ffffff;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s13-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        /* Section Header */
        .s13-section-header {
          margin-bottom: 48px;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s13-eyebrow {
          display: block;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #636363;
          margin-bottom: 12px;
        }
        .s13-section-title {
          font-family: "DM Sans", sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -1px;
          margin: 0;
        }
        .s13-title-brand {
          background: linear-gradient(130deg, #6C54A0, #b44fcc 50%, #ff266a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Card Grid */
        .s13-card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        .s13-card {
          background: #ffffff;
          border: 1px solid #e6e7e9;
          border-radius: 16px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        /* Badge */
        .s13-badge--brand {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 9999px;
          background: linear-gradient(130deg, #6C54A0, #b44fcc 50%, #ff266a);
          color: #ffffff;
        }

        .s13-card__description {
          font-size: 14px;
          color: #636363;
          line-height: 1.7;
          margin: 0;
        }

        /* Bullet list */
        .s13-bullet {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .s13-bullet__item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 14px;
          color: #636363;
          line-height: 1.6;
        }
        .s13-bullet__icon {
          display: inline-block;
          width: 6px;
          height: 6px;
          min-width: 6px;
          border-radius: 50%;
          background: #9c9c9c;
          margin-top: 7px;
        }

        /* Ghost button */
        .s13-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #3061f2;
          text-decoration: none;
          background: transparent;
          border: 1px solid #e6e7e9;
          border-radius: 9999px;
          padding: 8px 20px;
          transition: background-color 0.2s, border-color 0.2s;
        }
        .s13-btn-ghost:hover {
          background-color: #f7f7f7;
          border-color: #c8cacd;
        }

        /* Responsive */
        @media (min-width: 768px) {
          .s13-container { padding: 0 32px; }
          .s13-section-title { font-size: 42px; }
          .s13-card-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 1024px) {
          .s13-container { padding: 0 32px; }
          .s13-section-title { font-size: 48px; }
          .s13-card-grid { grid-template-columns: 1fr 1fr 1fr; }
        }
        @media (min-width: 1440px) {
          .s13-container { padding: 0 120px; max-width: 1440px; }
        }
      `}</style>

      <section className="s13-section">
        <div className="s13-container">
          {/* Section Header */}
          <div className="s13-section-header">
            <span className="s13-eyebrow">{eyebrow}</span>
            <h2 className="s13-section-title">
              {title}{" "}
              <span className="s13-title-brand">{titleBrand}</span>
              {" fundamentals"}
            </h2>
          </div>

          {/* Card Grid */}
          <div className="s13-card-grid">
            {/* Card 1 */}
            <div className="s13-card">
              <span className="s13-badge--brand">PROMPT ANONYMIZATION</span>
              <p className="s13-card__description">
                Detecting and replacing sensitive tokens in LLM prompts with structured placeholders before transmission to an external LLM API — ensuring no real PII crosses the enterprise perimeter during inference.
              </p>
            </div>

            {/* Card 2 */}
            <div className="s13-card">
              <span className="s13-badge--brand">INTERACTION-LAYER SECURITY</span>
              <p className="s13-card__description">
                LLM data exposure occurs at the interaction layer — prompts and outputs carry PII, medical records, legal content, and financial identifiers. LLM Capsule addresses this layer specifically, as distinct from dataset-level privacy handled by DTS.
              </p>
            </div>

            {/* Card 3 */}
            <div className="s13-card">
              <span className="s13-badge--brand">LLM CAPSULE VS. DTS</span>
              <ul className="s13-bullet">
                <li className="s13-bullet__item">
                  <span className="s13-bullet__icon"></span>
                  LLM Capsule secures data during LLM usage at the interaction layer
                </li>
                <li className="s13-bullet__item">
                  <span className="s13-bullet__icon"></span>
                  DTS generates privacy-safe datasets for AI training and validation
                </li>
                <li className="s13-bullet__item">
                  <span className="s13-bullet__icon"></span>
                  Different layers — both necessary for complete enterprise AI data protection
                </li>
              </ul>
              <div>
                <a href="/dts" className="s13-btn-ghost">Explore DTS</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section13_KeyConcepts, {
  eyebrow: {
    type: ControlType.String,
    title: "Eyebrow",
    defaultValue: "Key Concepts",
  },
  title: {
    type: ControlType.String,
    title: "Title",
    defaultValue: "LLM",
  },
  titleBrand: {
    type: ControlType.String,
    title: "Title (Brand)",
    defaultValue: "data security",
  },
})
