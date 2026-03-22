// Section14_FAQ.tsx — FAQ Accordion
// Framer Code Component
import { useState } from "react"
import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

interface FaqItem {
  question: string
  answer: string
}

interface Props {
  eyebrow?: string
  title?: string
  titleBrand?: string
  items?: FaqItem[]
}

const defaultItems: FaqItem[] = [
  {
    question: "What is LLM Capsule?",
    answer:
      "LLM Capsule is a security capability that protects sensitive data including PII during LLM usage. It detects sensitive fields in prompts and outputs, anonymizes or shields them before LLM interaction, and preserves output usability for downstream workflows — all within SynTitan execution workflows.",
  },
  {
    question: "What types of sensitive data does LLM Capsule detect?",
    answer:
      "LLM Capsule detects PII including names, ID numbers, dates, addresses, medical terms, financial identifiers, and other sensitive field patterns in both prompts and LLM outputs. Enterprise-defined custom detection rules are also supported.",
  },
  {
    question: "Does LLM Capsule affect LLM output quality?",
    answer:
      "No. LLM Capsule anonymizes sensitive tokens before submission and re-maps them in the output — preserving the semantic structure and usability of LLM responses for downstream workflows.",
  },
  {
    question: "Does LLM Capsule work with external LLM APIs?",
    answer:
      "Yes. LLM Capsule is designed to intercept prompts before they reach external LLM APIs — ensuring no sensitive data leaves the enterprise perimeter.",
  },
  {
    question: "Does LLM Capsule support on-premise deployment?",
    answer:
      "Yes. LLM Capsule supports full on-premise deployment for air-gapped, regulated, and security-restricted environments. No data leaves the enterprise perimeter. Also available on AWS Marketplace for cloud procurement.",
  },
  {
    question: "How does LLM Capsule relate to SynTitan?",
    answer:
      "LLM Capsule works within SynTitan execution workflows. Each anonymization run is logged and bound to a Release State — making LLM workflows reproducible, auditable, and compliant. It also runs standalone without SynTitan.",
  },
]

export default function Section14_FAQ({
  eyebrow = "FAQ",
  title = "Common",
  titleBrand = "questions",
  items = defaultItems,
}: Props) {
  const [openIndex, setOpenIndex] = useState<number>(0)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? -1 : i)
  }

  return (
    <>
      <style>{`
        .s14-section {
          width: 100%;
          padding: 80px 0;
          font-family: "DM Sans", sans-serif;
          color: #0f0f0f;
          background-color: #ffffff;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s14-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        /* Section Header */
        .s14-section-header {
          margin-bottom: 48px;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s14-eyebrow {
          display: block;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #636363;
          margin-bottom: 12px;
        }
        .s14-section-title {
          font-family: "DM Sans", sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -1px;
          margin: 0;
        }
        .s14-title-brand {
          background: linear-gradient(130deg, #6C54A0, #b44fcc 50%, #ff266a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Accordion */
        .s14-ac-list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .s14-ac-card {
          border-bottom: 1px solid #e6e7e9;
          overflow: hidden;
        }
        .s14-ac-card:first-child {
          border-top: 1px solid #e6e7e9;
        }
        .s14-ac-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 20px 0;
          cursor: pointer;
          user-select: none;
          background: transparent;
          border: none;
          width: 100%;
          text-align: left;
        }
        .s14-ac-header:hover .s14-ac-title {
          color: #3061f2;
        }
        .s14-ac-title {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #0f0f0f;
          line-height: 1.4;
          transition: color 0.15s;
        }
        .s14-ac-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          min-width: 28px;
          border-radius: 50%;
          background: #f2f2f2;
          border: none;
          cursor: pointer;
          transition: background-color 0.15s;
          flex-shrink: 0;
        }
        .s14-ac-toggle-icon {
          display: block;
          width: 12px;
          height: 12px;
          position: relative;
        }
        .s14-ac-toggle-icon::before,
        .s14-ac-toggle-icon::after {
          content: '';
          position: absolute;
          background: #0f0f0f;
          border-radius: 2px;
          transition: transform 0.2s, opacity 0.2s;
        }
        .s14-ac-toggle-icon::before {
          width: 12px;
          height: 2px;
          top: 5px;
          left: 0;
        }
        .s14-ac-toggle-icon::after {
          width: 2px;
          height: 12px;
          top: 0;
          left: 5px;
        }
        .s14-ac-card--open .s14-ac-toggle-icon::after {
          opacity: 0;
          transform: rotate(90deg);
        }
        .s14-ac-card--open .s14-ac-toggle {
          background: #eeebf9;
        }
        .s14-ac-body {
          padding: 0 0 20px;
          display: none;
        }
        .s14-ac-card--open .s14-ac-body {
          display: block;
        }
        .s14-ac-answer {
          font-size: 15px;
          color: #636363;
          line-height: 1.7;
          margin: 0;
          max-width: 720px;
        }

        /* Responsive */
        @media (min-width: 768px) {
          .s14-container { padding: 0 32px; }
          .s14-section-title { font-size: 42px; }
          .s14-ac-title { font-size: 17px; }
        }
        @media (min-width: 1024px) {
          .s14-container { padding: 0 32px; }
          .s14-section-title { font-size: 48px; }
        }
        @media (min-width: 1440px) {
          .s14-container { padding: 0 120px; max-width: 1440px; }
        }
      `}</style>

      <section className="s14-section">
        <div className="s14-container">
          {/* Section Header */}
          <div className="s14-section-header">
            <span className="s14-eyebrow">{eyebrow}</span>
            <h2 className="s14-section-title">
              {title}{" "}
              <span className="s14-title-brand">{titleBrand}</span>
            </h2>
          </div>

          {/* Accordion */}
          <div className="s14-ac-list">
            {items.map((item, i) => (
              <div
                className={`s14-ac-card${openIndex === i ? " s14-ac-card--open" : ""}`}
                key={i}
              >
                <button
                  className="s14-ac-header"
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                >
                  <span className="s14-ac-title">{item.question}</span>
                  <span className="s14-ac-toggle" aria-hidden="true">
                    <span className="s14-ac-toggle-icon"></span>
                  </span>
                </button>
                <div className="s14-ac-body">
                  <p className="s14-ac-answer">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section14_FAQ, {
  eyebrow: {
    type: ControlType.String,
    title: "Eyebrow",
    defaultValue: "FAQ",
  },
  title: {
    type: ControlType.String,
    title: "Title",
    defaultValue: "Common",
  },
  titleBrand: {
    type: ControlType.String,
    title: "Title (Brand)",
    defaultValue: "questions",
  },
})
