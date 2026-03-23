// Section04_PromptFlow.tsx — LLM Capsule Prompt Flow (How It Works)
// Framer Code Component
import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

interface Props {
  eyebrow?: string
  title?: string
  titleBrand?: string
  description?: string
  // Card 1 — Raw Prompt
  card1Badge?: string
  card1Title?: string
  card1RawText?: string
  // Arrow 1
  arrow1Text?: string
  // Card 2 — Anonymized
  card2Badge?: string
  card2Title?: string
  card2AnonText?: string
  // Arrow 2
  arrow2Text?: string
  // Card 3 — Re-mapped
  card3Badge?: string
  card3Title?: string
  card3OutputText?: string
}

export default function Section04_PromptFlow({
  eyebrow = "How It Works",
  title = "Sensitive data never ",
  titleBrand = "reaches the LLM.",
  description = "LLM Capsule sits between your application and the LLM API. Every prompt is intercepted, inspected, and cleaned before transmission.",
  card1Badge = "RAW PROMPT",
  card1Title = "Input — before LLM Capsule",
  card1RawText = "Summarize the claim filed by [NAME] (ID: [ID]) on [DATE]. The patient's address is [ADDRESS]. Diagnosis code: [CODE].",
  arrow1Text = "LLM Capsule removes blockers / anonymizes / enables AI",
  card2Badge = "ANONYMIZED PROMPT",
  card2Title = "Sent to LLM — PII replaced with tokens",
  card2AnonText = "Summarize the claim filed by [PERSON_01] (ID: [ID_01]) on [DATE_01]. The patient's address is [ADDRESS_01]. Diagnosis code: [MED_CODE_01].",
  arrow2Text = "LLM processes anonymized prompt / returns response",
  card3Badge = "RE-MAPPED OUTPUT",
  card3Title = "Output — tokens re-mapped for downstream use",
  card3OutputText = "The claim filed by [PERSON_01] on [DATE_01] relates to a respiratory condition. The case is pending review. All PII tokens are preserved in the anonymization map for authorized downstream access.",
}: Props) {
  return (
    <>
      <style>{`
        .s4-section {
          width: 100%;
          padding: 80px 0;
          font-family: "DM Sans", sans-serif;
          color: #0f0f0f;
          background-color: #f7f7f7;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s4-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        /* Section Header */
        .s4-section-header {
          margin-bottom: 48px;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s4-eyebrow {
          display: block;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #636363;
          margin-bottom: 12px;
        }
        .s4-section-title {
          font-family: "DM Sans", sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -1px;
          margin: 0 0 16px;
        }
        .s4-title-brand {
          background: linear-gradient(130deg, #6C54A0, #b44fcc 50%, #ff266a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .s4-section-desc {
          font-size: 16px;
          color: #636363;
          line-height: 1.7;
          margin: 0;
          max-width: 640px;
        }

        /* Flow Grid */
        .s4-flow {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
        }

        /* Cards */
        .s4-card {
          background: #ffffff;
          border: 1px solid #e6e7e9;
          border-radius: 16px;
          padding: 32px;
        }
        .s4-badge {
          display: inline-flex;
          align-items: center;
          padding: 4px 12px;
          border-radius: 9999px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .s4-badge--red { background-color: #ffeaea; color: #c0392b; }
        .s4-badge--brand { background-color: #f0ecff; color: #6C54A0; }
        .s4-badge--teal { background-color: #e6f9f5; color: #0d7a5f; }

        .s4-card-title {
          font-size: 15px;
          font-weight: 600;
          color: #0f0f0f;
          margin: 0 0 16px;
        }

        /* Code block */
        .s4-code-block {
          background: #f7f7f7;
          border: 1px solid #e6e7e9;
          border-radius: 10px;
          padding: 20px;
          font-family: "Fragment Mono", monospace;
          font-size: 13px;
          line-height: 1.7;
          color: #0f0f0f;
        }
        .s4-code-pii {
          background: #ffeaea;
          color: #c0392b;
          border-radius: 4px;
          padding: 1px 5px;
        }
        .s4-code-masked {
          background: #e6f0ff;
          color: #3061f2;
          border-radius: 4px;
          padding: 1px 5px;
        }

        /* Arrow */
        .s4-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 20px 16px;
          font-size: 13px;
          font-weight: 500;
          color: #636363;
          text-align: center;
        }
        .s4-arrow::before {
          content: "↓";
          font-size: 18px;
          color: #725bea;
          flex-shrink: 0;
        }

        /* Responsive */
        @media (min-width: 768px) {
          .s4-container { padding: 0 32px; }
          .s4-section-title { font-size: 42px; }
        }
        @media (min-width: 1024px) {
          .s4-container { padding: 0 32px; }
          .s4-section-title { font-size: 48px; }
        }
        @media (min-width: 1440px) {
          .s4-container { padding: 0 120px; max-width: 1440px; }
        }
      `}</style>

      <section className="s4-section">
        <div className="s4-container">
          {/* Section Header */}
          <div className="s4-section-header">
            <span className="s4-eyebrow">{eyebrow}</span>
            <h2 className="s4-section-title">
              {title}
              <span className="s4-title-brand">{titleBrand}</span>
            </h2>
            <p className="s4-section-desc">{description}</p>
          </div>

          {/* Flow */}
          <div className="s4-flow">
            {/* Card 1: Raw Prompt */}
            <div className="s4-card">
              <span className="s4-badge s4-badge--red">{card1Badge}</span>
              <h3 className="s4-card-title">{card1Title}</h3>
              <div className="s4-code-block">
                Summarize the claim filed by{" "}
                <span className="s4-code-pii">John Martinez</span>
                {" "}(ID:{" "}
                <span className="s4-code-pii">P-8847211</span>
                {") on "}
                <span className="s4-code-pii">March 3, 2025</span>
                {". The patient's address is "}
                <span className="s4-code-pii">42 Elm Street, Chicago, IL 60601</span>
                {". Diagnosis code: "}
                <span className="s4-code-pii">ICD-10: J45.20</span>
                {"."}
              </div>
            </div>

            {/* Arrow 1 */}
            <div className="s4-arrow">{arrow1Text}</div>

            {/* Card 2: Anonymized */}
            <div className="s4-card">
              <span className="s4-badge s4-badge--brand">{card2Badge}</span>
              <h3 className="s4-card-title">{card2Title}</h3>
              <div className="s4-code-block">
                Summarize the claim filed by{" "}
                <span className="s4-code-masked">[PERSON_01]</span>
                {" "}(ID:{" "}
                <span className="s4-code-masked">[ID_01]</span>
                {") on "}
                <span className="s4-code-masked">[DATE_01]</span>
                {". The patient's address is "}
                <span className="s4-code-masked">[ADDRESS_01]</span>
                {". Diagnosis code: "}
                <span className="s4-code-masked">[MED_CODE_01]</span>
                {"."}
              </div>
            </div>

            {/* Arrow 2 */}
            <div className="s4-arrow">{arrow2Text}</div>

            {/* Card 3: Re-mapped Output */}
            <div className="s4-card">
              <span className="s4-badge s4-badge--teal">{card3Badge}</span>
              <h3 className="s4-card-title">{card3Title}</h3>
              <div className="s4-code-block">
                The claim filed by{" "}
                <span className="s4-code-masked">[PERSON_01]</span>
                {" on "}
                <span className="s4-code-masked">[DATE_01]</span>
                {" relates to a respiratory condition. The case is pending review. All PII tokens are preserved in the anonymization map for authorized downstream access."}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section04_PromptFlow, {
  eyebrow: {
    type: ControlType.String,
    title: "Eyebrow",
    defaultValue: "How It Works",
  },
  title: {
    type: ControlType.String,
    title: "Title",
    defaultValue: "Sensitive data never ",
  },
  titleBrand: {
    type: ControlType.String,
    title: "Title (Brand)",
    defaultValue: "reaches the LLM.",
  },
  description: {
    type: ControlType.String,
    title: "Description",
    displayTextArea: true,
    defaultValue:
      "LLM Capsule sits between your application and the LLM API. Every prompt is intercepted, inspected, and cleaned before transmission.",
  },
  card1Badge: {
    type: ControlType.String,
    title: "Card 1 Badge",
    defaultValue: "RAW PROMPT",
  },
  card1Title: {
    type: ControlType.String,
    title: "Card 1 Title",
    defaultValue: "Input — before LLM Capsule",
  },
  arrow1Text: {
    type: ControlType.String,
    title: "Arrow 1 Text",
    defaultValue: "LLM Capsule removes blockers / anonymizes / enables AI",
  },
  card2Badge: {
    type: ControlType.String,
    title: "Card 2 Badge",
    defaultValue: "ANONYMIZED PROMPT",
  },
  card2Title: {
    type: ControlType.String,
    title: "Card 2 Title",
    defaultValue: "Sent to LLM — PII replaced with tokens",
  },
  arrow2Text: {
    type: ControlType.String,
    title: "Arrow 2 Text",
    defaultValue: "LLM processes anonymized prompt / returns response",
  },
  card3Badge: {
    type: ControlType.String,
    title: "Card 3 Badge",
    defaultValue: "RE-MAPPED OUTPUT",
  },
  card3Title: {
    type: ControlType.String,
    title: "Card 3 Title",
    defaultValue: "Output — tokens re-mapped for downstream use",
  },
})
