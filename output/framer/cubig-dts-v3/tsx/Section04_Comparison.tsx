import { addPropertyControls, ControlType } from "framer"

interface Props {
  title?: string
  description?: string
}

export default function Section04_Comparison({
  title = "DTS vs. Other Approaches to Restricted Data",
  description = "Databricks stores your data. Masking removes it. DTS makes it AI-ready -- without removing or exposing it.",
}: Props) {
  const rows = [
    {
      capability: "Privacy guarantee",
      dts: { check: true, text: "Mathematical DP bound" },
      masking: { partial: true, text: "Re-identification risk remains" },
      sampling: { cross: true, text: "No privacy guarantee" },
      manual: { cross: true, text: "" },
    },
    {
      capability: "Coverage expansion",
      dts: { check: true, text: "Generate at any scale" },
      masking: { cross: true, text: "Can't create new data" },
      sampling: { partial: true, text: "Bounded by real data volume" },
      manual: { partial: true, text: "Expensive & slow" },
    },
    {
      capability: "Rare class augmentation",
      dts: { check: true, text: "Targeted generation" },
      masking: { cross: true, text: "" },
      sampling: { cross: true, text: "Can't create rare events" },
      manual: { partial: true, text: "Very high cost" },
    },
    {
      capability: "Distribution fidelity",
      dts: { check: true, text: "Validated against real stats" },
      masking: { partial: true, text: "Distorted by masking" },
      sampling: { partial: true, text: "Sampling bias risk" },
      manual: { partial: true, text: "Annotator variance" },
    },
    {
      capability: "Cross-border / external use",
      dts: { check: true, text: "No real data transferred" },
      masking: { cross: true, text: "Residual risk" },
      sampling: { cross: true, text: "" },
      manual: { cross: true, text: "" },
    },
    {
      capability: "SynTitan integration",
      dts: { check: true, text: "Native versioning & binding" },
      masking: { cross: true, text: "" },
      sampling: { cross: true, text: "" },
      manual: { cross: true, text: "" },
    },
  ]

  const renderCell = (cell: { check?: boolean; partial?: boolean; cross?: boolean; text: string }) => {
    const icon = cell.check ? "✓" : cell.partial ? "△" : "✕"
    const color = cell.check ? "#0e824c" : cell.partial ? "#f59e0b" : "#ff3030"
    return (
      <td style={{ padding: "14px 16px", borderBottom: "1px solid #e6e7e9", color: "#0f0f0f", verticalAlign: "top", lineHeight: 1.5 }}>
        <span style={{ color, fontWeight: 700 }}>{icon}</span>{cell.text ? ` ${cell.text}` : ""}
      </td>
    )
  }

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s4-section {
          width: 100%;
          padding: 80px 0;
          background-color: #f7f7f7;
          font-family: "DM Sans", sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        .s4-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s4-section-header {
          margin-bottom: 32px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s4-title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          text-wrap: balance;
        }
        .s4-title-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }
        .s4-title-brand { color: #a617ff; }
        .s4-description {
          font-size: 18px;
          color: #636363;
          line-height: 1.7;
          max-width: 100%;
          margin: 0 auto;
        }
        .s4-table-wrap {
          overflow-x: auto;
          border-radius: 24px;
          border: 1px solid #e6e7e9;
        }
        .s4-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
        }
        .s4-table thead th {
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
        .s4-table tbody td:first-child {
          font-weight: 600;
        }
        .s4-table tbody tr:last-child td {
          border-bottom: none;
        }
        .s4-table tbody tr:hover td {
          background: #f7f7f7;
        }
        .s4-th-highlight {
          background-color: rgba(114, 91, 234, 0.08) !important;
        }
        .s4-td-highlight {
          background-color: rgba(114, 91, 234, 0.04);
        }

        @media (min-width: 768px) {
          .s4-container { padding: 0 32px; }
          .s4-title { font-size: 22px; }
          .s4-description { max-width: 720px; }
          .s4-section-header { text-align: left; }
        }
        @media (min-width: 1024px) {
          .s4-container { padding: 0 32px; }
          .s4-title { font-size: 24px; }
        }
        @media (min-width: 1440px) {
          .s4-container { padding: 0 120px; max-width: 1440px; }
          .s4-title { font-size: 28px; }
          .s4-description { max-width: 860px; }
        }
        @media (max-width: 767px) {
          .s4-section-header { text-align: left; }
          .s4-title { font-size: 20px; }
        }
      `}</style>
      <section className="s4-section">
        <div className="s4-container">
          <div className="s4-section-header">
            <h2 className="s4-title">
              <span className="s4-title-product">DTS</span> vs. Other Approaches to <span className="s4-title-brand">Restricted Data</span>
            </h2>
            <p className="s4-description">{description}</p>
          </div>
          <div className="s4-table-wrap" role="region" aria-label="DTS comparison table">
            <table className="s4-table">
              <thead>
                <tr>
                  <th>Capability</th>
                  <th className="s4-th-highlight"><span className="s4-title-product">DTS</span></th>
                  <th>Data Masking / Anonymization</th>
                  <th>Data Sampling</th>
                  <th>Manual Labeling</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i}>
                    <td style={{ padding: "14px 16px", borderBottom: "1px solid #e6e7e9", color: "#0f0f0f", fontWeight: 600, verticalAlign: "top", lineHeight: 1.5 }}>
                      {row.capability}
                    </td>
                    <td className="s4-td-highlight" style={{ padding: "14px 16px", borderBottom: "1px solid #e6e7e9", verticalAlign: "top", lineHeight: 1.5 }}>
                      <span style={{ color: "#0e824c", fontWeight: 700 }}>✓</span> {row.dts.text}
                    </td>
                    {renderCell(row.masking)}
                    {renderCell(row.sampling)}
                    {renderCell(row.manual)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section04_Comparison, {
  title: { type: ControlType.String, title: "Title", defaultValue: "DTS vs. Other Approaches to Restricted Data" },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue: "Databricks stores your data. Masking removes it. DTS makes it AI-ready -- without removing or exposing it.",
    displayTextArea: true,
  },
})
