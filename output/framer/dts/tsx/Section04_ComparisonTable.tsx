// Section04_ComparisonTable.tsx — DTS vs Other Approaches Comparison Table
// Framer Code Component
import { useEffect } from "react"
import { addPropertyControls, ControlType } from "framer"

const FONT_URL = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap"

interface Props {
  marginTop?: number
  sectionTitle?: string
  sectionTitleProduct?: string
  sectionTitleMiddle?: string
  sectionTitleHighlight?: string
  sectionDescription?: string
}

export default function Section04_ComparisonTable({
  marginTop = 0,
  sectionTitle = "",
  sectionTitleProduct = "DTS",
  sectionTitleMiddle = " vs. Other Approaches to ",
  sectionTitleHighlight = "Restricted Data",
  sectionDescription = "Databricks stores your data. Masking removes it. DTS makes it AI-ready -- without removing or exposing it.",
}: Props) {
  useEffect(() => {
    const id = "font-dm-sans"
    if (document.getElementById(id)) return
    const link = document.createElement("link")
    link.id = id
    link.rel = "stylesheet"
    link.href = FONT_URL
    document.head.appendChild(link)
  }, [])

  return (
    <>
      <style>{`

        .s4-section {
          width: 100%; overflow: hidden; box-sizing: border-box;
          padding: 80px 0;
          margin-top: ${marginTop}px;
          font-family: "DM Sans", sans-serif;
          color: #0f0f0f;
          background-color: #f7f7f7;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
          box-sizing: border-box;
        }
        .s4-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s4-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        /* Section Header */
        .s4-header {
          margin-bottom: 48px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s4-header__title {
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
        .s4-title-highlight {
          color: #725bea;
        }
        .s4-header__description {
          font-size: 18px;
          color: #636363;
          line-height: 1.7;
          max-width: 100%;
          margin: 0 auto;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        /* Table */
        .s4-table-wrap {
          overflow-x: auto;
          border-radius: 24px;
          border: 1px solid #e6e7e9;
        }
        .s4-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
          min-width: 600px;
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
        .s4-table tbody td {
          padding: 14px 16px;
          border-bottom: 1px solid #e6e7e9;
          color: #0f0f0f;
          vertical-align: top;
          line-height: 1.5;
        }
        .s4-table tbody tr:last-child td {
          border-bottom: none;
        }
        .s4-table tbody td:first-child {
          font-weight: 600;
        }
        .s4-table tbody tr:hover td {
          background: #f7f7f7;
        }
        .s4-table__highlight {
          background-color: rgba(114, 91, 234, 0.04);
        }
        .s4-table thead th.s4-table__highlight {
          background-color: rgba(114, 91, 234, 0.08);
        }
        .s4-check { color: #0e824c; font-weight: 700; }
        .s4-partial { color: #f59e0b; }
        .s4-cross { color: #ff3030; }

        /* Responsive */
        @container (min-width: 768px) {
          .s4-container { padding: 0 32px; }
          .s4-header__description { max-width: 720px; }
        }
        @container (min-width: 1024px) {
          .s4-container { padding: 0 32px; }
          .s4-header__title { font-size: 40px; }
        }
        @container (min-width: 1440px) {
          .s4-container { padding: 0 120px; max-width: 1440px; }
          .s4-header__description { max-width: 860px; }
        }

        @container (max-width: 767px) {
          .s4-header { text-align: left; }
          .s4-header__title { font-size: 28px; }
          .s4-header__description { font-size: 16px; }
        }
      `}</style>

      <section className="s4-section" id="section-4">
        <div className="s4-inner">
        <div className="s4-container">
          <div className="s4-header">
            <h2 className="s4-header__title">
              <span className="s4-title-product">{sectionTitleProduct}</span>
              {sectionTitleMiddle}
              <span className="s4-title-highlight">{sectionTitleHighlight}</span>
            </h2>
            <p className="s4-header__description">{sectionDescription}</p>
          </div>

          <div className="s4-table-wrap" role="region" aria-label="DTS comparison table">
            <table className="s4-table">
              <thead>
                <tr>
                  <th>Capability</th>
                  <th className="s4-table__highlight"><span className="s4-title-product">DTS</span></th>
                  <th>Data Masking / Anonymization</th>
                  <th>Data Sampling</th>
                  <th>Manual Labeling</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Privacy guarantee</td>
                  <td className="s4-table__highlight"><span className="s4-check">✓</span> Mathematical DP bound</td>
                  <td><span className="s4-partial">△</span> Re-identification risk remains</td>
                  <td><span className="s4-cross">✕</span> No privacy guarantee</td>
                  <td><span className="s4-cross">✕</span></td>
                </tr>
                <tr>
                  <td>Coverage expansion</td>
                  <td className="s4-table__highlight"><span className="s4-check">✓</span> Generate at any scale</td>
                  <td><span className="s4-cross">✕</span> Can't create new data</td>
                  <td><span className="s4-partial">△</span> Bounded by real data volume</td>
                  <td><span className="s4-partial">△</span> Expensive &amp; slow</td>
                </tr>
                <tr>
                  <td>Rare class augmentation</td>
                  <td className="s4-table__highlight"><span className="s4-check">✓</span> Targeted generation</td>
                  <td><span className="s4-cross">✕</span></td>
                  <td><span className="s4-cross">✕</span> Can't create rare events</td>
                  <td><span className="s4-partial">△</span> Very high cost</td>
                </tr>
                <tr>
                  <td>Distribution fidelity</td>
                  <td className="s4-table__highlight"><span className="s4-check">✓</span> Validated against real stats</td>
                  <td><span className="s4-partial">△</span> Distorted by masking</td>
                  <td><span className="s4-partial">△</span> Sampling bias risk</td>
                  <td><span className="s4-partial">△</span> Annotator variance</td>
                </tr>
                <tr>
                  <td>Cross-border / external use</td>
                  <td className="s4-table__highlight"><span className="s4-check">✓</span> No real data transferred</td>
                  <td><span className="s4-cross">✕</span> Residual risk</td>
                  <td><span className="s4-cross">✕</span></td>
                  <td><span className="s4-cross">✕</span></td>
                </tr>
                <tr>
                  <td>SynTitan integration</td>
                  <td className="s4-table__highlight"><span className="s4-check">✓</span> Native versioning &amp; binding</td>
                  <td><span className="s4-cross">✕</span></td>
                  <td><span className="s4-cross">✕</span></td>
                  <td><span className="s4-cross">✕</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section04_ComparisonTable, {
  marginTop: {
    type: ControlType.Number,
    title: "Top Margin",
    defaultValue: 0,
    min: 0,
    max: 200,
    step: 10,
  },
  sectionTitleProduct: {
    type: ControlType.String,
    title: "Title Product",
    defaultValue: "DTS",
  },
  sectionTitleMiddle: {
    type: ControlType.String,
    title: "Title Middle",
    defaultValue: " vs. Other Approaches to ",
  },
  sectionTitleHighlight: {
    type: ControlType.String,
    title: "Title Highlight",
    defaultValue: "Restricted Data",
  },
  sectionDescription: {
    type: ControlType.String,
    title: "Description",
    displayTextArea: true,
    defaultValue:
      "Databricks stores your data. Masking removes it. DTS makes it AI-ready -- without removing or exposing it.",
  },
})
