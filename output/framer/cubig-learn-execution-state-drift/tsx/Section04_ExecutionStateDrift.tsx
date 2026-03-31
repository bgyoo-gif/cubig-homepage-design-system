// Section04_ExecutionStateDrift.tsx — What execution state drift is
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
})
