// Section04_ExecutionStateDrift.tsx — What execution state drift is (with ESD comparison diagram)
// Framer Code Component
import { addPropertyControls, ControlType } from "framer"

interface Props {
  titlePart1?: string
  titleBrand?: string
  titlePart2?: string
  definitionTitle?: string
  definitionBody?: string
  introText?: string
  bullet1?: string
  bullet2?: string
  bullet3?: string
  bullet4?: string
  closingText?: string
  // Diagram
  diagColLeft?: string
  diagColRight?: string
  diagLeftItem1?: string
  diagLeftItem1Status?: string
  diagLeftItem2?: string
  diagLeftItem2Status?: string
  diagLeftItem3?: string
  diagLeftItem3Status?: string
  diagLeftFootnote?: string
  diagVs?: string
  diagRightItem1?: string
  diagRightItem1Drift?: string
  diagRightItem2?: string
  diagRightItem2Drift?: string
  diagRightItem3?: string
  diagRightItem3Drift?: string
  diagRightFootnote?: string
  diagCaption?: string
}

export default function Section04_ExecutionStateDrift({
  titlePart1 = "What ",
  titleBrand = "execution state drift",
  titlePart2 = " is",
  definitionTitle = "Execution State Drift",
  definitionBody = "A production state where the conditions under which an AI run executes have changed — without any model update — causing behavior to shift in ways that model versioning and drift monitoring cannot explain or trace.",
  introText = "Execution state drift happens when any of the following change between runs:",
  bullet1 = "Schema drift: Upstream data schema changes — a column is removed, a type coerces differently, null rates increase",
  bullet2 = "Pipeline drift: A normalization step, imputation rule, or feature parsing logic is updated",
  bullet3 = "Runtime drift: Library versions, environment variables, or infrastructure configurations change",
  bullet4 = "Access drift: A data source that was reachable in training becomes restricted in production",
  closingText = "None of these appear in a model's version history. All of them change how the model behaves.",
  diagColLeft = "What teams check",
  diagColRight = "What actually changed",
  diagLeftItem1 = "Model weights",
  diagLeftItem1Status = "Unchanged ✓",
  diagLeftItem2 = "Hyperparameters",
  diagLeftItem2Status = "Unchanged ✓",
  diagLeftItem3 = "Model registry",
  diagLeftItem3Status = "No update ✓",
  diagLeftFootnote = "Results were still wrong.",
  diagVs = "vs",
  diagRightItem1 = "Schema",
  diagRightItem1Drift = "Silently drifted",
  diagRightItem2 = "Pipeline",
  diagRightItem2Drift = "Silently drifted",
  diagRightItem3 = "Runtime",
  diagRightItem3Drift = "Silently drifted",
  diagRightFootnote = "Execution state drift",
  diagCaption = "Most drift monitors are not built to detect this.",
}: Props) {
  return (
    <div>
      <style>{`
        .s4esd-section {
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
        .s4esd-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s4esd-container {
          width: 100%;
          padding: 0 16px;
          box-sizing: border-box;
          margin: 0 auto;
        }
        .s4esd-body {
          max-width: 860px;
          margin: 0 auto;
        }
        .s4esd-section-header {
          text-align: center;
          margin-bottom: 32px;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s4esd-title {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          text-wrap: balance;
        }
        .s4esd-title-brand {
          color: #725bea;
        }
        .s4esd-banner {
          padding: 16px 24px;
          border-top: 1px solid #e6e7e9;
          border-bottom: 1px solid #e6e7e9;
          background-color: #f7f7f7;
          margin: 0 0 24px;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s4esd-banner-title {
          font-size: 18px;
          font-weight: 700;
          color: #0f0f0f;
          margin-bottom: 8px;
          line-height: 1.2;
        }
        .s4esd-banner-body {
          font-size: 16px;
          color: #636363;
          line-height: 1.7;
          text-wrap: pretty;
          word-break: keep-all;
          overflow-wrap: break-word;
          margin: 0;
        }
        .s4esd-prose-body {
          font-size: 16px;
          color: #636363;
          line-height: 1.7;
          margin-bottom: 16px;
          text-wrap: pretty;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s4esd-bullet-list {
          list-style: none;
          padding: 0;
          margin: 0 0 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .s4esd-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 16px;
          line-height: 1.5;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s4esd-bullet-icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          margin-top: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0e824c;
          font-weight: 700;
          font-size: 14px;
        }
        .s4esd-bullet-item strong {
          color: #0f0f0f;
          font-weight: 600;
        }
        .s4esd-closing {
          font-size: 16px;
          color: #636363;
          line-height: 1.7;
          margin-top: 24px;
          text-wrap: pretty;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        /* ESD Comparison Diagram */
        .s4esd-diag {
          margin-top: 48px;
        }
        .s4esd-diag-window {
          background: #ffffff;
          border-radius: 18px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06);
          overflow: hidden;
        }
        .s4esd-diag-titlebar {
          background: linear-gradient(180deg, #f0f0f0 0%, #e4e4e4 100%);
          height: 36px;
          display: flex;
          align-items: center;
          padding: 0 14px;
          gap: 8px;
          border-bottom: 1px solid #d0d0d0;
        }
        .s4esd-diag-dot { width: 12px; height: 12px; border-radius: 50%; }
        .s4esd-diag-dot--close { background: #ff5f57; }
        .s4esd-diag-dot--min { background: #ffbd2e; }
        .s4esd-diag-dot--max { background: #28ca41; }
        .s4esd-diag-content {
          background: #ffffff;
          padding: 32px;
        }
        .s4esd-diag-compare {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 24px;
          align-items: start;
        }
        .s4esd-diag-col-header {
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          text-align: center;
          margin-bottom: 12px;
        }
        .s4esd-diag-col-header--left {
          background: #f2f2f2;
          color: #0f0f0f;
          border: 1px solid #e6e7e9;
        }
        .s4esd-diag-col-header--right {
          background: #fff0f0;
          color: #ff3030;
          border: 1px solid #ffcccc;
        }
        .s4esd-diag-vs {
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 8px;
          font-size: 14px;
          font-weight: 500;
          color: #9c9c9c;
          min-width: 32px;
        }
        .s4esd-diag-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          border-radius: 8px;
          margin-bottom: 8px;
        }
        .s4esd-diag-item:last-of-type { margin-bottom: 0; }
        .s4esd-diag-item--left {
          background: #ffffff;
          border: 1px solid #e6e7e9;
        }
        .s4esd-diag-item-label--left {
          font-size: 14px;
          font-weight: 500;
          color: #0f0f0f;
        }
        .s4esd-diag-item-status {
          font-size: 12px;
          font-weight: 500;
          color: #0e824c;
          white-space: nowrap;
        }
        .s4esd-diag-item--right {
          background: #fff5f5;
          border: 1px solid #ffcccc;
          flex-direction: column;
          align-items: flex-start;
          gap: 2px;
        }
        .s4esd-diag-item-label--right {
          font-size: 14px;
          font-weight: 600;
          color: #ff3030;
        }
        .s4esd-diag-item-drift {
          font-size: 12px;
          font-weight: 400;
          color: #ff6b6b;
        }
        .s4esd-diag-footnote {
          margin-top: 12px;
          font-size: 12px;
          color: #9c9c9c;
          font-style: italic;
          text-align: center;
          padding: 8px 0;
          border-top: 1px dashed #e6e7e9;
        }
        .s4esd-diag-footnote--right {
          color: #ff3030;
          font-weight: 600;
          font-style: normal;
        }
        .s4esd-diag-caption {
          margin-top: 16px;
          text-align: center;
          font-size: 12px;
          color: #9c9c9c;
        }

        @container (min-width: 768px) {
          .s4esd-container { padding: 0 32px; }
          .s4esd-title { font-size: 22px; }
        }
        @container (min-width: 1024px) {
          .s4esd-container { padding: 0 32px; }
          .s4esd-title { font-size: 24px; }
        }
        @container (min-width: 1440px) {
          .s4esd-container { padding: 0 120px; max-width: 1440px; }
          .s4esd-title { font-size: 28px; }
        }
        @container (max-width: 639px) {
          .s4esd-diag-compare { grid-template-columns: 1fr; gap: 12px; }
          .s4esd-diag-vs { padding: 0; justify-content: flex-start; }
          .s4esd-diag-content { padding: 16px; }
        }
      `}</style>

      <section className="s4esd-section">
        <div className="s4esd-inner">
          <div className="s4esd-container">
            <div className="s4esd-body">
              <div className="s4esd-section-header">
                <h2 className="s4esd-title">
                  {titlePart1}
                  <span className="s4esd-title-brand">{titleBrand}</span>
                  {titlePart2}
                </h2>
              </div>
              <div className="s4esd-banner" role="note" aria-label="Definition: Execution State Drift">
                <p className="s4esd-banner-title">{definitionTitle}</p>
                <p className="s4esd-banner-body">{definitionBody}</p>
              </div>
              <p className="s4esd-prose-body">{introText}</p>
              <ul className="s4esd-bullet-list" role="list">
                <li className="s4esd-bullet-item">
                  <span className="s4esd-bullet-icon" aria-hidden="true">✓</span>
                  <span>
                    <strong>Schema drift:</strong>{" "}
                    {bullet1.replace("Schema drift: ", "")}
                  </span>
                </li>
                <li className="s4esd-bullet-item">
                  <span className="s4esd-bullet-icon" aria-hidden="true">✓</span>
                  <span>
                    <strong>Pipeline drift:</strong>{" "}
                    {bullet2.replace("Pipeline drift: ", "")}
                  </span>
                </li>
                <li className="s4esd-bullet-item">
                  <span className="s4esd-bullet-icon" aria-hidden="true">✓</span>
                  <span>
                    <strong>Runtime drift:</strong>{" "}
                    {bullet3.replace("Runtime drift: ", "")}
                  </span>
                </li>
                <li className="s4esd-bullet-item">
                  <span className="s4esd-bullet-icon" aria-hidden="true">✓</span>
                  <span>
                    <strong>Access drift:</strong>{" "}
                    {bullet4.replace("Access drift: ", "")}
                  </span>
                </li>
              </ul>
              <p className="s4esd-closing">{closingText}</p>

              {/* ESD Comparison Diagram */}
              <div className="s4esd-diag">
                <div className="s4esd-diag-window">
                  <div className="s4esd-diag-titlebar">
                    <span className="s4esd-diag-dot s4esd-diag-dot--close"></span>
                    <span className="s4esd-diag-dot s4esd-diag-dot--min"></span>
                    <span className="s4esd-diag-dot s4esd-diag-dot--max"></span>
                  </div>
                  <div className="s4esd-diag-content">
                    <div className="s4esd-diag-compare">

                      <div>
                        <div className="s4esd-diag-col-header s4esd-diag-col-header--left">{diagColLeft}</div>
                        <div className="s4esd-diag-item s4esd-diag-item--left">
                          <span className="s4esd-diag-item-label--left">{diagLeftItem1}</span>
                          <span className="s4esd-diag-item-status">{diagLeftItem1Status}</span>
                        </div>
                        <div className="s4esd-diag-item s4esd-diag-item--left">
                          <span className="s4esd-diag-item-label--left">{diagLeftItem2}</span>
                          <span className="s4esd-diag-item-status">{diagLeftItem2Status}</span>
                        </div>
                        <div className="s4esd-diag-item s4esd-diag-item--left">
                          <span className="s4esd-diag-item-label--left">{diagLeftItem3}</span>
                          <span className="s4esd-diag-item-status">{diagLeftItem3Status}</span>
                        </div>
                        <p className="s4esd-diag-footnote">{diagLeftFootnote}</p>
                      </div>

                      <div className="s4esd-diag-vs">{diagVs}</div>

                      <div>
                        <div className="s4esd-diag-col-header s4esd-diag-col-header--right">{diagColRight}</div>
                        <div className="s4esd-diag-item s4esd-diag-item--right">
                          <span className="s4esd-diag-item-label--right">{diagRightItem1}</span>
                          <span className="s4esd-diag-item-drift">{diagRightItem1Drift}</span>
                        </div>
                        <div className="s4esd-diag-item s4esd-diag-item--right">
                          <span className="s4esd-diag-item-label--right">{diagRightItem2}</span>
                          <span className="s4esd-diag-item-drift">{diagRightItem2Drift}</span>
                        </div>
                        <div className="s4esd-diag-item s4esd-diag-item--right">
                          <span className="s4esd-diag-item-label--right">{diagRightItem3}</span>
                          <span className="s4esd-diag-item-drift">{diagRightItem3Drift}</span>
                        </div>
                        <p className="s4esd-diag-footnote s4esd-diag-footnote--right">{diagRightFootnote}</p>
                      </div>

                    </div>
                    <p className="s4esd-diag-caption">{diagCaption}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

addPropertyControls(Section04_ExecutionStateDrift, {
  titlePart1: { type: ControlType.String, title: "Title Part 1", defaultValue: "What " },
  titleBrand: { type: ControlType.String, title: "Title Brand", defaultValue: "execution state drift" },
  titlePart2: { type: ControlType.String, title: "Title Part 2", defaultValue: " is" },
  definitionTitle: { type: ControlType.String, title: "Definition Title", defaultValue: "Execution State Drift" },
  definitionBody: {
    type: ControlType.String,
    title: "Definition Body",
    displayTextArea: true,
    defaultValue: "A production state where the conditions under which an AI run executes have changed — without any model update — causing behavior to shift in ways that model versioning and drift monitoring cannot explain or trace.",
  },
  introText: {
    type: ControlType.String,
    title: "Intro Text",
    defaultValue: "Execution state drift happens when any of the following change between runs:",
  },
  bullet1: {
    type: ControlType.String,
    title: "Bullet 1",
    displayTextArea: true,
    defaultValue: "Schema drift: Upstream data schema changes — a column is removed, a type coerces differently, null rates increase",
  },
  bullet2: {
    type: ControlType.String,
    title: "Bullet 2",
    displayTextArea: true,
    defaultValue: "Pipeline drift: A normalization step, imputation rule, or feature parsing logic is updated",
  },
  bullet3: {
    type: ControlType.String,
    title: "Bullet 3",
    displayTextArea: true,
    defaultValue: "Runtime drift: Library versions, environment variables, or infrastructure configurations change",
  },
  bullet4: {
    type: ControlType.String,
    title: "Bullet 4",
    displayTextArea: true,
    defaultValue: "Access drift: A data source that was reachable in training becomes restricted in production",
  },
  closingText: {
    type: ControlType.String,
    title: "Closing Text",
    displayTextArea: true,
    defaultValue: "None of these appear in a model's version history. All of them change how the model behaves.",
  },
  diagColLeft: { type: ControlType.String, title: "Diag Col Left", defaultValue: "What teams check" },
  diagColRight: { type: ControlType.String, title: "Diag Col Right", defaultValue: "What actually changed" },
  diagLeftItem1: { type: ControlType.String, title: "Left Item 1", defaultValue: "Model weights" },
  diagLeftItem1Status: { type: ControlType.String, title: "Left Item 1 Status", defaultValue: "Unchanged ✓" },
  diagLeftItem2: { type: ControlType.String, title: "Left Item 2", defaultValue: "Hyperparameters" },
  diagLeftItem2Status: { type: ControlType.String, title: "Left Item 2 Status", defaultValue: "Unchanged ✓" },
  diagLeftItem3: { type: ControlType.String, title: "Left Item 3", defaultValue: "Model registry" },
  diagLeftItem3Status: { type: ControlType.String, title: "Left Item 3 Status", defaultValue: "No update ✓" },
  diagLeftFootnote: { type: ControlType.String, title: "Left Footnote", defaultValue: "Results were still wrong." },
  diagVs: { type: ControlType.String, title: "VS Text", defaultValue: "vs" },
  diagRightItem1: { type: ControlType.String, title: "Right Item 1", defaultValue: "Schema" },
  diagRightItem1Drift: { type: ControlType.String, title: "Right Item 1 Drift", defaultValue: "Silently drifted" },
  diagRightItem2: { type: ControlType.String, title: "Right Item 2", defaultValue: "Pipeline" },
  diagRightItem2Drift: { type: ControlType.String, title: "Right Item 2 Drift", defaultValue: "Silently drifted" },
  diagRightItem3: { type: ControlType.String, title: "Right Item 3", defaultValue: "Runtime" },
  diagRightItem3Drift: { type: ControlType.String, title: "Right Item 3 Drift", defaultValue: "Silently drifted" },
  diagRightFootnote: { type: ControlType.String, title: "Right Footnote", defaultValue: "Execution state drift" },
  diagCaption: { type: ControlType.String, title: "Diagram Caption", defaultValue: "Most drift monitors are not built to detect this." },
})
