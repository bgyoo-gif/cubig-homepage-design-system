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

// ─── FAQ Answer content ───────────────────────────────────────────────────────
interface AnswerContentProps {
  index: number
  a1ProductName: string
  a1Prefix: string
  a1Suffix: string
  a2: string
  a3ProductName1: string
  a3Middle: string
  a3ProductName2: string
  a3Suffix: string
  a4ProductName1: string
  a4Middle: string
  a4ProductName2: string
  a4Suffix: string
  a5ProductName1: string
  a5Middle1: string
  a5ProductName2: string
  a5Middle2: string
  a5ProductName3: string
  a5Middle3: string
  a5ProductName4: string
  a5Suffix: string
}

function AnswerContent(p: AnswerContentProps) {
  switch (p.index) {
    case 0:
      return (
        <p className="s8-body-text">
          {p.a1Prefix}{" "}
          <span className="s8-product">{p.a1ProductName}</span>{" "}
          {p.a1Suffix}
        </p>
      )
    case 1:
      return (
        <p className="s8-body-text">
          {p.a2}
        </p>
      )
    case 2:
      return (
        <p className="s8-body-text">
          <span className="s8-product">{p.a3ProductName1}</span>{" "}
          {p.a3Middle}{" "}
          <span className="s8-product">{p.a3ProductName2}</span>{" "}
          {p.a3Suffix}
        </p>
      )
    case 3:
      return (
        <p className="s8-body-text">
          <span className="s8-product">{p.a4ProductName1}</span>{" "}
          {p.a4Middle}{" "}
          <span className="s8-product">{p.a4ProductName2}</span>{" "}
          {p.a4Suffix}
        </p>
      )
    case 4:
      return (
        <p className="s8-body-text">
          <span className="s8-product">{p.a5ProductName1}</span>{" "}
          {p.a5Middle1}{" "}
          <span className="s8-product">{p.a5ProductName2}</span>{" "}
          {p.a5Middle2}{" "}
          <span className="s8-product">{p.a5ProductName3}</span>{" "}
          {p.a5Middle3}{" "}
          <span className="s8-product">{p.a5ProductName4}</span>{" "}
          {p.a5Suffix}
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
  q2ProductName,
  q3ProductName,
  q4ProductName,
  q5ProductName1,
  q5ProductName2,
}: {
  index: number
  q1: string; q2: string; q3: string; q4: string; q5: string
  q2ProductName: string
  q3ProductName: string
  q4ProductName: string
  q5ProductName1: string
  q5ProductName2: string
}) {
  switch (index) {
    case 1:
      return <span>{q2} <span className="s8-product">{q2ProductName}</span>?</span>
    case 2:
      return <span>How does <span className="s8-product">{q3ProductName}</span> {q3}</span>
    case 3:
      return <span>How does <span className="s8-product">{q4ProductName}</span> {q4}</span>
    case 4:
      return <span>{q5} <span className="s8-product">{q5ProductName1}</span> and <span className="s8-product">{q5ProductName2}</span>?</span>
    default:
      return <span>{q1}</span>
  }
}

// ─── Accordion Item ───────────────────────────────────────────────────────────
function AccordionItem({
  index,
  isOpen,
  onToggle,
  q1, q2, q3, q4, q5,
  q2ProductName, q3ProductName, q4ProductName, q5ProductName1, q5ProductName2,
  answerProps,
}: {
  index: number
  isOpen: boolean
  onToggle: () => void
  q1: string; q2: string; q3: string; q4: string; q5: string
  q2ProductName: string
  q3ProductName: string
  q4ProductName: string
  q5ProductName1: string
  q5ProductName2: string
  answerProps: AnswerContentProps
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
            <QuestionContent
              index={index}
              q1={q1} q2={q2} q3={q3} q4={q4} q5={q5}
              q2ProductName={q2ProductName}
              q3ProductName={q3ProductName}
              q4ProductName={q4ProductName}
              q5ProductName1={q5ProductName1}
              q5ProductName2={q5ProductName2}
            />
          </div>
        </div>
        <div className="s8-ac-toggle">
          <span className="s8-ac-toggle-icon" />
        </div>
      </div>
      {isOpen && (
        <div className="s8-ac-body">
          <AnswerContent {...answerProps} index={index} />
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
  // Questions
  q1: string
  q2: string
  q3: string
  q4: string
  q5: string
  // Question product names
  q2ProductName: string
  q3ProductName: string
  q4ProductName: string
  q5ProductName1: string
  q5ProductName2: string
  // Answers
  a1ProductName: string
  a1Prefix: string
  a1Suffix: string
  a2: string
  a3ProductName1: string
  a3Middle: string
  a3ProductName2: string
  a3Suffix: string
  a4ProductName1: string
  a4Middle: string
  a4ProductName2: string
  a4Suffix: string
  a5ProductName1: string
  a5Middle1: string
  a5ProductName2: string
  a5Middle2: string
  a5ProductName3: string
  a5Middle3: string
  a5ProductName4: string
  a5Suffix: string
  defaultOpenIndex: number
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function Section08_FAQ(props: Props) {
  const {
    marginTop,
    sectionTitlePrefix,
    sectionTitleHighlight,
    q1, q2, q3, q4, q5,
    q2ProductName, q3ProductName, q4ProductName, q5ProductName1, q5ProductName2,
    a1ProductName, a1Prefix, a1Suffix,
    a2,
    a3ProductName1, a3Middle, a3ProductName2, a3Suffix,
    a4ProductName1, a4Middle, a4ProductName2, a4Suffix,
    a5ProductName1, a5Middle1, a5ProductName2, a5Middle2,
    a5ProductName3, a5Middle3, a5ProductName4, a5Suffix,
    defaultOpenIndex,
  } = props

  const [openIndex, setOpenIndex] = useState<number>(defaultOpenIndex)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  const answerProps: AnswerContentProps = {
    index: 0,
    a1ProductName, a1Prefix, a1Suffix,
    a2,
    a3ProductName1, a3Middle, a3ProductName2, a3Suffix,
    a4ProductName1, a4Middle, a4ProductName2, a4Suffix,
    a5ProductName1, a5Middle1, a5ProductName2, a5Middle2,
    a5ProductName3, a5Middle3, a5ProductName4, a5Suffix,
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

        .s8-inner {
          width: 100%;
          container-type: inline-size;
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

        @container (min-width: 768px) {
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

        @container (min-width: 1024px) {
          .s8-section-header__title {
            font-size: 32px;
          }
        }

        @container (min-width: 1440px) {
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
        <div className="s8-inner">
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
                q2ProductName={q2ProductName}
                q3ProductName={q3ProductName}
                q4ProductName={q4ProductName}
                q5ProductName1={q5ProductName1}
                q5ProductName2={q5ProductName2}
                answerProps={{ ...answerProps, index: i }}
              />
            ))}
          </div>
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
  // ── Questions ──────────────────────────────────────────────────────────────
  q1: {
    type: ControlType.String,
    title: "Q1 Text",
    defaultValue: "What does \u2018reproducible AI execution\u2019 mean in production?",
  },
  q2: {
    type: ControlType.String,
    title: "Q2 Prefix",
    defaultValue: "What is a Release State in",
  },
  q2ProductName: {
    type: ControlType.String,
    title: "Q2 Product Name",
    defaultValue: "SynTitan",
  },
  q3: {
    type: ControlType.String,
    title: "Q3 Suffix (after product)",
    defaultValue: "solve the unusable data problem?",
  },
  q3ProductName: {
    type: ControlType.String,
    title: "Q3 Product Name",
    defaultValue: "DTS",
  },
  q4: {
    type: ControlType.String,
    title: "Q4 Suffix (after product)",
    defaultValue: "protect sensitive data during LLM usage?",
  },
  q4ProductName: {
    type: ControlType.String,
    title: "Q4 Product Name",
    defaultValue: "LLM Capsule",
  },
  q5: {
    type: ControlType.String,
    title: "Q5 Prefix (before products)",
    defaultValue: "What is the difference between",
  },
  q5ProductName1: {
    type: ControlType.String,
    title: "Q5 Product Name 1",
    defaultValue: "SynTitan",
  },
  q5ProductName2: {
    type: ControlType.String,
    title: "Q5 Product Name 2",
    defaultValue: "DTS",
  },
  // ── Answer 1 ───────────────────────────────────────────────────────────────
  a1Prefix: {
    type: ControlType.String,
    title: "A1 Prefix (before product)",
    defaultValue: "Reproducible AI execution means that any past AI run can be re-executed under the exact same data, environment, and pipeline conditions \u2014 returning the same result.",
  },
  a1ProductName: {
    type: ControlType.String,
    title: "A1 Product Name",
    defaultValue: "SynTitan",
  },
  a1Suffix: {
    type: ControlType.String,
    title: "A1 Suffix (after product)",
    defaultValue: "achieves this through Release State and Run Binding, which lock execution conditions at every run. When something breaks in production, you don\u2019t debug blind \u2014 you diff the states and reproduce the last known-good run.",
  },
  // ── Answer 2 ───────────────────────────────────────────────────────────────
  a2: {
    type: ControlType.String,
    title: "A2 Text",
    defaultValue: "A Release State is a versioned snapshot of all execution conditions at the time of an AI run \u2014 including data schema, pipeline configuration, feature set, and runtime parameters. It enables diff between states to trace what changed and re-run the same conditions for incident response and regression verification.",
  },
  // ── Answer 3 ───────────────────────────────────────────────────────────────
  a3ProductName1: {
    type: ControlType.String,
    title: "A3 Product Name 1",
    defaultValue: "DTS",
  },
  a3Middle: {
    type: ControlType.String,
    title: "A3 Middle (between products)",
    defaultValue: "generates privacy-safe synthetic data using differential privacy to fill coverage gaps, fix class imbalance, and replace non-accessible data. It operates as a standalone engine or integrates with",
  },
  a3ProductName2: {
    type: ControlType.String,
    title: "A3 Product Name 2",
    defaultValue: "SynTitan",
  },
  a3Suffix: {
    type: ControlType.String,
    title: "A3 Suffix",
    defaultValue: "for end-to-end execution stability.",
  },
  // ── Answer 4 ───────────────────────────────────────────────────────────────
  a4ProductName1: {
    type: ControlType.String,
    title: "A4 Product Name 1",
    defaultValue: "LLM Capsule",
  },
  a4Middle: {
    type: ControlType.String,
    title: "A4 Middle (between products)",
    defaultValue: "detects sensitive fields including PII in prompts and outputs, anonymizes or shields them before LLM interaction, and preserves output usability for downstream workflows \u2014 all within",
  },
  a4ProductName2: {
    type: ControlType.String,
    title: "A4 Product Name 2",
    defaultValue: "SynTitan",
  },
  a4Suffix: {
    type: ControlType.String,
    title: "A4 Suffix",
    defaultValue: "execution workflows.",
  },
  // ── Answer 5 ───────────────────────────────────────────────────────────────
  a5ProductName1: {
    type: ControlType.String,
    title: "A5 Product Name 1",
    defaultValue: "SynTitan",
  },
  a5Middle1: {
    type: ControlType.String,
    title: "A5 Middle 1",
    defaultValue: "performs data quality refinement as part of execution stability.",
  },
  a5ProductName2: {
    type: ControlType.String,
    title: "A5 Product Name 2",
    defaultValue: "SynTitan",
  },
  a5Middle2: {
    type: ControlType.String,
    title: "A5 Middle 2",
    defaultValue: "can use a subset of",
  },
  a5ProductName3: {
    type: ControlType.String,
    title: "A5 Product Name 3",
    defaultValue: "DTS",
  },
  a5Middle3: {
    type: ControlType.String,
    title: "A5 Middle 3",
    defaultValue: "capabilities when privacy-safe synthetic data is needed, while",
  },
  a5ProductName4: {
    type: ControlType.String,
    title: "A5 Product Name 4",
    defaultValue: "DTS",
  },
  a5Suffix: {
    type: ControlType.String,
    title: "A5 Suffix",
    defaultValue: "is a full standalone enterprise synthetic data engine.",
  },
  // ── Misc ───────────────────────────────────────────────────────────────────
  defaultOpenIndex: {
    type: ControlType.Number,
    title: "Default Open (0\u20134, -1 = none)",
    defaultValue: 0,
    min: -1,
    max: 4,
    step: 1,
    displayStepper: true,
  },
})
