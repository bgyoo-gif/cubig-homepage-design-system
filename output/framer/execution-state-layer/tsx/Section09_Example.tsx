// Section09_Example.tsx — Example section
// Framer Code Component
import { addPropertyControls, ControlType } from "framer"

interface Props {
  sectionTitle?: string
  body1?: string
  body2?: string
  check1?: string
  check2?: string
  check3?: string
}

export default function Section09_Example({
  sectionTitle = "Example",
  body1 = "A customer analytics model produces different results week to week.",
  body2 = "Without ESL, it is unclear whether the change came from the model, the data, or the pipeline. With ESL, each run is linked to a specific data version, previous results can be exactly reproduced, and differences can be precisely explained.",
  check1 = "Each run is linked to a specific data version",
  check2 = "Previous results can be exactly reproduced",
  check3 = "Differences can be precisely explained",
}: Props) {
  return (
    <div>
      <style>{`
        .s9-section {
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
        .s9-inner { width: 100%; container-type: inline-size; }
        .s9-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s9-header {
          margin-bottom: 32px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s9-header__title {
          font-size: 24px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: balance;
        }
        .s9-body {
          font-size: 16px;
          color: #636363;
          line-height: 1.7;
          text-wrap: pretty;
        }
        .s9-body p + p { margin-top: 16px; }
        .s9-body strong { color: #0f0f0f; font-weight: 600; }
        .s9-bullet {
          list-style: none;
          padding: 0;
          margin: 24px 0 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .s9-bullet__item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 16px;
          line-height: 1.5;
          color: #0f0f0f;
        }
        .s9-bullet__icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          margin-top: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .s9-bullet__icon::before {
          content: "✓";
          color: #0e824c;
          font-weight: 700;
          font-size: 16px;
          line-height: 1;
        }

        @container (min-width: 768px) {
          .s9-container { padding: 0 32px; }
          .s9-header__title { font-size: 28px; }
        }
        @container (min-width: 1024px) {
          .s9-container { padding: 0 32px; }
          .s9-header__title { font-size: 32px; }
        }
        @container (min-width: 1440px) {
          .s9-container { padding: 0 120px; max-width: 1440px; }
          .s9-header__title { font-size: 36px; }
        }
      `}</style>

      <section className="s9-section">
        <div className="s9-inner">
          <div className="s9-container">
            <div className="s9-header">
              <h2 className="s9-header__title">{sectionTitle}</h2>
            </div>
            <div className="s9-body">
              <p>{body1}</p>
              <p>{body2}</p>
            </div>
            <ul className="s9-bullet">
              {[check1, check2, check3].map((c, i) => (
                <li key={i} className="s9-bullet__item">
                  <span className="s9-bullet__icon"></span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

addPropertyControls(Section09_Example, {
  sectionTitle: { type: ControlType.String, title: "Section Title", defaultValue: "Example" },
  body1: { type: ControlType.String, title: "Body 1", displayTextArea: true, defaultValue: "A customer analytics model produces different results week to week." },
  body2: { type: ControlType.String, title: "Body 2", displayTextArea: true, defaultValue: "Without ESL, it is unclear whether the change came from the model, the data, or the pipeline. With ESL, each run is linked to a specific data version, previous results can be exactly reproduced, and differences can be precisely explained." },
  check1: { type: ControlType.String, title: "Check 1", defaultValue: "Each run is linked to a specific data version" },
  check2: { type: ControlType.String, title: "Check 2", defaultValue: "Previous results can be exactly reproduced" },
  check3: { type: ControlType.String, title: "Check 3", defaultValue: "Differences can be precisely explained" },
})
