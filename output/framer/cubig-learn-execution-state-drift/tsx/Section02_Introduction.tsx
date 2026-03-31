// Section02_Introduction.tsx — Introduction / The Problem
// Framer Code Component
import { addPropertyControls, ControlType } from "framer"

interface Props {
  lead?: string
  body1?: string
  body2?: string
  bannerText?: string
}

export default function Section02_Introduction({
  lead = "Your AI was accurate last month. This month it isn't. The model didn't change. The data did.",
  body1 = "Production AI degraded. Scores shifted. Decisions became inconsistent. The team did what teams always do: they checked the model. Nothing had changed. The weights were the same. The hyperparameters were the same. The model registry showed no update.",
  body2 = "But the results were still wrong. The issue was not model drift. It was execution state drift — and most monitoring tools are not built to detect it.",
  bannerText = "Most production AI failures are blamed on model drift. Most of them are actually caused by changes in the execution environment — schema, pipeline, runtime — that no model registry or drift monitor will show you.",
}: Props) {
  return (
    <div>
      <style>{`
        .s2esd-section {
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
        .s2esd-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s2esd-container {
          width: 100%;
          padding: 0 16px;
          box-sizing: border-box;
          margin: 0 auto;
        }
        .s2esd-body {
          max-width: 860px;
          margin: 0 auto;
        }
        .s2esd-prose-lead {
          font-size: 20px;
          font-weight: 600;
          color: #0f0f0f;
          line-height: 1.5;
          margin-bottom: 24px;
          text-wrap: pretty;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s2esd-prose-body {
          font-size: 16px;
          color: #636363;
          line-height: 1.7;
          margin-bottom: 16px;
          text-wrap: pretty;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s2esd-prose-body strong {
          color: #0f0f0f;
          font-weight: 600;
        }
        .s2esd-banner {
          padding: 16px 24px;
          border-top: 1px solid #e6e7e9;
          border-bottom: 1px solid #e6e7e9;
          background-color: #f7f7f7;
          font-size: 14px;
          line-height: 1.7;
          text-align: left;
          word-break: keep-all;
          overflow-wrap: break-word;
          margin: 32px 0;
        }
        .s2esd-banner-text {
          font-size: 16px;
          color: #636363;
          line-height: 1.7;
          text-wrap: pretty;
          word-break: keep-all;
          overflow-wrap: break-word;
          margin: 0;
        }
        .s2esd-banner-text strong {
          color: #0f0f0f;
        }

        @container (min-width: 768px) {
          .s2esd-container { padding: 0 32px; }
        }
        @container (min-width: 1024px) {
          .s2esd-container { padding: 0 32px; }
        }
        @container (min-width: 1440px) {
          .s2esd-container { padding: 0 120px; max-width: 1440px; }
        }
      `}</style>

      <section className="s2esd-section">
        <div className="s2esd-inner">
          <div className="s2esd-container">
            <div className="s2esd-body">
              <p className="s2esd-prose-lead">{lead}</p>
              <p className="s2esd-prose-body">{body1}</p>
              <p className="s2esd-prose-body">
                {body2.split("execution state drift").map((part, i, arr) =>
                  i < arr.length - 1 ? (
                    <span key={i}>{part}<strong>execution state drift</strong></span>
                  ) : (
                    <span key={i}>{part}</span>
                  )
                )}
              </p>
              <div className="s2esd-banner" role="note">
                <p className="s2esd-banner-text">
                  Most production AI failures are blamed on model drift. Most of them are actually caused by changes in the execution environment — <strong>schema, pipeline, runtime</strong> — that no model registry or drift monitor will show you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

addPropertyControls(Section02_Introduction, {
  lead: {
    type: ControlType.String,
    title: "Lead",
    displayTextArea: true,
    defaultValue:
      "Your AI was accurate last month. This month it isn't. The model didn't change. The data did.",
  },
  body1: {
    type: ControlType.String,
    title: "Body 1",
    displayTextArea: true,
    defaultValue:
      "Production AI degraded. Scores shifted. Decisions became inconsistent. The team did what teams always do: they checked the model. Nothing had changed. The weights were the same. The hyperparameters were the same. The model registry showed no update.",
  },
  body2: {
    type: ControlType.String,
    title: "Body 2",
    displayTextArea: true,
    defaultValue:
      "But the results were still wrong. The issue was not model drift. It was execution state drift — and most monitoring tools are not built to detect it.",
  },
  bannerText: {
    type: ControlType.String,
    title: "Banner Text",
    displayTextArea: true,
    defaultValue:
      "Most production AI failures are blamed on model drift. Most of them are actually caused by changes in the execution environment — schema, pipeline, runtime — that no model registry or drift monitor will show you.",
  },
})
