// Section07_AIReadyData.tsx — Relationship to AI-Ready Data
// Framer Code Component
import { addPropertyControls, ControlType } from "framer"

interface Props {
  sectionTitlePrefix?: string
  sectionTitleBrand?: string
  bodyText?: string
  dim1?: string
  dim2?: string
  dim3?: string
  dim4?: string
  dim5?: string
  dim6?: string
}

export default function Section07_AIReadyData({
  sectionTitlePrefix = "Relationship to ",
  sectionTitleBrand = "AI-Ready Data",
  bodyText = "AI-ready data ensures that data is usable, reliable, and privacy-safe. The Execution State Layer extends this by ensuring that AI-ready data is also reproducible in execution. Data readiness is assessed across six dimensions — Privacy, Integrity, Traceability, Contextuality, Operational Reliability, and Conciseness — and each dimension must be verifiably maintained at every execution.",
  dim1 = "Privacy",
  dim2 = "Integrity",
  dim3 = "Traceability",
  dim4 = "Contextuality",
  dim5 = "Operational Reliability",
  dim6 = "Conciseness",
}: Props) {
  const dims = [dim1, dim2, dim3, dim4, dim5, dim6]

  return (
    <div>
      <style>{`
        .s7-section {
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
        .s7-inner { width: 100%; container-type: inline-size; }
        .s7-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s7-header {
          margin-bottom: 32px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s7-header__title {
          font-size: 24px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: balance;
        }
        .s7-header__title-brand { color: #725bea; }
        .s7-body {
          font-size: 16px;
          color: #636363;
          line-height: 1.7;
          text-wrap: pretty;
          margin-bottom: 0;
        }
        .s7-body strong { color: #0f0f0f; font-weight: 600; }
        .s7-bullet {
          list-style: none;
          padding: 0;
          margin: 24px 0 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .s7-bullet__item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 16px;
          line-height: 1.5;
          color: #0f0f0f;
        }
        .s7-bullet__icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          margin-top: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .s7-bullet__icon::before {
          content: "•";
          color: #725bea;
          font-size: 20px;
          line-height: 1;
        }

        @container (min-width: 768px) {
          .s7-container { padding: 0 32px; }
          .s7-header__title { font-size: 28px; }
        }
        @container (min-width: 1024px) {
          .s7-container { padding: 0 32px; }
          .s7-header__title { font-size: 32px; }
        }
        @container (min-width: 1440px) {
          .s7-container { padding: 0 120px; max-width: 1440px; }
          .s7-header__title { font-size: 36px; }
        }
      `}</style>

      <section className="s7-section">
        <div className="s7-inner">
          <div className="s7-container">
            <div className="s7-header">
              <h2 className="s7-header__title">
                {sectionTitlePrefix}
                <span className="s7-header__title-brand">{sectionTitleBrand}</span>
              </h2>
            </div>
            <div className="s7-body">
              <p>{bodyText}</p>
            </div>
            <ul className="s7-bullet">
              {dims.map((d, i) => (
                <li key={i} className="s7-bullet__item">
                  <span className="s7-bullet__icon"></span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

addPropertyControls(Section07_AIReadyData, {
  sectionTitlePrefix: { type: ControlType.String, title: "Title Prefix", defaultValue: "Relationship to " },
  sectionTitleBrand: { type: ControlType.String, title: "Title Brand", defaultValue: "AI-Ready Data" },
  bodyText: { type: ControlType.String, title: "Body Text", displayTextArea: true, defaultValue: "AI-ready data ensures that data is usable, reliable, and privacy-safe. The Execution State Layer extends this by ensuring that AI-ready data is also reproducible in execution. Data readiness is assessed across six dimensions — Privacy, Integrity, Traceability, Contextuality, Operational Reliability, and Conciseness — and each dimension must be verifiably maintained at every execution." },
  dim1: { type: ControlType.String, title: "Dim 1", defaultValue: "Privacy" },
  dim2: { type: ControlType.String, title: "Dim 2", defaultValue: "Integrity" },
  dim3: { type: ControlType.String, title: "Dim 3", defaultValue: "Traceability" },
  dim4: { type: ControlType.String, title: "Dim 4", defaultValue: "Contextuality" },
  dim5: { type: ControlType.String, title: "Dim 5", defaultValue: "Operational Reliability" },
  dim6: { type: ControlType.String, title: "Dim 6", defaultValue: "Conciseness" },
})
