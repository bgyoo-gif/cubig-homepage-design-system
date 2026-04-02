// Section05_IncidentResponse.tsx — Why this distinction matters for incident response
// Framer Code Component
import { addPropertyControls, ControlType } from "framer"

interface Props {
  titlePart1?: string
  titleBrand?: string
  titlePart2?: string
  description?: string
  bodyText1?: string
  // Table headers
  tableHeader1?: string
  tableHeader2?: string
  tableHeader3?: string
  // Table rows (3 rows x 3 cols)
  row1col1?: string
  row1col2?: string
  row1col3?: string
  row2col1?: string
  row2col2?: string
  row2col3?: string
  row3col1?: string
  row3col2?: string
  row3col3?: string
  // Closing body text
  bodyText2?: string
}

export default function Section05_IncidentResponse({
  titlePart1 = "Why this distinction matters for ",
  titleBrand = "incident response",
  titlePart2 = "",
  description = "When a production incident occurs, the first question is: what changed?",
  bodyText1 = "If the answer is model drift, the response is retraining. If the answer is execution state drift, retraining is the wrong response — and may make things worse.",
  tableHeader1 = "Incident type",
  tableHeader2 = "Correct response",
  tableHeader3 = "Wrong response",
  row1col1 = "Model drift (distribution shift in real world)",
  row1col2 = "Retrain with updated data",
  row1col3 = "Look for pipeline issues",
  row2col1 = "Execution state drift (schema, pipeline, runtime change)",
  row2col2 = "Identify which execution condition changed, restore or adjust",
  row2col3 = "Retrain — it won't fix the root cause",
  row3col1 = "Both simultaneously",
  row3col2 = "Diff execution states to isolate layer, then address each",
  row3col3 = "Treat as single issue",
  bodyText2 = "The majority of production AI incidents involve execution state drift. Teams that treat every incident as model drift waste debugging cycles and delay resolution. In one documented case, root cause identification took 21 days before Release State isolation brought it to under 4 hours.",
}: Props) {
  return (
    <div>
      <style>{`
        .s5esd-section {
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
        .s5esd-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s5esd-container {
          width: 100%;
          padding: 0 16px;
          box-sizing: border-box;
          margin: 0 auto;
        }
        .s5esd-body {
          max-width: 860px;
          margin: 0 auto;
        }
        .s5esd-section-header {
          text-align: center;
          margin-bottom: 32px;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s5esd-title {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0 0 16px;
          text-wrap: balance;
        }
        .s5esd-title-brand {
          color: #725bea;
        }
        .s5esd-description {
          font-size: 18px;
          color: #636363;
          line-height: 1.7;
          max-width: 100%;
          margin: 0;
          text-wrap: pretty;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s5esd-prose-body {
          font-size: 16px;
          color: #636363;
          line-height: 1.7;
          margin-bottom: 16px;
          text-wrap: pretty;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s5esd-table-wrap {
          overflow-x: auto;
          border-radius: 24px;
          border: 1px solid #e6e7e9;
          margin: 32px 0;
        }
        .s5esd-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
        }
        .s5esd-table thead th {
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
        .s5esd-table tbody td {
          padding: 14px 16px;
          border-bottom: 1px solid #e6e7e9;
          color: #0f0f0f;
          vertical-align: top;
          line-height: 1.5;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s5esd-table tbody tr:last-child td {
          border-bottom: none;
        }
        .s5esd-table tbody td:first-child {
          font-weight: 600;
        }
        .s5esd-table tbody tr:hover td {
          background: #f2f2f2;
        }

        @container (min-width: 768px) {
          .s5esd-container { padding: 0 32px; }
          .s5esd-title { font-size: 22px; }
        }
        @container (min-width: 1024px) {
          .s5esd-container { padding: 0 32px; }
          .s5esd-title { font-size: 24px; }
          .s5esd-description { max-width: 720px; }
        }
        @container (min-width: 1440px) {
          .s5esd-container { padding: 0 120px; max-width: 1440px; }
          .s5esd-title { font-size: 28px; }
          .s5esd-description { max-width: 860px; }
        }
      `}</style>

      <section className="s5esd-section">
        <div className="s5esd-inner">
          <div className="s5esd-container">
            <div className="s5esd-body">
              <div className="s5esd-section-header">
                <h2 className="s5esd-title">
                  {titlePart1}
                  <span className="s5esd-title-brand">{titleBrand}</span>
                  {titlePart2}
                </h2>
                <p className="s5esd-description">{description}</p>
              </div>
              <p className="s5esd-prose-body">{bodyText1}</p>
              <div className="s5esd-table-wrap">
                <table className="s5esd-table" aria-label="Incident response comparison">
                  <thead>
                    <tr>
                      <th>{tableHeader1}</th>
                      <th>{tableHeader2}</th>
                      <th>{tableHeader3}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{row1col1}</td>
                      <td>{row1col2}</td>
                      <td>{row1col3}</td>
                    </tr>
                    <tr>
                      <td>{row2col1}</td>
                      <td>{row2col2}</td>
                      <td>{row2col3}</td>
                    </tr>
                    <tr>
                      <td>{row3col1}</td>
                      <td>{row3col2}</td>
                      <td>{row3col3}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="s5esd-prose-body">{bodyText2}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

addPropertyControls(Section05_IncidentResponse, {
  titlePart1: { type: ControlType.String, title: "Title Part 1", defaultValue: "Why this distinction matters for " },
  titleBrand: { type: ControlType.String, title: "Title Brand", defaultValue: "incident response" },
  titlePart2: { type: ControlType.String, title: "Title Part 2", defaultValue: "" },
  description: { type: ControlType.String, title: "Description", defaultValue: "When a production incident occurs, the first question is: what changed?" },
  bodyText1: {
    type: ControlType.String, title: "Body 1", displayTextArea: true,
    defaultValue: "If the answer is model drift, the response is retraining. If the answer is execution state drift, retraining is the wrong response — and may make things worse.",
  },
  tableHeader1: { type: ControlType.String, title: "Table Header 1", defaultValue: "Incident type" },
  tableHeader2: { type: ControlType.String, title: "Table Header 2", defaultValue: "Correct response" },
  tableHeader3: { type: ControlType.String, title: "Table Header 3", defaultValue: "Wrong response" },
  row1col1: { type: ControlType.String, title: "Row 1 Col 1", defaultValue: "Model drift (distribution shift in real world)" },
  row1col2: { type: ControlType.String, title: "Row 1 Col 2", defaultValue: "Retrain with updated data" },
  row1col3: { type: ControlType.String, title: "Row 1 Col 3", defaultValue: "Look for pipeline issues" },
  row2col1: { type: ControlType.String, title: "Row 2 Col 1", defaultValue: "Execution state drift (schema, pipeline, runtime change)" },
  row2col2: { type: ControlType.String, title: "Row 2 Col 2", defaultValue: "Identify which execution condition changed, restore or adjust" },
  row2col3: { type: ControlType.String, title: "Row 2 Col 3", defaultValue: "Retrain — it won't fix the root cause" },
  row3col1: { type: ControlType.String, title: "Row 3 Col 1", defaultValue: "Both simultaneously" },
  row3col2: { type: ControlType.String, title: "Row 3 Col 2", defaultValue: "Diff execution states to isolate layer, then address each" },
  row3col3: { type: ControlType.String, title: "Row 3 Col 3", defaultValue: "Treat as single issue" },
  bodyText2: {
    type: ControlType.String, title: "Body 2", displayTextArea: true,
    defaultValue: "The majority of production AI incidents involve execution state drift. Teams that treat every incident as model drift waste debugging cycles and delay resolution. In one documented case, root cause identification took 21 days before Release State isolation brought it to under 4 hours.",
  },
})
