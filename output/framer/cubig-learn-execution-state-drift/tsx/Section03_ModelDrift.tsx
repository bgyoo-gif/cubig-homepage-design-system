// Section03_ModelDrift.tsx — What model drift is and what it misses
// Framer Code Component
import { addPropertyControls, ControlType } from "framer"

interface Props {
  titlePart1?: string
  titleBrand?: string
  titlePart2?: string
  description?: string
  bodyText?: string
  // Table headers
  tableHeader1?: string
  tableHeader2?: string
  // Table rows (4 rows x 2 cols)
  row1col1?: string
  row1col2?: string
  row2col1?: string
  row2col2?: string
  row3col1?: string
  row3col2?: string
  row4col1?: string
  row4col2?: string
}

export default function Section03_ModelDrift({
  titlePart1 = "What ",
  titleBrand = "model drift",
  titlePart2 = " is — and what it misses",
  description = "Model drift is the degradation of model performance over time as the real-world distribution it was trained on diverges from the distribution it encounters in production.",
  bodyText = "But model drift monitoring has a fundamental blind spot: it tracks the model's statistical output relative to a reference baseline. It does not track why the inputs changed, or whether the change came from the data, the pipeline, the runtime, or some combination.",
  tableHeader1 = "What model drift monitoring tracks",
  tableHeader2 = "What it misses",
  row1col1 = "Output distribution shift",
  row1col2 = "Why the outputs shifted",
  row2col1 = "Feature distribution change",
  row2col2 = "Whether the feature calculation logic changed",
  row3col1 = "Model version",
  row3col2 = "Preprocessing version, schema version, runtime version",
  row4col1 = "Prediction confidence",
  row4col2 = "Which execution condition caused the shift",
}: Props) {
  return (
    <div>
      <style>{`
        .s3esd-section {
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
        .s3esd-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s3esd-container {
          width: 100%;
          padding: 0 16px;
          box-sizing: border-box;
          margin: 0 auto;
        }
        .s3esd-body {
          max-width: 860px;
          margin: 0 auto;
        }
        .s3esd-section-header {
          text-align: center;
          margin-bottom: 48px;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s3esd-title {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0 0 16px;
          text-wrap: balance;
        }
        .s3esd-title-brand {
          color: #725bea;
        }
        .s3esd-description {
          font-size: 18px;
          color: #636363;
          line-height: 1.7;
          max-width: 100%;
          margin: 0;
          text-wrap: pretty;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s3esd-prose-body {
          font-size: 16px;
          color: #636363;
          line-height: 1.7;
          margin-bottom: 16px;
          text-wrap: pretty;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s3esd-prose-body strong {
          color: #0f0f0f;
          font-weight: 600;
        }
        .s3esd-table-wrap {
          overflow-x: auto;
          border-radius: 24px;
          border: 1px solid #e6e7e9;
          margin: 32px 0;
        }
        .s3esd-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
        }
        .s3esd-table thead th {
          font-family: "Fragment Mono", monospace;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #0f0f0f;
          font-weight: 600;
          padding: 12px 16px;
          border-bottom: 2px solid #e6e7e9;
          text-align: left;
          background: #f7f7f7;
        }
        .s3esd-table tbody td {
          padding: 14px 16px;
          border-bottom: 1px solid #e6e7e9;
          color: #0f0f0f;
          vertical-align: top;
          line-height: 1.5;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s3esd-table tbody tr:last-child td {
          border-bottom: none;
        }
        .s3esd-table tbody td:first-child {
          font-weight: 600;
        }
        .s3esd-table tbody tr:hover td {
          background: #f7f7f7;
        }

        @container (min-width: 768px) {
          .s3esd-container { padding: 0 32px; }
          .s3esd-title { font-size: 22px; }
        }
        @container (min-width: 1024px) {
          .s3esd-container { padding: 0 32px; }
          .s3esd-title { font-size: 24px; }
          .s3esd-description { max-width: 720px; }
        }
        @container (min-width: 1440px) {
          .s3esd-container { padding: 0 120px; max-width: 1440px; }
          .s3esd-title { font-size: 28px; }
          .s3esd-description { max-width: 860px; }
        }
      `}</style>

      <section className="s3esd-section">
        <div className="s3esd-inner">
          <div className="s3esd-container">
            <div className="s3esd-body">
              <div className="s3esd-section-header">
                <h2 className="s3esd-title">
                  {titlePart1}
                  <span className="s3esd-title-brand">{titleBrand}</span>
                  {titlePart2}
                </h2>
                <p className="s3esd-description">{description}</p>
              </div>
              <p className="s3esd-prose-body">
                But model drift monitoring has a fundamental blind spot: it tracks the model's statistical output relative to a reference baseline. It does not track <strong>why the inputs changed</strong>, or whether the change came from the data, the pipeline, the runtime, or some combination.
              </p>
              <div className="s3esd-table-wrap">
                <table className="s3esd-table" aria-label="Model drift monitoring comparison">
                  <thead>
                    <tr>
                      <th>{tableHeader1}</th>
                      <th>{tableHeader2}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{row1col1}</td>
                      <td>{row1col2}</td>
                    </tr>
                    <tr>
                      <td>{row2col1}</td>
                      <td>{row2col2}</td>
                    </tr>
                    <tr>
                      <td>{row3col1}</td>
                      <td>{row3col2}</td>
                    </tr>
                    <tr>
                      <td>{row4col1}</td>
                      <td>{row4col2}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

addPropertyControls(Section03_ModelDrift, {
  titlePart1: { type: ControlType.String, title: "Title Part 1", defaultValue: "What " },
  titleBrand: { type: ControlType.String, title: "Title Brand", defaultValue: "model drift" },
  titlePart2: { type: ControlType.String, title: "Title Part 2", defaultValue: " is — and what it misses" },
  description: {
    type: ControlType.String,
    title: "Description",
    displayTextArea: true,
    defaultValue: "Model drift is the degradation of model performance over time as the real-world distribution it was trained on diverges from the distribution it encounters in production.",
  },
  bodyText: {
    type: ControlType.String,
    title: "Body Text",
    displayTextArea: true,
    defaultValue: "But model drift monitoring has a fundamental blind spot: it tracks the model's statistical output relative to a reference baseline. It does not track why the inputs changed, or whether the change came from the data, the pipeline, the runtime, or some combination.",
  },
  tableHeader1: { type: ControlType.String, title: "Table Header 1", defaultValue: "What model drift monitoring tracks" },
  tableHeader2: { type: ControlType.String, title: "Table Header 2", defaultValue: "What it misses" },
  row1col1: { type: ControlType.String, title: "Row 1 Col 1", defaultValue: "Output distribution shift" },
  row1col2: { type: ControlType.String, title: "Row 1 Col 2", defaultValue: "Why the outputs shifted" },
  row2col1: { type: ControlType.String, title: "Row 2 Col 1", defaultValue: "Feature distribution change" },
  row2col2: { type: ControlType.String, title: "Row 2 Col 2", defaultValue: "Whether the feature calculation logic changed" },
  row3col1: { type: ControlType.String, title: "Row 3 Col 1", defaultValue: "Model version" },
  row3col2: { type: ControlType.String, title: "Row 3 Col 2", defaultValue: "Preprocessing version, schema version, runtime version" },
  row4col1: { type: ControlType.String, title: "Row 4 Col 1", defaultValue: "Prediction confidence" },
  row4col2: { type: ControlType.String, title: "Row 4 Col 2", defaultValue: "Which execution condition caused the shift" },
})
