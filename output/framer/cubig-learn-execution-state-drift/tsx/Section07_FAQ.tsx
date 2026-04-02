// Section07_FAQ.tsx — Frequently Asked Questions Accordion
// Framer Code Component
import { useState } from "react"
import { addPropertyControls, ControlType } from "framer"

interface Props {
  titlePart1?: string
  titleBrand?: string
  titlePart2?: string
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
}

export default function Section07_FAQ({
  titlePart1 = "Frequently Asked ",
  titleBrand = "Questions",
  titlePart2 = "",
  faq1Q = "What is the difference between model drift and execution state drift?",
  faq1A = "Model drift is when real-world distribution diverges from training distribution over time. Execution state drift is when the conditions around the model — schema, pipeline, runtime — change without any model update. Most production AI failures are execution state drift, not model drift.",
  faq2Q = "Can model drift monitoring detect execution state drift?",
  faq2A = "No. Model drift monitoring tracks output and feature distributions relative to a baseline. It detects that something changed but cannot identify whether the change came from the model, the data schema, the preprocessing logic, or the runtime environment.",
  faq3Q = "How do you distinguish execution state drift from model drift in production?",
  faq3A = "By comparing the full execution state of the failing run against the last known-good run. If the model is unchanged but the execution state (schema, pipeline, runtime) differs, the cause is execution state drift. If the execution state is identical but output distributions have shifted, the cause is likely model or data drift.",
  faq4Q = "Why does schema change cause AI failures?",
  faq4A = "AI models expect a specific feature configuration. When upstream schema changes — a column type coerces differently, a field is removed, null rates increase — the model receives inputs that differ from what it was trained on, causing silent degradation without a visible error.",
  faq5Q = "What is preprocessing drift?",
  faq5A = "Preprocessing drift is when the logic applied to data before model training or inference changes between runs — through a normalization update, new imputation rule, or feature parsing change — causing model behavior to shift even though the model and raw data appear unchanged.",
  faq6Q = "How does SynTitan detect execution state drift?",
  faq6A = "SynTitan captures all execution conditions in a Release State at each run. When behavior changes, it diffs the Release State of the failing run against prior states to identify exactly which condition changed — schema, pipeline, or runtime — providing root cause without retraining cycles.",
}: Props) {
  const [openIndex, setOpenIndex] = useState<number>(0)

  const items = [
    { q: faq1Q, a: faq1A },
    { q: faq2Q, a: faq2A },
    { q: faq3Q, a: faq3A },
    { q: faq4Q, a: faq4A },
    { q: faq5Q, a: faq5A },
    { q: faq6Q, a: faq6A },
  ]

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? -1 : i)
  }

  return (
    <div>
      <style>{`
        .s7esd-section {
          width: 100%;
          padding: 80px 0;
          background-color: #ffffff;
          font-family: "DM Sans", sans-serif;
          color: #0f0f0f;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
          box-sizing: border-box;
        }
        .s7esd-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s7esd-container {
          width: 100%;
          padding: 0 16px;
          box-sizing: border-box;
          margin: 0 auto;
        }
        .s7esd-body {
          max-width: 860px;
          margin: 0 auto;
        }
        .s7esd-section-header {
          text-align: center;
          margin-bottom: 32px;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s7esd-title {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          text-wrap: balance;
        }
        .s7esd-title-brand {
          color: #725bea;
        }

        /* Accordion */
        .s7esd-ac-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .s7esd-ac-card {
          border: 1px solid #e6e7e9;
          border-radius: 8px;
          background-color: #ffffff;
          overflow: hidden;
          transition: background-color 0.2s;
        }
        .s7esd-ac-card:hover {
          background-color: #f7f7f7;
        }
        .s7esd-ac-header {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 16px;
          padding: 24px;
          cursor: pointer;
          user-select: none;
          background: transparent;
          border: none;
          width: 100%;
          text-align: left;
        }
        .s7esd-ac-title {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 500;
          color: #0f0f0f;
          line-height: 1.2;
          text-wrap: balance;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s7esd-ac-title-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }
        .s7esd-ac-toggle {
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
        .s7esd-ac-toggle-icon {
          width: 12px;
          height: 12px;
          position: relative;
          flex-shrink: 0;
        }
        .s7esd-ac-toggle-icon::before,
        .s7esd-ac-toggle-icon::after {
          content: '';
          position: absolute;
          background: #9c9c9c;
          border-radius: 1px;
          transition: opacity 0.2s;
        }
        .s7esd-ac-toggle-icon::before {
          width: 10px;
          height: 1.5px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .s7esd-ac-toggle-icon::after {
          width: 1.5px;
          height: 10px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 1;
        }
        .s7esd-ac-card--open .s7esd-ac-toggle-icon::after {
          opacity: 0;
        }
        .s7esd-ac-card--open .s7esd-ac-toggle-icon::before {
          background: #636363;
        }
        .s7esd-ac-body {
          display: none;
          padding: 24px;
          border-top: 1px solid #e6e7e9;
          background: #f7f7f7;
        }
        .s7esd-ac-card--open .s7esd-ac-body {
          display: block;
        }
        .s7esd-ac-answer {
          font-size: 16px;
          color: #636363;
          line-height: 1.7;
          margin: 0;
          text-wrap: pretty;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s7esd-ac-answer strong {
          color: #0f0f0f;
        }

        @container (min-width: 768px) {
          .s7esd-container { padding: 0 32px; }
          .s7esd-title { font-size: 22px; }
          .s7esd-ac-title { font-size: 17px; }
        }
        @container (min-width: 1024px) {
          .s7esd-container { padding: 0 32px; }
          .s7esd-title { font-size: 24px; }
        }
        @container (min-width: 1440px) {
          .s7esd-container { padding: 0 120px; max-width: 1440px; }
          .s7esd-title { font-size: 28px; }
        }
      `}</style>

      <section className="s7esd-section">
        <div className="s7esd-inner">
          <div className="s7esd-container">
            <div className="s7esd-body">
              <div className="s7esd-section-header">
                <h2 className="s7esd-title">
                  {titlePart1}
                  <span className="s7esd-title-brand">{titleBrand}</span>
                  {titlePart2}
                </h2>
              </div>
              <div className="s7esd-ac-list" role="list">
                {items.map((item, i) => (
                  <article
                    key={i}
                    className={`s7esd-ac-card${openIndex === i ? " s7esd-ac-card--open" : ""}`}
                    role="listitem"
                  >
                    <button
                      className="s7esd-ac-header"
                      onClick={() => toggle(i)}
                      aria-expanded={openIndex === i}
                    >
                      <div className="s7esd-ac-title">
                        {i === 5 ? (
                          <span>How does <span className="s7esd-ac-title-product">SynTitan</span> detect execution state drift?</span>
                        ) : (
                          item.q
                        )}
                      </div>
                      <div className="s7esd-ac-toggle" aria-hidden="true">
                        <span className="s7esd-ac-toggle-icon"></span>
                      </div>
                    </button>
                    <div className="s7esd-ac-body">
                      <p className="s7esd-ac-answer">
                        {i === 5 ? (
                          <span><span className="s7esd-ac-title-product">SynTitan</span> captures all execution conditions in a Release State at each run. When behavior changes, it diffs the Release State of the failing run against prior states to identify exactly which condition changed — schema, pipeline, or runtime — providing root cause without retraining cycles.</span>
                        ) : (
                          item.a
                        )}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

addPropertyControls(Section07_FAQ, {
  titlePart1: { type: ControlType.String, title: "Title Part 1", defaultValue: "Frequently Asked " },
  titleBrand: { type: ControlType.String, title: "Title Brand", defaultValue: "Questions" },
  titlePart2: { type: ControlType.String, title: "Title Part 2", defaultValue: "" },
  faq1Q: { type: ControlType.String, title: "FAQ 1 Question", displayTextArea: true, defaultValue: "What is the difference between model drift and execution state drift?" },
  faq1A: { type: ControlType.String, title: "FAQ 1 Answer", displayTextArea: true, defaultValue: "Model drift is when real-world distribution diverges from training distribution over time. Execution state drift is when the conditions around the model — schema, pipeline, runtime — change without any model update. Most production AI failures are execution state drift, not model drift." },
  faq2Q: { type: ControlType.String, title: "FAQ 2 Question", displayTextArea: true, defaultValue: "Can model drift monitoring detect execution state drift?" },
  faq2A: { type: ControlType.String, title: "FAQ 2 Answer", displayTextArea: true, defaultValue: "No. Model drift monitoring tracks output and feature distributions relative to a baseline. It detects that something changed but cannot identify whether the change came from the model, the data schema, the preprocessing logic, or the runtime environment." },
  faq3Q: { type: ControlType.String, title: "FAQ 3 Question", displayTextArea: true, defaultValue: "How do you distinguish execution state drift from model drift in production?" },
  faq3A: { type: ControlType.String, title: "FAQ 3 Answer", displayTextArea: true, defaultValue: "By comparing the full execution state of the failing run against the last known-good run. If the model is unchanged but the execution state (schema, pipeline, runtime) differs, the cause is execution state drift. If the execution state is identical but output distributions have shifted, the cause is likely model or data drift." },
  faq4Q: { type: ControlType.String, title: "FAQ 4 Question", displayTextArea: true, defaultValue: "Why does schema change cause AI failures?" },
  faq4A: { type: ControlType.String, title: "FAQ 4 Answer", displayTextArea: true, defaultValue: "AI models expect a specific feature configuration. When upstream schema changes — a column type coerces differently, a field is removed, null rates increase — the model receives inputs that differ from what it was trained on, causing silent degradation without a visible error." },
  faq5Q: { type: ControlType.String, title: "FAQ 5 Question", displayTextArea: true, defaultValue: "What is preprocessing drift?" },
  faq5A: { type: ControlType.String, title: "FAQ 5 Answer", displayTextArea: true, defaultValue: "Preprocessing drift is when the logic applied to data before model training or inference changes between runs — through a normalization update, new imputation rule, or feature parsing change — causing model behavior to shift even though the model and raw data appear unchanged." },
  faq6Q: { type: ControlType.String, title: "FAQ 6 Question", displayTextArea: true, defaultValue: "How does SynTitan detect execution state drift?" },
  faq6A: { type: ControlType.String, title: "FAQ 6 Answer", displayTextArea: true, defaultValue: "SynTitan captures all execution conditions in a Release State at each run. When behavior changes, it diffs the Release State of the failing run against prior states to identify exactly which condition changed — schema, pipeline, or runtime — providing root cause without retraining cycles." },
})
