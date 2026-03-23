import * as React from "react"
import { addPropertyControls, ControlType } from "framer"

interface Props {
  title?: string
  description?: string
}

export default function Section04_Comparison({
  title = "DTS vs. Other Approaches to Restricted Data",
  description = "Databricks stores your data. Masking removes it. DTS makes it AI-ready -- without removing or exposing it.",
}: Props) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = React.useState(false)
  const [isTablet, setIsTablet] = React.useState(false)

  React.useEffect(() => {
    const el = containerRef.current
    if (!el) return
    let prevMobile = false
    let prevTablet = false
    const ro = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width
      const m = w < 768
      const t = w >= 768 && w < 1024
      if (m !== prevMobile) { prevMobile = m; setIsMobile(m) }
      if (t !== prevTablet) { prevTablet = t; setIsTablet(t) }
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const containerPadding = isMobile ? "0 16px" : isTablet ? "0 32px" : "0 120px"

  const rows = [
    {
      capability: "Privacy guarantee",
      dts: { text: "Mathematical DP bound" },
      masking: { partial: true, text: "Re-identification risk remains" },
      sampling: { cross: true, text: "No privacy guarantee" },
      manual: { cross: true, text: "" },
    },
    {
      capability: "Coverage expansion",
      dts: { text: "Generate at any scale" },
      masking: { cross: true, text: "Can't create new data" },
      sampling: { partial: true, text: "Bounded by real data volume" },
      manual: { partial: true, text: "Expensive & slow" },
    },
    {
      capability: "Rare class augmentation",
      dts: { text: "Targeted generation" },
      masking: { cross: true, text: "" },
      sampling: { cross: true, text: "Can't create rare events" },
      manual: { partial: true, text: "Very high cost" },
    },
    {
      capability: "Distribution fidelity",
      dts: { text: "Validated against real stats" },
      masking: { partial: true, text: "Distorted by masking" },
      sampling: { partial: true, text: "Sampling bias risk" },
      manual: { partial: true, text: "Annotator variance" },
    },
    {
      capability: "Cross-border / external use",
      dts: { text: "No real data transferred" },
      masking: { cross: true, text: "Residual risk" },
      sampling: { cross: true, text: "" },
      manual: { cross: true, text: "" },
    },
    {
      capability: "SynTitan integration",
      dts: { text: "Native versioning & binding" },
      masking: { cross: true, text: "" },
      sampling: { cross: true, text: "" },
      manual: { cross: true, text: "" },
    },
  ]

  const renderCell = (cell: { partial?: boolean; cross?: boolean; text: string }, isLast: boolean) => {
    const icon = cell.cross ? "✕" : cell.partial ? "△" : "✓"
    const color = cell.cross ? "#ff3030" : cell.partial ? "#9c9c9c" : "#0e824c"
    return (
      <td style={{
        padding: isMobile ? "10px 10px" : "14px 16px",
        borderBottom: isLast ? "none" : "1px solid #e6e7e9",
        color: "#0f0f0f",
        verticalAlign: "top",
        lineHeight: 1.5,
        fontSize: isMobile ? 12 : 14,
        minWidth: isMobile ? 80 : "auto",
      }}>
        <span style={{ color, fontWeight: 700 }}>{icon}</span>{cell.text ? ` ${cell.text}` : ""}
      </td>
    )
  }

  return (
    <div ref={containerRef} style={{ width: "100%", fontFamily: '"DM Sans", sans-serif', WebkitFontSmoothing: "antialiased" }}>
      <section style={{
        width: "100%",
        padding: isMobile ? "48px 0" : "80px 0",
        backgroundColor: "#f7f7f7",
        fontFamily: '"DM Sans", sans-serif',
        WebkitFontSmoothing: "antialiased",
      }}>
        <div style={{
          width: "100%",
          maxWidth: 1440,
         margin: "0 auto",
          padding: containerPadding,
          boxSizing: "border-box",
        }}>
          {/* Section Header */}
          <div style={{
            marginBottom: 32,
            textAlign: "center",
            paddingBottom: 24,
            borderBottom: "1px solid #e6e7e9",
          }}>
            <h2 style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: isMobile ? 20 : isTablet ? 22 : 40,
              fontWeight: 700,
              color: "#0f0f0f",
              lineHeight: 1.2,
              letterSpacing: "-0.5px",
              marginBottom: 16,
              textAlign: "center",
            }}>
              <span style={{ fontFamily: '"Oxanium", sans-serif', fontWeight: 700 }}>DTS</span> vs. Other Approaches to <span style={{ color: "#725bea" }}>Restricted Data</span>
            </h2>
            <p style={{
              fontSize: isMobile ? 14 : isTablet ? 16 : 18,
              color: "#636363",
              lineHeight: 1.7,
              maxWidth: 860,
            margin: "0 auto",
            }}>{description}</p>
          </div>

          {/* Table */}
          <div role="region" aria-label="DTS comparison table" style={{
            overflowX: "auto",
            borderRadius: 24,
            border: "1px solid #e6e7e9",
            WebkitOverflowScrolling: "touch",
          }}>
            <table style={{
              width: "100%",
              minWidth: isMobile ? 480 : "auto",
              borderCollapse: "collapse",
              fontSize: isMobile ? 12 : 14,
            }}>
              <thead>
                <tr>
                  <th style={{
                    fontFamily: '"Fragment Mono", monospace',
                    fontSize: isMobile ? 10 : 11,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "#0f0f0f",
                    fontWeight: 600,
                    padding: isMobile ? "10px 10px" : "12px 16px",
                    borderBottom: "2px solid #e6e7e9",
                    textAlign: "center",
                    backgroundColor: "#f7f7f7",
                    minWidth: isMobile ? 90 : "auto",
                  }}>Capability</th>
                  <th style={{
                    fontFamily: '"Fragment Mono", monospace',
                    fontSize: isMobile ? 10 : 11,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "#0f0f0f",
                    fontWeight: 600,
                    padding: isMobile ? "10px 10px" : "12px 16px",
                    borderBottom: "2px solid #e6e7e9",
                    textAlign: "center",
                    backgroundColor: "rgba(114, 91, 234, 0.08)",
                    minWidth: isMobile ? 80 : "auto",
                  }}><span style={{ fontFamily: '"Oxanium", sans-serif', fontWeight: 700 }}>DTS</span></th>
                  <th style={{
                    fontFamily: '"Fragment Mono", monospace',
                    fontSize: isMobile ? 10 : 11,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "#0f0f0f",
                    fontWeight: 600,
                    padding: isMobile ? "10px 10px" : "12px 16px",
                    borderBottom: "2px solid #e6e7e9",
                    textAlign: "left",
                    backgroundColor: "#f7f7f7",
                    minWidth: isMobile ? 80 : "auto",
                  }}>Masking</th>
                  <th style={{
                    fontFamily: '"Fragment Mono", monospace',
                    fontSize: isMobile ? 10 : 11,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "#0f0f0f",
                    fontWeight: 600,
                    padding: isMobile ? "10px 10px" : "12px 16px",
                    borderBottom: "2px solid #e6e7e9",
                    textAlign: "left",
                    backgroundColor: "#f7f7f7",
                    minWidth: isMobile ? 80 : "auto",
                  }}>Sampling</th>
                  <th style={{
                    fontFamily: '"Fragment Mono", monospace',
                    fontSize: isMobile ? 10 : 11,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "#0f0f0f",
                    fontWeight: 600,
                    padding: isMobile ? "10px 10px" : "12px 16px",
                    borderBottom: "2px solid #e6e7e9",
                    textAlign: "left",
                    backgroundColor: "#f7f7f7",
                    minWidth: isMobile ? 80 : "auto",
                  }}>Manual</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => {
                  const isLast = i === rows.length - 1
                  return (
                    <tr key={i}>
                      <td style={{
                        padding: isMobile ? "10px 10px" : "14px 16px",
                        borderBottom: isLast ? "none" : "1px solid #e6e7e9",
                        color: "#0f0f0f",
                        fontWeight: 600,
                        verticalAlign: "top",
                        lineHeight: 1.5,
                        fontSize: isMobile ? 12 : 14,
                      }}>{row.capability}</td>
                      <td style={{
                        padding: isMobile ? "10px 10px" : "14px 16px",
                        borderBottom: isLast ? "none" : "1px solid #e6e7e9",
                        verticalAlign: "top",
                        lineHeight: 1.5,
                        fontSize: isMobile ? 12 : 14,
                        backgroundColor: "rgba(114, 91, 234, 0.04)",
                      }}>
                        <span style={{ color: "#0e824c", fontWeight: 700 }}>✓</span> {row.dts.text}
                      </td>
                      {renderCell(row.masking, isLast)}
                      {renderCell(row.sampling, isLast)}
                      {renderCell(row.manual, isLast)}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
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
