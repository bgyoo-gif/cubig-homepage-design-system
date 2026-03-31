// Section12_FAQ.tsx — DTS Common Questions (FAQ Accordion)
// Framer Code Component
import { useState } from "react"
import { useEffect } from "react"
import { addPropertyControls, ControlType } from "framer"

const FONT_URL = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap"

interface FaqItem {
  question: string
  answer: string
}

interface Props {
  marginTop?: number
  sectionTitle?: string
  sectionTitleHighlight?: string
  defaultOpenIndex?: number
  faq1Question?: string
  faq2Question?: string
  faq3Question?: string
  faq4Question?: string
  faq5Question?: string
  faq6Question?: string
  answer1?: string
  answer2?: string
  answer3?: string
  answer4?: string
  answer5?: string
  answer6?: string
}

export default function Section12_FAQ({
  marginTop = 0,
  sectionTitle = "Common",
  sectionTitleHighlight = "Questions",
  defaultOpenIndex = 0,
  faq1Question = "What is DTS?",
  faq2Question = "What is differential privacy in DTS?",
  faq3Question = "Can DTS run without SynTitan?",
  faq4Question = "What data problems does DTS solve?",
  faq5Question = "What is Zero-Access Architecture?",
  faq6Question = "How is DTS different from SynTitan?",
  answer1 = "DTS is CUBIG's enterprise synthetic data engine. It generates privacy-safe datasets using differential privacy to fix class imbalance, fill coverage gaps, expand training data, and replace restricted or non-accessible data. DTS runs as a standalone engine or integrates with the SynTitan platform.",
  answer2 = "Differential privacy (DP) is a mathematical framework that guarantees any single individual's data cannot be identified from the synthetic output -- regardless of what an attacker already knows. DTS applies DP during generation to produce datasets that are statistically representative but contain no real personal information.",
  answer3 = "Yes. DTS is a full standalone enterprise synthetic data engine. It can be deployed and used independently of SynTitan. When used alongside SynTitan, DTS-generated datasets are versioned and bound to Release States for full execution traceability.",
  answer4 = "DTS addresses three categories: restricted data that cannot be shared due to privacy or compliance rules; data with coverage gaps or class imbalance that make models unreliable; and non-accessible data that exists but cannot reach training pipelines.",
  answer5 = "Zero-Access Architecture means original data never leaves the client environment. DTS analyzes statistical properties in-situ, generates a DP-protected synthetic model, and only the synthetic output is used downstream. Raw data is never transferred or accessed externally -- suitable for classified, regulated, and air-gapped environments.",
  answer6 = "SynTitan performs data quality refinement as part of execution stability. SynTitan can use a subset of DTS capabilities when privacy-safe synthetic data is needed, while DTS is a full standalone enterprise synthetic data engine.",
}: Props) {
  const [openIndex, setOpenIndex] = useState<number>(defaultOpenIndex)

  const faqs: FaqItem[] = [
    { question: faq1Question, answer: answer1 },
    { question: faq2Question, answer: answer2 },
    { question: faq3Question, answer: answer3 },
    { question: faq4Question, answer: answer4 },
    { question: faq5Question, answer: answer5 },
    { question: faq6Question, answer: answer6 },
  ]

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? -1 : idx)
  }

  useEffect(() => {
    const id = "font-dm-sans"
    if (document.getElementById(id)) return
    const link = document.createElement("link")
    link.id = id
    link.rel = "stylesheet"
    link.href = FONT_URL
    document.head.appendChild(link)
  }, [])

  return (
    <>
      <style>{`

        .s12-section {
          width: 100%;
          padding: 80px 0;
          font-family: "DM Sans", sans-serif;
          color: #0f0f0f;
          background-color: #ffffff;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s12-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s12-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        @container (min-width: 768px)  { .s12-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s12-container { padding: 0 120px; max-width: 1440px; } }

        /* Section Header */
        .s12-section-header {
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
          margin-bottom: 32px;
        }
        .s12-section-title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          text-wrap: balance;
        }
        .s12-brand { color: #725bea; }
        @container (max-width: 767px) {
          .s12-section-header { text-align: left; }
          .s12-section-title  { font-size: 28px; }
        }
        @container (min-width: 768px)  { .s12-section-title { font-size: 36px; } }
        @container (min-width: 1024px) { .s12-section-title { font-size: 40px; } }

        /* Accordion List */
        .s12-ac-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        /* Accordion Card */
        .s12-ac-card {
          border: 1px solid #e6e7e9;
          border-radius: 8px;
          background-color: #ffffff;
          overflow: hidden;
          transition: background-color 0.2s;
        }
        .s12-ac-card:hover { background-color: #f7f7f7; }

        .s12-ac-header {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 16px;
          padding: 24px;
          cursor: pointer;
          user-select: none;
        }
        .s12-ac-title {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.2;
          color: #0f0f0f;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        @container (max-width: 767px) {
          .s12-ac-title { font-size: 16px; }
          .s12-ac-header { padding: 16px; }
        }

        /* Toggle button */
        .s12-ac-toggle {
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
          position: relative;
        }
        .s12-ac-toggle:hover { border-color: #171719; background: #f2f2f2; }

        /* Plus/minus icon via pseudo-elements */
        .s12-ac-icon {
          width: 12px;
          height: 12px;
          position: relative;
          flex-shrink: 0;
        }
        .s12-ac-icon::before,
        .s12-ac-icon::after {
          content: '';
          position: absolute;
          background: #cacccf;
          border-radius: 1px;
          transition: opacity 0.2s;
        }
        .s12-ac-icon::before {
          width: 10px;
          height: 1.5px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .s12-ac-icon::after {
          width: 1.5px;
          height: 10px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .s12-ac-icon--open::after { opacity: 0; }
        .s12-ac-icon--open::before { background: #636363; }

        /* Body */
        .s12-ac-body {
          padding: 24px;
          border-top: 1px solid #e6e7e9;
          background: #f7f7f7;
        }
        .s12-ac-body-text {
          font-size: 16px;
          color: #636363;
          line-height: 1.7;
          margin: 0;
          text-wrap: pretty;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        @container (max-width: 767px) {
          .s12-ac-body { padding: 16px; }
          .s12-ac-body-text { font-size: 14px; }
        }
      `}</style>

      <section className="s12-section" id="section-12" style={{ marginTop: `${marginTop}px` }}>
        <div className="s12-inner">
        <div className="s12-container">
          {/* Section Header */}
          <div className="s12-section-header">
            <h2 className="s12-section-title">
              {sectionTitle} <span className="s12-brand">{sectionTitleHighlight}</span>
            </h2>
          </div>

          {/* Accordion List */}
          <div className="s12-ac-list" role="list">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx
              return (
                <article className="s12-ac-card" key={idx} role="listitem">
                  <div
                    className="s12-ac-header"
                    onClick={() => handleToggle(idx)}
                    aria-expanded={isOpen}
                  >
                    <div className="s12-ac-title">{faq.question}</div>
                    <div
                      className="s12-ac-toggle"
                      role="button"
                      aria-label="Toggle accordion"
                    >
                      <span
                        className={`s12-ac-icon${isOpen ? " s12-ac-icon--open" : ""}`}
                      />
                    </div>
                  </div>
                  {isOpen && (
                    <div className="s12-ac-body">
                      <p className="s12-ac-body-text">{faq.answer}</p>
                    </div>
                  )}
                </article>
              )
            })}
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section12_FAQ, {
  marginTop: {
    type: ControlType.Number,
    title: "Top Margin",
    defaultValue: 0,
    min: 0,
    max: 200,
    step: 10,
  },
  sectionTitle: {
    type: ControlType.String,
    title: "Section Title",
    defaultValue: "Common",
  },
  sectionTitleHighlight: {
    type: ControlType.String,
    title: "Title Highlight",
    defaultValue: "Questions",
  },
  defaultOpenIndex: {
    type: ControlType.Number,
    title: "Default Open (index)",
    defaultValue: 0,
    min: -1,
    max: 5,
    step: 1,
    displayStepper: true,
  },
  faq1Question: {
    type: ControlType.String,
    title: "FAQ 1 Question",
    defaultValue: "What is DTS?",
  },
  faq2Question: {
    type: ControlType.String,
    title: "FAQ 2 Question",
    defaultValue: "What is differential privacy in DTS?",
  },
  faq3Question: {
    type: ControlType.String,
    title: "FAQ 3 Question",
    defaultValue: "Can DTS run without SynTitan?",
  },
  faq4Question: {
    type: ControlType.String,
    title: "FAQ 4 Question",
    defaultValue: "What data problems does DTS solve?",
  },
  faq5Question: {
    type: ControlType.String,
    title: "FAQ 5 Question",
    defaultValue: "What is Zero-Access Architecture?",
  },
  faq6Question: {
    type: ControlType.String,
    title: "FAQ 6 Question",
    defaultValue: "How is DTS different from SynTitan?",
  },
  answer1: {
    type: ControlType.String,
    title: "Answer 1",
    displayTextArea: true,
    defaultValue: "DTS is CUBIG's enterprise synthetic data engine. It generates privacy-safe datasets using differential privacy to fix class imbalance, fill coverage gaps, expand training data, and replace restricted or non-accessible data. DTS runs as a standalone engine or integrates with the SynTitan platform.",
  },
  answer2: {
    type: ControlType.String,
    title: "Answer 2",
    displayTextArea: true,
    defaultValue: "Differential privacy (DP) is a mathematical framework that guarantees any single individual's data cannot be identified from the synthetic output -- regardless of what an attacker already knows. DTS applies DP during generation to produce datasets that are statistically representative but contain no real personal information.",
  },
  answer3: {
    type: ControlType.String,
    title: "Answer 3",
    displayTextArea: true,
    defaultValue: "Yes. DTS is a full standalone enterprise synthetic data engine. It can be deployed and used independently of SynTitan. When used alongside SynTitan, DTS-generated datasets are versioned and bound to Release States for full execution traceability.",
  },
  answer4: {
    type: ControlType.String,
    title: "Answer 4",
    displayTextArea: true,
    defaultValue: "DTS addresses three categories: restricted data that cannot be shared due to privacy or compliance rules; data with coverage gaps or class imbalance that make models unreliable; and non-accessible data that exists but cannot reach training pipelines.",
  },
  answer5: {
    type: ControlType.String,
    title: "Answer 5",
    displayTextArea: true,
    defaultValue: "Zero-Access Architecture means original data never leaves the client environment. DTS analyzes statistical properties in-situ, generates a DP-protected synthetic model, and only the synthetic output is used downstream. Raw data is never transferred or accessed externally -- suitable for classified, regulated, and air-gapped environments.",
  },
  answer6: {
    type: ControlType.String,
    title: "Answer 6",
    displayTextArea: true,
    defaultValue: "SynTitan performs data quality refinement as part of execution stability. SynTitan can use a subset of DTS capabilities when privacy-safe synthetic data is needed, while DTS is a full standalone enterprise synthetic data engine.",
  },
})
