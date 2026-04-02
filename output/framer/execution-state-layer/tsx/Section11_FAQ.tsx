// Section11_FAQ.tsx — Frequently Asked Questions
// Framer Code Component
import { useState } from "react"
import { addPropertyControls, ControlType } from "framer"

interface Props {
  sectionTitlePrefix?: string
  sectionTitleBrand?: string
  faq1Q?: string
  faq1A?: string
  faq2Q?: string
  faq2A?: string
  faq3Q?: string
  faq3A?: string
  faq4Q?: string
  faq4A?: string
  faq5Q?: string
  faq5A?: string
  faq6Q?: string
  faq6A?: string
  faq7Q?: string
  faq7A?: string
}

export default function Section11_FAQ({
  sectionTitlePrefix = "Frequently Asked ",
  sectionTitleBrand = "Questions",
  faq1Q = "What is an Execution State Layer in AI?",
  faq1A = "An Execution State Layer (ESL) is a data infrastructure layer that binds every AI model execution to a versioned, frozen, and verifiable data state. It ensures that the exact data used in any given run can be identified, reproduced, and audited — making AI systems deterministic and production-grade.",
  faq2Q = "How is Execution State Layer different from a traditional data pipeline?",
  faq2A = "A traditional pipeline moves data from source to destination but does not preserve the state of that data at the moment of AI execution. The Execution State Layer adds versioning, snapshot freezing, integrity verification, and full lineage on top of the pipeline — so every AI run has an explicit, immutable data record attached to it.",
  faq3Q = "Why do AI systems need an Execution State Layer?",
  faq3A = "Without an ESL, AI outputs can silently change due to data drift, schema updates, or pipeline modifications — making debugging and compliance nearly impossible. An Execution State Layer provides the infrastructure to ask and answer: what data did this model see, and can we prove it?",
  faq4Q = "What is AI-Ready data, and how does it relate to the Execution State Layer?",
  faq4A = "AI-Ready data meets quality thresholds across six dimensions: Privacy, Integrity, Traceability, Contextuality, Operational Reliability, and Conciseness. The Execution State Layer ensures that this AI-Ready status is preserved and verifiable at every point of execution — not just at the time of ingestion.",
  faq5Q = "How does data versioning support reproducibility in AI?",
  faq5A = "Data versioning assigns a unique, immutable identifier to each state of a dataset. When an AI execution is tied to a specific version, that run can be exactly reproduced at any future point — critical for debugging, model comparison, regulatory audits, and MLOps workflows.",
  faq6Q = "How does Execution State Layer compare to MLflow or DVC?",
  faq6A = "MLflow and DVC are experiment tracking and data versioning tools focused on the model development lifecycle. The Execution State Layer is a broader infrastructure concept: it defines the contract between AI execution and data state, encompassing versioning, integrity verification, and traceability as first-class requirements. Tools like MLflow or DVC can serve as partial implementations of an Execution State Layer, but ESL describes the architectural requirement, not a specific product.",
  faq7Q = "Is Execution State Layer related to data provenance?",
  faq7A = "Yes. Data provenance tracks the origin, transformations, and movement of data over time. The Execution State Layer builds on provenance by binding that lineage record directly to each AI execution — so it is not just known where data came from, but exactly which provenance state the model saw at inference or training time. ESL can be thought of as execution-scoped data provenance: provenance that is frozen, versioned, and verifiable at the moment of every AI run.",
}: Props) {
  const [openIndex, setOpenIndex] = useState<number>(0)

  const faqs = [
    { q: faq1Q, a: faq1A },
    { q: faq2Q, a: faq2A },
    { q: faq3Q, a: faq3A },
    { q: faq4Q, a: faq4A },
    { q: faq5Q, a: faq5A },
    { q: faq6Q, a: faq6A },
    { q: faq7Q, a: faq7A },
  ]

  return (
    <div>
      <style>{`
        .s11-section {
          width: 100%;
          padding: 80px 0;
          background-color: #ffffff;
          font-family: "DM Sans", sans-serif;
          color: #0f0f0f;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
          box-sizing: border-box;
          overflow: hidden;
        }
        .s11-inner { width: 100%; container-type: inline-size; }
        .s11-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s11-header {
          margin-bottom: 48px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s11-header__title {
          font-size: 24px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: balance;
        }
        .s11-header__title-brand { color: #725bea; }

        .s11-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .s11-ac {
          border: 1px solid #e6e7e9;
          border-radius: 8px;
          background-color: #ffffff;
          overflow: hidden;
          transition: background-color 0.2s;
        }
        .s11-ac:hover { background-color: #f7f7f7; }
        .s11-ac__header {
          display: grid;
          grid-template-columns: 1fr auto auto;
          align-items: center;
          gap: 16px;
          padding: 24px;
          cursor: pointer;
          user-select: none;
        }
        .s11-ac__title-wrap {
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 0;
        }
        .s11-ac__tag {
          font-family: "Fragment Mono", monospace;
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #9c9c9c;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .s11-ac__tag-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
          background: #725bea;
        }
        .s11-ac__question {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.2;
          color: #0f0f0f;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s11-ac__toggle {
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
        .s11-ac__toggle:hover { border-color: #171719; background: #f2f2f2; }
        .s11-ac__toggle-icon {
          width: 12px;
          height: 12px;
          position: relative;
          flex-shrink: 0;
        }
        .s11-ac__toggle-icon::before,
        .s11-ac__toggle-icon::after {
          content: '';
          position: absolute;
          background: #9c9c9c;
          border-radius: 1px;
          transition: opacity 0.2s;
        }
        .s11-ac__toggle-icon::before {
          width: 10px; height: 1.5px;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
        }
        .s11-ac__toggle-icon::after {
          width: 1.5px; height: 10px;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          opacity: 1;
        }
        .s11-ac--open .s11-ac__toggle-icon::after { opacity: 0; }
        .s11-ac--open .s11-ac__toggle-icon::before { background: #636363; }

        .s11-ac__body {
          padding: 24px;
          border-top: 1px solid #e6e7e9;
          background: #f7f7f7;
          font-size: 14px;
          line-height: 1.7;
          color: #636363;
          text-wrap: pretty;
        }

        @container (min-width: 768px) {
          .s11-container { padding: 0 32px; }
          .s11-header__title { font-size: 28px; }
        }
        @container (min-width: 1024px) {
          .s11-container { padding: 0 32px; }
          .s11-header__title { font-size: 32px; }
        }
        @container (min-width: 1440px) {
          .s11-container { padding: 0 120px; max-width: 1440px; }
          .s11-header__title { font-size: 36px; }
        }
        @container (max-width: 640px) {
          .s11-ac__header { grid-template-columns: 1fr auto; }
        }
      `}</style>

      <section className="s11-section">
        <div className="s11-inner">
          <div className="s11-container">
            <div className="s11-header">
              <h2 className="s11-header__title">
                {sectionTitlePrefix}
                <span className="s11-header__title-brand">{sectionTitleBrand}</span>
              </h2>
            </div>

            <div className="s11-list">
              {faqs.map((faq, i) => (
                <article
                  key={i}
                  className={`s11-ac${openIndex === i ? " s11-ac--open" : ""}`}
                >
                  <div
                    className="s11-ac__header"
                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  >
                    <div className="s11-ac__title-wrap">
                      <div className="s11-ac__tag">
                        <span className="s11-ac__tag-dot"></span>
                        FAQ
                      </div>
                      <div className="s11-ac__question">{faq.q}</div>
                    </div>
                    <button type="button" className="s11-ac__toggle" aria-label="Toggle">
                      <span className="s11-ac__toggle-icon"></span>
                    </button>
                  </div>
                  {openIndex === i && (
                    <div className="s11-ac__body">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

addPropertyControls(Section11_FAQ, {
  sectionTitlePrefix: { type: ControlType.String, title: "Title Prefix", defaultValue: "Frequently Asked " },
  sectionTitleBrand: { type: ControlType.String, title: "Title Brand", defaultValue: "Questions" },
  faq1Q: { type: ControlType.String, title: "FAQ1 Question", defaultValue: "What is an Execution State Layer in AI?" },
  faq1A: { type: ControlType.String, title: "FAQ1 Answer", displayTextArea: true, defaultValue: "An Execution State Layer (ESL) is a data infrastructure layer that binds every AI model execution to a versioned, frozen, and verifiable data state. It ensures that the exact data used in any given run can be identified, reproduced, and audited — making AI systems deterministic and production-grade." },
  faq2Q: { type: ControlType.String, title: "FAQ2 Question", defaultValue: "How is Execution State Layer different from a traditional data pipeline?" },
  faq2A: { type: ControlType.String, title: "FAQ2 Answer", displayTextArea: true, defaultValue: "A traditional pipeline moves data from source to destination but does not preserve the state of that data at the moment of AI execution. The Execution State Layer adds versioning, snapshot freezing, integrity verification, and full lineage on top of the pipeline — so every AI run has an explicit, immutable data record attached to it." },
  faq3Q: { type: ControlType.String, title: "FAQ3 Question", defaultValue: "Why do AI systems need an Execution State Layer?" },
  faq3A: { type: ControlType.String, title: "FAQ3 Answer", displayTextArea: true, defaultValue: "Without an ESL, AI outputs can silently change due to data drift, schema updates, or pipeline modifications — making debugging and compliance nearly impossible. An Execution State Layer provides the infrastructure to ask and answer: what data did this model see, and can we prove it?" },
  faq4Q: { type: ControlType.String, title: "FAQ4 Question", defaultValue: "What is AI-Ready data, and how does it relate to the Execution State Layer?" },
  faq4A: { type: ControlType.String, title: "FAQ4 Answer", displayTextArea: true, defaultValue: "AI-Ready data meets quality thresholds across six dimensions: Privacy, Integrity, Traceability, Contextuality, Operational Reliability, and Conciseness. The Execution State Layer ensures that this AI-Ready status is preserved and verifiable at every point of execution — not just at the time of ingestion." },
  faq5Q: { type: ControlType.String, title: "FAQ5 Question", defaultValue: "How does data versioning support reproducibility in AI?" },
  faq5A: { type: ControlType.String, title: "FAQ5 Answer", displayTextArea: true, defaultValue: "Data versioning assigns a unique, immutable identifier to each state of a dataset. When an AI execution is tied to a specific version, that run can be exactly reproduced at any future point — critical for debugging, model comparison, regulatory audits, and MLOps workflows." },
  faq6Q: { type: ControlType.String, title: "FAQ6 Question", defaultValue: "How does Execution State Layer compare to MLflow or DVC?" },
  faq6A: { type: ControlType.String, title: "FAQ6 Answer", displayTextArea: true, defaultValue: "MLflow and DVC are experiment tracking and data versioning tools focused on the model development lifecycle. The Execution State Layer is a broader infrastructure concept: it defines the contract between AI execution and data state, encompassing versioning, integrity verification, and traceability as first-class requirements. Tools like MLflow or DVC can serve as partial implementations of an Execution State Layer, but ESL describes the architectural requirement, not a specific product." },
  faq7Q: { type: ControlType.String, title: "FAQ7 Question", defaultValue: "Is Execution State Layer related to data provenance?" },
  faq7A: { type: ControlType.String, title: "FAQ7 Answer", displayTextArea: true, defaultValue: "Yes. Data provenance tracks the origin, transformations, and movement of data over time. The Execution State Layer builds on provenance by binding that lineage record directly to each AI execution — so it is not just known where data came from, but exactly which provenance state the model saw at inference or training time. ESL can be thought of as execution-scoped data provenance: provenance that is frozen, versioned, and verifiable at the moment of every AI run." },
})
