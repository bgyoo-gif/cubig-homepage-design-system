import { useState } from "react"
import { addPropertyControls, ControlType } from "framer"

// ─── Design Tokens ───────────────────────────────────────────────────────────
const tokens = {
  colorBrandPurple:    "#725bea",
  colorTextPrimary:    "#0f0f0f",
  colorTextSecondary:  "#636363",
  colorTextTertiary:   "#9c9c9c",
  colorBorderDefault:  "#e6e7e9",
  colorBorderStrong:   "#171719",
  colorSurfaceWhite:   "#ffffff",
  colorSurfaceLight:   "#f7f7f7",
  colorSurfaceMid:     "#f2f2f2",
  fontBase:            '"DM Sans", sans-serif',
  fontBrand:           '"Oxanium", sans-serif',
  fontCode:            '"Fragment Mono", monospace',
}

// ─── FAQ Item type ────────────────────────────────────────────────────────────
interface FAQItem {
  question: React.ReactNode
  answer: React.ReactNode
}

// ─── FAQ Answer content (rich text with product spans) ───────────────────────
function AnswerContent({ index }: { index: number }) {
  switch (index) {
    case 0:
      return (
        <p className="s8-body-text">
          Reproducible AI execution means that any past AI run can be re-executed under the exact same data, environment, and pipeline conditions — returning the same result.{" "}
          <span className="s8-product">SynTitan</span> achieves this through Release State and Run Binding, which lock execution conditions at every run. When something breaks in production, you don't debug blind — you diff the states and reproduce the last known-good run.
        </p>
      )
    case 1:
      return (
        <p className="s8-body-text">
          A Release State is a versioned snapshot of all execution conditions at the time of an AI run — including data schema, pipeline configuration, feature set, and runtime parameters. It enables diff between states to trace what changed and re-run the same conditions for incident response and regression verification.
        </p>
      )
    case 2:
      return (
        <p className="s8-body-text">
          <span className="s8-product">DTS</span> generates privacy-safe synthetic data using differential privacy to fill coverage gaps, fix class imbalance, and replace non-accessible data. It operates as a standalone engine or integrates with{" "}
          <span className="s8-product">SynTitan</span> for end-to-end execution stability.
        </p>
      )
    case 3:
      return (
        <p className="s8-body-text">
          <span className="s8-product">LLM Capsule</span> detects sensitive fields including PII in prompts and outputs, anonymizes or shields them before LLM interaction, and preserves output usability for downstream workflows — all within{" "}
          <span className="s8-product">SynTitan</span> execution workflows.
        </p>
      )
    case 4:
      return (
        <p className="s8-body-text">
          <span className="s8-product">SynTitan</span> performs data quality refinement as part of execution stability.{" "}
          <span className="s8-product">SynTitan</span> can use a subset of{" "}
          <span className="s8-product">DTS</span> capabilities when privacy-safe synthetic data is needed, while{" "}
          <span className="s8-product">DTS</span> is a full standalone enterprise synthetic data engine.
        </p>
      )
    default:
      return null
  }
}

// ─── Question content (rich text with product spans) ─────────────────────────
function QuestionContent({
  index,
  q1, q2, q3, q4, q5,
}: {
  index: number
  q1: string; q2: string; q3: string; q4: string; q5: string
}) {
  const questions = [q1, q2, q3, q4, q5]
  const raw = questions[index] || ""

  // q2, q3, q4, q5 contain product names — render raw text, product markup is in labels
  switch (index) {
    case 1:
      return <span>What is a Release State in <span className="s8-product">SynTitan</span>?</span>
    case 2:
      return <span>How does <span className="s8-product">DTS</span> solve the unusable data problem?</span>
    case 3:
      return <span>How does <span className="s8-product">LLM Capsule</span> protect sensitive data during LLM usage?</span>
    case 4:
      return <span>What is the difference between <span className="s8-product">SynTitan</span> and <span className="s8-product">DTS</span>?</span>
    default:
      return <span>{raw}</span>
  }
}

// ─── Accordion Item ───────────────────────────────────────────────────────────
function AccordionItem({
  index,
  isOpen,
  onToggle,
  q1, q2, q3, q4, q5,
}: {
  index: number
  isOpen: boolean
  onToggle: () => void
  q1: string; q2: string; q3: string; q4: string; q5: string
}) {
  return (
    <article
      className={`s8-ac-card${isOpen ? " s8-ac--open" : ""}`}
    >
      <div
        className="s8-ac-header"
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            onToggle()
          }
        }}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
      >
        <div className="s8-ac-title-wrap">
          <div className="s8-ac-title">
            <QuestionContent index={index} q1={q1} q2={q2} q3={q3} q4={q4} q5={q5} />
          </div>
        </div>
        <div className="s8-ac-toggle">
          <span className="s8-ac-toggle-icon" />
        </div>
      </div>
      {isOpen && (
        <div className="s8-ac-body">
          <AnswerContent index={index} />
        </div>
      )}
    </article>
  )
}

// ─── Props ────────────────────────────────────────────────────────────────────
interface Props {
  marginTop: number
  sectionTitlePrefix: string
  sectionTitleHighlight: string
  q1: string
  q2: string
  q3: string
  q4: string
  q5: string
  defaultOpenIndex: number
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function Section08_FAQ(props: Props) {
  const {
    marginTop,
    sectionTitlePrefix,
    sectionTitleHighlight,
    q1, q2, q3, q4, q5,
    defaultOpenIndex,
  } = props

  const [openIndex, setOpenIndex] = useState<number>(defaultOpenIndex)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <>
      <style>{`
        .s8-section {
          width: 100%;
          background-color: #ffffff;
          padding: 80px 0;
          box-sizing: border-box;
          font-family: "DM Sans", sans-serif;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s8-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        .s8-section-header {
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
          margin-bottom: 32px;
        }

        .s8-section-header__title {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 0;
          text-wrap: balance;
        }

        .s8-section-header__title .brand {
          color: #725bea;
        }

        .s8-ac-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .s8-ac-card {
          border: 1px solid #e6e7e9;
          border-radius: 8px;
          background-color: #ffffff;
          overflow: hidden;
          transition: background-color 0.2s;
        }

        .s8-ac-card:hover {
          background-color: #f7f7f7;
        }

        .s8-ac-header {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 16px;
          padding: 24px;
          cursor: pointer;
          user-select: none;
        }

        .s8-ac-title-wrap {
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 0;
        }

        .s8-ac-title {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.2;
          color: #0f0f0f;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s8-ac-toggle {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          border: 0.5px solid #e6e7e9;
          background: #f7f7f7;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          cursor: pointer;
          transition: border-color 0.15s, background 0.15s;
        }

        .s8-ac-toggle:hover {
          border-color: #171719;
          background: #f2f2f2;
        }

        .s8-ac-toggle-icon {
          width: 12px;
          height: 12px;
          position: relative;
          flex-shrink: 0;
          display: block;
        }

        .s8-ac-toggle-icon::before,
        .s8-ac-toggle-icon::after {
          content: '';
          position: absolute;
          background: #9c9c9c;
          border-radius: 1px;
          transition: opacity 0.2s;
        }

        .s8-ac-toggle-icon::before {
          width: 10px;
          height: 1.5px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .s8-ac-toggle-icon::after {
          width: 1.5px;
          height: 10px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 1;
        }

        .s8-ac--open .s8-ac-toggle-icon::after {
          opacity: 0;
        }

        .s8-ac--open .s8-ac-toggle-icon::before {
          background: #636363;
        }

        .s8-ac-body {
          padding: 24px;
          border-top: 1px solid #e6e7e9;
          background: #f7f7f7;
        }

        .s8-body-text {
          font-size: 16px;
          color: #636363;
          line-height: 1.7;
          text-wrap: pretty;
          margin: 0;
        }

        .s8-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }

        @media (min-width: 768px) {
          .s8-container {
            padding: 0 32px;
          }
          .s8-section-header__title {
            font-size: 28px;
          }
          .s8-ac-title {
            font-size: 18px;
          }
        }

        @media (min-width: 1024px) {
          .s8-section-header__title {
            font-size: 32px;
          }
        }

        @media (min-width: 1440px) {
          .s8-container {
            padding: 0 120px;
            max-width: 1440px;
          }
          .s8-section-header__title {
            font-size: 40px;
          }
        }
      `}</style>

      <section
        className="s8-section"
        id="section-8"
        style={{ marginTop }}
      >
        <div className="s8-container">
          <div className="s8-section-header">
            <h2 className="s8-section-header__title">
              {sectionTitlePrefix}{" "}
              <span className="brand">{sectionTitleHighlight}</span>
            </h2>
          </div>

          <div className="s8-ac-list">
            {[0, 1, 2, 3, 4].map((i) => (
              <AccordionItem
                key={i}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => handleToggle(i)}
                q1={q1}
                q2={q2}
                q3={q3}
                q4={q4}
                q5={q5}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section08_FAQ, {
  marginTop: {
    type: ControlType.Number,
    title: "Margin Top",
    defaultValue: 0,
    min: 0,
    max: 200,
    step: 4,
    displayStepper: true,
  },
  sectionTitlePrefix: {
    type: ControlType.String,
    title: "Title Prefix",
    defaultValue: "Common",
  },
  sectionTitleHighlight: {
    type: ControlType.String,
    title: "Title Highlight",
    defaultValue: "Questions",
  },
  q1: {
    type: ControlType.String,
    title: "Q1 Text",
    defaultValue: "What does 'reproducible AI execution' mean in production?",
  },
  q2: {
    type: ControlType.String,
    title: "Q2 Text (SynTitan hardcoded)",
    defaultValue: "What is a Release State in SynTitan?",
  },
  q3: {
    type: ControlType.String,
    title: "Q3 Text (DTS hardcoded)",
    defaultValue: "How does DTS solve the unusable data problem?",
  },
  q4: {
    type: ControlType.String,
    title: "Q4 Text (LLM Capsule hardcoded)",
    defaultValue: "How does LLM Capsule protect sensitive data during LLM usage?",
  },
  q5: {
    type: ControlType.String,
    title: "Q5 Text (product names hardcoded)",
    defaultValue: "What is the difference between SynTitan and DTS?",
  },
  defaultOpenIndex: {
    type: ControlType.Number,
    title: "Default Open (0–4, -1 = none)",
    defaultValue: 0,
    min: -1,
    max: 4,
    step: 1,
    displayStepper: true,
  },
})
