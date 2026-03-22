// Section16_Alternatives.tsx — LLM Capsule vs Alternatives
// Framer Code Component
import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

interface Props {
  eyebrow?: string
  titleProduct?: string
  titleBrand?: string
  description?: string
}

export default function Section16_Alternatives({
  eyebrow = "Alternatives",
  titleProduct = "LLM Capsule",
  titleBrand = "the alternatives",
  description = "You don't need to choose between frontier models and data safety.",
}: Props) {
  return (
    <>
      <style>{`
        .s16-section {
          width: 100%;
          padding: 80px 0;
          font-family: "DM Sans", sans-serif;
          color: #0f0f0f;
          background-color: #ffffff;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s16-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        /* Section Header */
        .s16-section-header {
          margin-bottom: 48px;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s16-eyebrow {
          display: block;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #636363;
          margin-bottom: 12px;
        }
        .s16-section-title {
          font-family: "DM Sans", sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -1px;
          margin: 0 0 12px;
        }
        .s16-title-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }
        .s16-title-brand {
          background: linear-gradient(130deg, #6C54A0, #b44fcc 50%, #ff266a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .s16-section-desc {
          font-size: 16px;
          color: #636363;
          line-height: 1.7;
          margin: 0;
        }

        /* Card Grid */
        .s16-card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        /* Cards */
        .s16-card {
          background: #ffffff;
          border: 1px solid #e6e7e9;
          border-radius: 16px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .s16-card--dark {
          background: #0f0f0f;
          border-color: #0f0f0f;
          color: #ffffff;
        }

        .s16-card__title {
          font-family: "DM Sans", sans-serif;
          font-size: 17px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.3;
          margin: 0;
        }
        .s16-card--dark .s16-card__title {
          color: #ffffff;
        }
        .s16-card__title-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }

        /* Bullet List */
        .s16-bullet {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .s16-bullet__item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 14px;
          color: #636363;
          line-height: 1.6;
        }
        .s16-card--dark .s16-bullet__item {
          color: rgba(255,255,255,0.75);
        }
        .s16-bullet__icon {
          display: inline-block;
          width: 6px;
          height: 6px;
          min-width: 6px;
          border-radius: 50%;
          background: #9c9c9c;
          margin-top: 7px;
        }
        .s16-card--dark .s16-bullet__icon {
          background: rgba(255,255,255,0.4);
        }
        .s16-text-linethrough {
          text-decoration: line-through;
          opacity: 0.55;
        }

        /* Responsive */
        @media (min-width: 768px) {
          .s16-container { padding: 0 32px; }
          .s16-section-title { font-size: 42px; }
          .s16-card-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 1024px) {
          .s16-container { padding: 0 32px; }
          .s16-section-title { font-size: 48px; }
          .s16-card-grid { grid-template-columns: 1fr 1fr 1fr; }
        }
        @media (min-width: 1440px) {
          .s16-container { padding: 0 120px; max-width: 1440px; }
        }
      `}</style>

      <section className="s16-section">
        <div className="s16-container">
          {/* Section Header */}
          <div className="s16-section-header">
            <span className="s16-eyebrow">{eyebrow}</span>
            <h2 className="s16-section-title">
              <span className="s16-title-product">{titleProduct}</span>
              {" vs "}
              <span className="s16-title-brand">{titleBrand}</span>
            </h2>
            <p className="s16-section-desc">{description}</p>
          </div>

          {/* Card Grid */}
          <div className="s16-card-grid">
            {/* Card 1: Private / On-prem LLM */}
            <div className="s16-card">
              <h3 className="s16-card__title">Private / On-prem LLM</h3>
              <ul className="s16-bullet">
                <li className="s16-bullet__item">
                  <span className="s16-bullet__icon"></span>
                  Data stays inside firewall
                </li>
                <li className="s16-bullet__item">
                  <span className="s16-bullet__icon"></span>
                  <span className="s16-text-linethrough">Access to frontier models</span>
                </li>
                <li className="s16-bullet__item">
                  <span className="s16-bullet__icon"></span>
                  <span className="s16-text-linethrough">Real-time PII detection</span>
                </li>
                <li className="s16-bullet__item">
                  <span className="s16-bullet__icon"></span>
                  <span className="s16-text-linethrough">Output re-mapping</span>
                </li>
                <li className="s16-bullet__item">
                  <span className="s16-bullet__icon"></span>
                  High infra cost
                </li>
              </ul>
            </div>

            {/* Card 2: Manual Data Sanitization */}
            <div className="s16-card">
              <h3 className="s16-card__title">Manual Data Sanitization</h3>
              <ul className="s16-bullet">
                <li className="s16-bullet__item">
                  <span className="s16-bullet__icon"></span>
                  Works for simple cases
                </li>
                <li className="s16-bullet__item">
                  <span className="s16-bullet__icon"></span>
                  <span className="s16-text-linethrough">Scales to production volume</span>
                </li>
                <li className="s16-bullet__item">
                  <span className="s16-bullet__icon"></span>
                  <span className="s16-text-linethrough">Handles unstructured text</span>
                </li>
                <li className="s16-bullet__item">
                  <span className="s16-bullet__icon"></span>
                  <span className="s16-text-linethrough">Output re-mapping</span>
                </li>
                <li className="s16-bullet__item">
                  <span className="s16-bullet__icon"></span>
                  Slow, error-prone at scale
                </li>
              </ul>
            </div>

            {/* Card 3: LLM Capsule — Dark highlight card */}
            <div className="s16-card s16-card--dark">
              <h3 className="s16-card__title">
                <span className="s16-card__title-product">LLM Capsule</span>
              </h3>
              <ul className="s16-bullet">
                <li className="s16-bullet__item">
                  <span className="s16-bullet__icon"></span>
                  Use any LLM incl. frontier
                </li>
                <li className="s16-bullet__item">
                  <span className="s16-bullet__icon"></span>
                  Real-time PII detection
                </li>
                <li className="s16-bullet__item">
                  <span className="s16-bullet__icon"></span>
                  Sensitive tokens anonymized
                </li>
                <li className="s16-bullet__item">
                  <span className="s16-bullet__icon"></span>
                  Output re-mapped automatically
                </li>
                <li className="s16-bullet__item">
                  <span className="s16-bullet__icon"></span>
                  Deploys as a layer, no infra
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section16_Alternatives, {
  eyebrow: {
    type: ControlType.String,
    title: "Eyebrow",
    defaultValue: "Alternatives",
  },
  titleProduct: {
    type: ControlType.String,
    title: "Title (Product)",
    defaultValue: "LLM Capsule",
  },
  titleBrand: {
    type: ControlType.String,
    title: "Title (Brand)",
    defaultValue: "the alternatives",
  },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue: "You don't need to choose between frontier models and data safety.",
  },
})
