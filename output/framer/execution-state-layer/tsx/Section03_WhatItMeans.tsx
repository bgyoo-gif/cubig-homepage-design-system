// Section03_WhatItMeans.tsx — Execution State Layer "What it means"
// Framer Code Component
import { addPropertyControls, ControlType } from "framer"

interface Props {
  sectionTitle?: string
  body1?: string
  body2?: string
}

export default function Section03_WhatItMeans({
  sectionTitle = "What it means",
  body1 = "In traditional AI systems, results often change without a clear explanation due to data updates, schema changes, pipeline modifications, or environment differences.",
  body2 = "The Execution State Layer resolves this by ensuring that every AI run is tied to a specific, immutable data state. This transforms AI execution from non-deterministic and opaque into reproducible and explainable.",
}: Props) {
  return (
    <div>
      <style>{`
        .s3-section {
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
        .s3-inner { width: 100%; container-type: inline-size; }
        .s3-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s3-header {
          margin-bottom: 32px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s3-header__title {
          font-family: "DM Sans", sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: balance;
        }
        .s3-body {
          font-size: 16px;
          color: #636363;
          line-height: 1.7;
          text-wrap: pretty;
        }
        .s3-body p + p { margin-top: 16px; }
        .s3-body strong { color: #0f0f0f; font-weight: 600; }

        @container (min-width: 768px) {
          .s3-container { padding: 0 32px; }
          .s3-header__title { font-size: 28px; }
        }
        @container (min-width: 1024px) {
          .s3-container { padding: 0 32px; }
          .s3-header__title { font-size: 32px; }
        }
        @container (min-width: 1440px) {
          .s3-container { padding: 0 120px; max-width: 1440px; }
          .s3-header__title { font-size: 36px; }
        }
      `}</style>

      <section className="s3-section">
        <div className="s3-inner">
          <div className="s3-container">
            <div className="s3-header">
              <h2 className="s3-header__title">{sectionTitle}</h2>
            </div>
            <div className="s3-body">
              <p>{body1}</p>
              <p>{body2}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

addPropertyControls(Section03_WhatItMeans, {
  sectionTitle: { type: ControlType.String, title: "Section Title", defaultValue: "What it means" },
  body1: { type: ControlType.String, title: "Body 1", displayTextArea: true, defaultValue: "In traditional AI systems, results often change without a clear explanation due to data updates, schema changes, pipeline modifications, or environment differences." },
  body2: { type: ControlType.String, title: "Body 2", displayTextArea: true, defaultValue: "The Execution State Layer resolves this by ensuring that every AI run is tied to a specific, immutable data state. This transforms AI execution from non-deterministic and opaque into reproducible and explainable." },
})
