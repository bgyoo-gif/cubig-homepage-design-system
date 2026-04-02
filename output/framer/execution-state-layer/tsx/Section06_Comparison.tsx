// Section06_Comparison.tsx — Comparison Table
// Framer Code Component
import { addPropertyControls, ControlType } from "framer"

interface Props {
  sectionTitleBrand?: string
  colAspect?: string
  colTraditional?: string
  colESL?: string
  row1Aspect?: string
  row1Traditional?: string
  row1ESL?: string
  row2Aspect?: string
  row2Traditional?: string
  row2ESL?: string
  row3Aspect?: string
  row3Traditional?: string
  row3ESL?: string
  row4Aspect?: string
  row4Traditional?: string
  row4ESL?: string
}

export default function Section06_Comparison({
  sectionTitleBrand = "Comparison",
  colAspect = "Aspect",
  colTraditional = "Traditional Data Pipeline",
  colESL = "With Execution State Layer",
  row1Aspect = "Data Mutability",
  row1Traditional = "Data is mutable",
  row1ESL = "Data is versioned and frozen",
  row2Aspect = "Execution Conditions",
  row2Traditional = "Execution conditions are implicit",
  row2ESL = "Execution conditions are explicit",
  row3Aspect = "Reproducibility",
  row3Traditional = "Results are difficult to reproduce",
  row3ESL = "Results are reproducible",
  row4Aspect = "Debugging",
  row4Traditional = "Debugging relies on assumptions",
  row4ESL = "Debugging is deterministic",
}: Props) {
  return (
    <div>
      <style>{`
        .s6-section {
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
        .s6-inner { width: 100%; container-type: inline-size; }
        .s6-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s6-header {
          margin-bottom: 48px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s6-header__title {
          font-size: 24px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: balance;
        }
        .s6-header__title-brand { color: #725bea; }

        .s6-table-wrap {
          overflow-x: auto;
          border-radius: 24px;
          border: 1px solid #e6e7e9;
        }
        .s6-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
        }
        .s6-table colgroup col:first-child { width: 22%; }
        .s6-table colgroup col:nth-child(2) { width: 39%; }
        .s6-table colgroup col:nth-child(3) { width: 39%; }
        .s6-table thead th {
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
        .s6-table thead th:nth-child(2) { color: #9c9c9c; }
        .s6-table thead th:nth-child(3) { color: #725bea; }
        .s6-table tbody td {
          padding: 14px 16px;
          border-bottom: 1px solid #e6e7e9;
          color: #0f0f0f;
          vertical-align: top;
          line-height: 1.5;
        }
        .s6-table tbody tr:last-child td { border-bottom: none; }
        .s6-table tbody td:first-child { font-weight: 600; }
        .s6-table tbody td:nth-child(2) { color: #9c9c9c; }
        .s6-table tbody tr:hover td { background: #f7f7f7; }

        @container (min-width: 768px) {
          .s6-container { padding: 0 32px; }
          .s6-header__title { font-size: 28px; }
        }
        @container (min-width: 1024px) {
          .s6-container { padding: 0 32px; }
          .s6-header__title { font-size: 32px; }
        }
        @container (min-width: 1440px) {
          .s6-container { padding: 0 120px; max-width: 1440px; }
          .s6-header__title { font-size: 36px; }
        }
      `}</style>

      <section className="s6-section">
        <div className="s6-inner">
          <div className="s6-container">
            <div className="s6-header">
              <h2 className="s6-header__title">
                <span className="s6-header__title-brand">{sectionTitleBrand}</span>
              </h2>
            </div>
            <div className="s6-table-wrap">
              <table className="s6-table">
                <colgroup>
                  <col />
                  <col />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">{colAspect}</th>
                    <th scope="col">{colTraditional}</th>
                    <th scope="col">{colESL}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{row1Aspect}</td>
                    <td>{row1Traditional}</td>
                    <td>{row1ESL}</td>
                  </tr>
                  <tr>
                    <td>{row2Aspect}</td>
                    <td>{row2Traditional}</td>
                    <td>{row2ESL}</td>
                  </tr>
                  <tr>
                    <td>{row3Aspect}</td>
                    <td>{row3Traditional}</td>
                    <td>{row3ESL}</td>
                  </tr>
                  <tr>
                    <td>{row4Aspect}</td>
                    <td>{row4Traditional}</td>
                    <td>{row4ESL}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

addPropertyControls(Section06_Comparison, {
  sectionTitleBrand: { type: ControlType.String, title: "Title", defaultValue: "Comparison" },
  colAspect: { type: ControlType.String, title: "Col Aspect", defaultValue: "Aspect" },
  colTraditional: { type: ControlType.String, title: "Col Traditional", defaultValue: "Traditional Data Pipeline" },
  colESL: { type: ControlType.String, title: "Col ESL", defaultValue: "With Execution State Layer" },
  row1Aspect: { type: ControlType.String, title: "Row1 Aspect", defaultValue: "Data Mutability" },
  row1Traditional: { type: ControlType.String, title: "Row1 Traditional", defaultValue: "Data is mutable" },
  row1ESL: { type: ControlType.String, title: "Row1 ESL", defaultValue: "Data is versioned and frozen" },
  row2Aspect: { type: ControlType.String, title: "Row2 Aspect", defaultValue: "Execution Conditions" },
  row2Traditional: { type: ControlType.String, title: "Row2 Traditional", defaultValue: "Execution conditions are implicit" },
  row2ESL: { type: ControlType.String, title: "Row2 ESL", defaultValue: "Execution conditions are explicit" },
  row3Aspect: { type: ControlType.String, title: "Row3 Aspect", defaultValue: "Reproducibility" },
  row3Traditional: { type: ControlType.String, title: "Row3 Traditional", defaultValue: "Results are difficult to reproduce" },
  row3ESL: { type: ControlType.String, title: "Row3 ESL", defaultValue: "Results are reproducible" },
  row4Aspect: { type: ControlType.String, title: "Row4 Aspect", defaultValue: "Debugging" },
  row4Traditional: { type: ControlType.String, title: "Row4 Traditional", defaultValue: "Debugging relies on assumptions" },
  row4ESL: { type: ControlType.String, title: "Row4 ESL", defaultValue: "Debugging is deterministic" },
})
