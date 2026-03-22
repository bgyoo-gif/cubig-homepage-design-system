// Section09_ComparisonTable.tsx — LLM Capsule vs Alternatives Comparison Table
// Framer Code Component
import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

interface TableRow {
  capability: string
  llmCapsule: string
  manualReview: string
  staticMasking: string
  noProtection: string
}

interface Props {
  eyebrow?: string
  title?: string
  titleProduct?: string
  titleBrand?: string
  rows?: TableRow[]
}

const defaultRows: TableRow[] = [
  {
    capability: "Real-time PII detection",
    llmCapsule: "✓ Automated, in-line",
    manualReview: "△ Slow, error-prone",
    staticMasking: "✗ Pre-processing only",
    noProtection: "✗",
  },
  {
    capability: "Output usability preserved",
    llmCapsule: "✓ Token re-mapping",
    manualReview: "△ Context dependent",
    staticMasking: "✗ Masked data lost",
    noProtection: "✓ But exposed",
  },
  {
    capability: "Blocks external PII transmission",
    llmCapsule: "✓ Before API call",
    manualReview: "△ Human dependent",
    staticMasking: "△ Partial",
    noProtection: "✗",
  },
  {
    capability: "Audit trail",
    llmCapsule: "✓ Full log + Release State",
    manualReview: "✗",
    staticMasking: "△ Limited",
    noProtection: "✗",
  },
  {
    capability: "Custom enterprise field detection",
    llmCapsule: "✓ Configurable rules",
    manualReview: "△ Manual only",
    staticMasking: "△ Schema-bound",
    noProtection: "✗",
  },
]

function CellContent({ text }: { text: string }) {
  if (text.startsWith("✓")) {
    return (
      <span>
        <span style={{ color: "#0d7a5f", fontWeight: 700 }}>✓</span>
        {text.slice(1)}
      </span>
    )
  }
  if (text.startsWith("△")) {
    return (
      <span>
        <span style={{ color: "#b45309", fontWeight: 700 }}>△</span>
        {text.slice(1)}
      </span>
    )
  }
  if (text.startsWith("✗")) {
    return (
      <span>
        <span style={{ color: "#c0392b", fontWeight: 700 }}>✗</span>
        {text.slice(1)}
      </span>
    )
  }
  return <span>{text}</span>
}

export default function Section09_ComparisonTable({
  eyebrow = "Comparison",
  title = "",
  titleProduct = "LLM Capsule",
  titleBrand = "doing nothing.",
  rows = defaultRows,
}: Props) {
  return (
    <>
      <style>{`
        .s9-section {
          width: 100%;
          padding: 80px 0;
          font-family: "DM Sans", sans-serif;
          color: #0f0f0f;
          background-color: #ffffff;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s9-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        /* Section Header */
        .s9-section-header {
          margin-bottom: 48px;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s9-eyebrow {
          display: block;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #636363;
          margin-bottom: 12px;
        }
        .s9-section-title {
          font-family: "DM Sans", sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -1px;
          margin: 0;
        }
        .s9-title-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }
        .s9-title-brand {
          background: linear-gradient(130deg, #6C54A0, #b44fcc 50%, #ff266a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Table */
        .s9-table-wrap {
          width: 100%;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          border-radius: 16px;
          border: 1px solid #e6e7e9;
        }
        .s9-table {
          width: 100%;
          min-width: 640px;
          border-collapse: collapse;
          font-size: 14px;
        }
        .s9-table thead tr {
          background: #f7f7f7;
        }
        .s9-table th {
          padding: 14px 16px;
          text-align: left;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #636363;
          border-bottom: 1px solid #e6e7e9;
        }
        .s9-table td {
          padding: 14px 16px;
          border-bottom: 1px solid #f2f2f2;
          vertical-align: top;
          color: #0f0f0f;
          line-height: 1.5;
        }
        .s9-table tr:last-child td {
          border-bottom: none;
        }
        .s9-table .s9-col-highlight {
          background: #faf7ff;
          font-weight: 500;
        }
        .s9-table th.s9-col-highlight {
          background: #f0ecff;
          color: #6C54A0;
        }
        .s9-table .s9-capability {
          font-weight: 600;
          color: #0f0f0f;
        }
        .s9-table tr:hover td {
          background: #fafafa;
        }
        .s9-table tr:hover .s9-col-highlight {
          background: #f5f0ff;
        }

        /* Responsive */
        @media (min-width: 768px) {
          .s9-container { padding: 0 32px; }
          .s9-section-title { font-size: 42px; }
        }
        @media (min-width: 1024px) {
          .s9-container { padding: 0 32px; }
          .s9-section-title { font-size: 48px; }
        }
        @media (min-width: 1440px) {
          .s9-container { padding: 0 120px; max-width: 1440px; }
        }
      `}</style>

      <section className="s9-section">
        <div className="s9-container">
          {/* Section Header */}
          <div className="s9-section-header">
            <span className="s9-eyebrow">{eyebrow}</span>
            <h2 className="s9-section-title">
              <span className="s9-title-product">{titleProduct}</span>
              {" vs. "}
              <span className="s9-title-brand">{titleBrand}</span>
              {" Or avoiding AI."}
            </h2>
          </div>

          {/* Table */}
          <div className="s9-table-wrap">
            <table className="s9-table">
              <thead>
                <tr>
                  <th>Capability</th>
                  <th className="s9-col-highlight">LLM Capsule</th>
                  <th>Manual Prompt Review</th>
                  <th>Static Data Masking</th>
                  <th>No Protection</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i}>
                    <td className="s9-capability">{row.capability}</td>
                    <td className="s9-col-highlight">
                      <CellContent text={row.llmCapsule} />
                    </td>
                    <td>
                      <CellContent text={row.manualReview} />
                    </td>
                    <td>
                      <CellContent text={row.staticMasking} />
                    </td>
                    <td>
                      <CellContent text={row.noProtection} />
                    </td>
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

addPropertyControls(Section09_ComparisonTable, {
  eyebrow: {
    type: ControlType.String,
    title: "Eyebrow",
    defaultValue: "Comparison",
  },
  titleProduct: {
    type: ControlType.String,
    title: "Title (Product)",
    defaultValue: "LLM Capsule",
  },
  titleBrand: {
    type: ControlType.String,
    title: "Title (Brand)",
    defaultValue: "doing nothing.",
  },
})
