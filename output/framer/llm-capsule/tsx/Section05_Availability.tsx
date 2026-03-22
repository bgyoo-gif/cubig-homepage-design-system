// Section05_Availability.tsx — LLM Capsule Availability (AWS + llmcapsule.ai)
// Framer Code Component
import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

interface Props {
  eyebrow?: string
  title?: string
  titleBrand?: string
  // Card 1
  card1Badge?: string
  card1Title?: string
  card1Description?: string
  card1BtnText?: string
  card1BtnHref?: string
  // Card 2
  card2Badge?: string
  card2Title?: string
  card2Description?: string
  card2BtnText?: string
  card2BtnHref?: string
}

export default function Section05_Availability({
  eyebrow = "Availability",
  title = "Available ",
  titleBrand = "everywhere",
  card1Badge = "AVAILABLE NOW",
  card1Title = "AWS Marketplace",
  card1Description = "LLM Capsule is available on the AWS Marketplace for enterprise procurement, consolidated billing, and streamlined deployment into existing AWS infrastructure.",
  card1BtnText = "View on AWS Marketplace",
  card1BtnHref = "https://aws.amazon.com/marketplace",
  card2Badge = "DEDICATED PRODUCT SITE",
  card2Title = "llmcapsule.ai",
  card2Description = "LLM Capsule also operates its own dedicated domain. Visit llmcapsule.ai to learn more about removing AI data blockers, deployment options, and enterprise coverage.",
  card2BtnText = "Visit llmcapsule.ai",
  card2BtnHref = "https://llmcapsule.ai",
}: Props) {
  return (
    <>
      <style>{`
        .s5-section {
          width: 100%;
          padding: 80px 0;
          font-family: "DM Sans", sans-serif;
          color: #0f0f0f;
          background-color: #ffffff;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s5-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        /* Section Header */
        .s5-section-header {
          margin-bottom: 48px;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s5-eyebrow {
          display: block;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #636363;
          margin-bottom: 12px;
        }
        .s5-section-title {
          font-family: "DM Sans", sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -1px;
          margin: 0;
        }
        .s5-title-brand {
          background: linear-gradient(130deg, #6C54A0, #b44fcc 50%, #ff266a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Card Grid */
        .s5-card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        .s5-card {
          background: #ffffff;
          border: 1px solid #e6e7e9;
          border-radius: 16px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .s5-badge {
          display: inline-flex;
          align-items: center;
          padding: 4px 12px;
          border-radius: 9999px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          width: fit-content;
        }
        .s5-badge--teal { background-color: #e6f9f5; color: #0d7a5f; }
        .s5-badge--brand { background-color: #f0ecff; color: #6C54A0; }

        .s5-card-title {
          font-size: 22px;
          font-weight: 700;
          color: #0f0f0f;
          margin: 0;
          letter-spacing: -0.5px;
        }
        .s5-card-desc {
          font-size: 15px;
          color: #636363;
          line-height: 1.7;
          margin: 0;
          flex: 1;
        }
        .s5-card-btn-wrap {
          margin-top: 8px;
        }
        .s5-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #3061f2;
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          border: 1px solid #e6e7e9;
          border-radius: 9999px;
          padding: 10px 24px;
          transition: background-color 0.2s;
        }
        .s5-btn-ghost:hover {
          background-color: #f7f7f7;
        }

        /* Responsive */
        @media (min-width: 768px) {
          .s5-container { padding: 0 32px; }
          .s5-card-grid { grid-template-columns: repeat(2, 1fr); }
          .s5-section-title { font-size: 42px; }
        }
        @media (min-width: 1024px) {
          .s5-container { padding: 0 32px; }
          .s5-section-title { font-size: 48px; }
        }
        @media (min-width: 1440px) {
          .s5-container { padding: 0 120px; max-width: 1440px; }
        }
      `}</style>

      <section className="s5-section">
        <div className="s5-container">
          {/* Section Header */}
          <div className="s5-section-header">
            <span className="s5-eyebrow">{eyebrow}</span>
            <h2 className="s5-section-title">
              {title}
              <span className="s5-title-brand">{titleBrand}</span>
              {" "}you need it
            </h2>
          </div>

          {/* Cards */}
          <div className="s5-card-grid">
            <div className="s5-card">
              <span className="s5-badge s5-badge--teal">{card1Badge}</span>
              <h3 className="s5-card-title">{card1Title}</h3>
              <p className="s5-card-desc">{card1Description}</p>
              <div className="s5-card-btn-wrap">
                <a
                  href={card1BtnHref}
                  target={card1BtnHref?.startsWith("http") ? "_blank" : undefined}
                  rel={card1BtnHref?.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="s5-btn-ghost"
                >
                  {card1BtnText}
                </a>
              </div>
            </div>
            <div className="s5-card">
              <span className="s5-badge s5-badge--brand">{card2Badge}</span>
              <h3 className="s5-card-title">{card2Title}</h3>
              <p className="s5-card-desc">{card2Description}</p>
              <div className="s5-card-btn-wrap">
                <a
                  href={card2BtnHref}
                  target={card2BtnHref?.startsWith("http") ? "_blank" : undefined}
                  rel={card2BtnHref?.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="s5-btn-ghost"
                >
                  {card2BtnText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section05_Availability, {
  eyebrow: {
    type: ControlType.String,
    title: "Eyebrow",
    defaultValue: "Availability",
  },
  title: {
    type: ControlType.String,
    title: "Title",
    defaultValue: "Available ",
  },
  titleBrand: {
    type: ControlType.String,
    title: "Title (Brand)",
    defaultValue: "everywhere",
  },
  card1Badge: {
    type: ControlType.String,
    title: "Card 1 Badge",
    defaultValue: "AVAILABLE NOW",
  },
  card1Title: {
    type: ControlType.String,
    title: "Card 1 Title",
    defaultValue: "AWS Marketplace",
  },
  card1Description: {
    type: ControlType.String,
    title: "Card 1 Description",
    displayTextArea: true,
    defaultValue:
      "LLM Capsule is available on the AWS Marketplace for enterprise procurement, consolidated billing, and streamlined deployment into existing AWS infrastructure.",
  },
  card1BtnText: {
    type: ControlType.String,
    title: "Card 1 Button",
    defaultValue: "View on AWS Marketplace",
  },
  card1BtnHref: {
    type: ControlType.String,
    title: "Card 1 Link",
    defaultValue: "https://aws.amazon.com/marketplace",
  },
  card2Badge: {
    type: ControlType.String,
    title: "Card 2 Badge",
    defaultValue: "DEDICATED PRODUCT SITE",
  },
  card2Title: {
    type: ControlType.String,
    title: "Card 2 Title",
    defaultValue: "llmcapsule.ai",
  },
  card2Description: {
    type: ControlType.String,
    title: "Card 2 Description",
    displayTextArea: true,
    defaultValue:
      "LLM Capsule also operates its own dedicated domain. Visit llmcapsule.ai to learn more about removing AI data blockers, deployment options, and enterprise coverage.",
  },
  card2BtnText: {
    type: ControlType.String,
    title: "Card 2 Button",
    defaultValue: "Visit llmcapsule.ai",
  },
  card2BtnHref: {
    type: ControlType.String,
    title: "Card 2 Link",
    defaultValue: "https://llmcapsule.ai",
  },
})
