import { useState } from "react"
import { addPropertyControls, ControlType } from "framer"

interface Props {
  title?: string
}

export default function Section12_FAQ({
  title = "Common Questions",
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What is DTS?",
      answer: "DTS is CUBIG's enterprise synthetic data engine. It generates privacy-safe datasets using differential privacy to fix class imbalance, fill coverage gaps, expand training data, and replace restricted or non-accessible data. DTS runs as a standalone engine or integrates with the SynTitan platform.",
    },
    {
      question: "What is differential privacy in DTS?",
      answer: "Differential privacy (DP) is a mathematical framework that guarantees any single individual's data cannot be identified from the synthetic output -- regardless of what an attacker already knows. DTS applies DP during generation to produce datasets that are statistically representative but contain no real personal information.",
    },
    {
      question: "Can DTS run without SynTitan?",
      answer: "Yes. DTS is a full standalone enterprise synthetic data engine. It can be deployed and used independently of SynTitan. When used alongside SynTitan, DTS-generated datasets are versioned and bound to Release States for full execution traceability.",
    },
    {
      question: "What data problems does DTS solve?",
      answer: "DTS addresses three categories: restricted data that cannot be shared due to privacy or compliance rules; data with coverage gaps or class imbalance that make models unreliable; and non-accessible data that exists but cannot reach training pipelines.",
    },
    {
      question: "What is Zero-Access Architecture?",
      answer: "Zero-Access Architecture means original data never leaves the client environment. DTS analyzes statistical properties in-situ, generates a DP-protected synthetic model, and only the synthetic output is used downstream. Raw data is never transferred or accessed externally -- suitable for classified, regulated, and air-gapped environments.",
    },
    {
      question: "How is DTS different from SynTitan?",
      answer: "SynTitan performs data quality refinement as part of execution stability. SynTitan can use a subset of DTS capabilities when privacy-safe synthetic data is needed, while DTS is a full standalone enterprise synthetic data engine.",
    },
  ]

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s12-section {
          width: 100%;
          padding: 80px 0;
          background-color: #ffffff;
          font-family: "DM Sans", sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        .s12-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s12-section-header {
          margin-bottom: 32px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s12-title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: balance;
        }
        .s12-title-brand { color: #a617ff; }
        .s12-ac-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
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
        .s12-ac-toggle:hover {
          border-color: #171719;
          background: #f2f2f2;
        }
        .s12-toggle-icon {
          width: 12px;
          height: 12px;
          position: relative;
          flex-shrink: 0;
        }
        .s12-toggle-icon::before,
        .s12-toggle-icon::after {
          content: '';
          position: absolute;
          background: #cacccf;
          border-radius: 1px;
          transition: opacity 0.2s;
        }
        .s12-toggle-icon::before {
          width: 10px; height: 1.5px;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
        }
        .s12-toggle-icon::after {
          width: 1.5px; height: 10px;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
        }
        .s12-toggle-icon--open::after { opacity: 0; }
        .s12-toggle-icon--open::before { background: #636363; }
        .s12-ac-body {
          padding: 24px;
          border-top: 1px solid #e6e7e9;
          background: #f7f7f7;
        }
        .s12-ac-body-text {
          font-size: 14px;
          color: #636363;
          line-height: 1.7;
        }

        @media (min-width: 768px) {
          .s12-container { padding: 0 32px; }
          .s12-title { font-size: 22px; }
          .s12-section-header { text-align: left; }
        }
        @media (min-width: 1024px) {
          .s12-container { padding: 0 32px; }
          .s12-title { font-size: 24px; }
        }
        @media (min-width: 1440px) {
          .s12-container { padding: 0 120px; max-width: 1440px; }
          .s12-title { font-size: 28px; }
        }
        @media (max-width: 767px) {
          .s12-section-header { text-align: left; }
          .s12-title { font-size: 20px; }
        }
      `}</style>
      <section className="s12-section">
        <div className="s12-container">
          <div className="s12-section-header">
            <h2 className="s12-title">
              Common <span className="s12-title-brand">Questions</span>
            </h2>
          </div>
          <div className="s12-ac-list" role="list">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <article className="s12-ac-card" key={i} role="listitem">
                  <div
                    className="s12-ac-header"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                  >
                    <div className="s12-ac-title">{faq.question}</div>
                    <div className="s12-ac-toggle" role="button" aria-label="Toggle accordion">
                      <span className={`s12-toggle-icon${isOpen ? " s12-toggle-icon--open" : ""}`} />
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
      </section>
    </>
  )
}

addPropertyControls(Section12_FAQ, {
  title: { type: ControlType.String, title: "Title", defaultValue: "Common Questions" },
})
