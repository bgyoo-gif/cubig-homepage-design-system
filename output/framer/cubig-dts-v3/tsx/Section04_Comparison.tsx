import * as React from "react"
import { addPropertyControls, ControlType } from "framer"

interface Props {
  titlePart1?: string
  titleBrand?: string
  titlePart2?: string
  titleBrandColor?: string
  description?: string
  colCapability?: string
  colDTS?: string
  colMasking?: string
  colSampling?: string
  colManual?: string
  row1Capability?: string
  row1DTS?: string
  row1MaskingText?: string
  row1SamplingText?: string
  row2Capability?: string
  row2DTS?: string
  row2MaskingText?: string
  row2SamplingText?: string
  row2ManualText?: string
  row3Capability?: string
  row3DTS?: string
  row3SamplingText?: string
  row3ManualText?: string
  row4Capability?: string
  row4DTS?: string
  row4MaskingText?: string
  row4SamplingText?: string
  row4ManualText?: string
  row5Capability?: string
  row5DTS?: string
  row5MaskingText?: string
  row6Capability?: string
  row6DTS?: string
}

export default function Section04_Comparison({
  titlePart1 = "vs. Other Approaches to ",
  titleBrand = "Restricted Data",
  titlePart2 = "",
  description = "Databricks stores your data. Masking removes it. DTS makes it AI-ready -- without removing or exposing it.",
  colCapability = "Capability",
  colDTS = "DTS",
  colMasking = "Masking",
  colSampling = "Sampling",
  colManual = "Manual",
  row1Capability = "Privacy guarantee",
  row1DTS = "Mathematical DP bound",
  row1MaskingText = "Re-identification risk remains",
  row1SamplingText = "No privacy guarantee",
  row2Capability = "Coverage expansion",
  row2DTS = "Generate at any scale",
  row2MaskingText = "Can't create new data",
  row2SamplingText = "Bounded by real data volume",
  row2ManualText = "Expensive & slow",
  row3Capability = "Rare class augmentation",
  row3DTS = "Targeted generation",
  row3SamplingText = "Can't create rare events",
  row3ManualText = "Very high cost",
  row4Capability = "Distribution fidelity",
  row4DTS = "Validated against real stats",
  row4MaskingText = "Distorted by masking",
  row4SamplingText = "Sampling bias risk",
  row4ManualText = "Annotator variance",
  row5Capability = "Cross-border / external use",
  row5DTS = "No real data transferred",
  row5MaskingText = "Residual risk",
  row6Capability = "SynTitan integration",
  row6DTS = "Native versioning & binding",
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
      capability: row1Capability,
      dts: { text: row1DTS },
      masking: { partial: true, text: row1MaskingText },
      sampling: { cross: true, text: row1SamplingText },
      manual: { cross: true, text: "" },
    },
    {
      capability: row2Capability,
      dts: { text: row2DTS },
      masking: { cross: true, text: row2MaskingText },
      sampling: { partial: true, text: row2SamplingText },
      manual: { partial: true, text: row2ManualText },
    },
    {
      capability: row3Capability,
      dts: { text: row3DTS },
      masking: { cross: true, text: "" },
      sampling: { cross: true, text: row3SamplingText },
      manual: { partial: true, text: row3ManualText },
    },
    {
      capability: row4Capability,
      dts: { text: row4DTS },
      masking: { partial: true, text: row4MaskingText },
      sampling: { partial: true, text: row4SamplingText },
      manual: { partial: true, text: row4ManualText },
    },
    {
      capability: row5Capability,
      dts: { text: row5DTS },
      masking: { cross: true, text: row5MaskingText },
      sampling: { cross: true, text: "" },
      manual: { cross: true, text: "" },
    },
    {
      capability: row6Capability,
      dts: { text: row6DTS },
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
              <span style={{ fontFamily: '"Oxanium", sans-serif', fontWeight: 700 }}>{colDTS}</span>{titlePart1}<span style={{ color: "#725bea" }}>{titleBrand}</span>{titlePart2}
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
                  }}>{colCapability}</th>
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
                  }}><span style={{ fontFamily: '"Oxanium", sans-serif', fontWeight: 700 }}>{colDTS}</span></th>
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
                  }}>{colMasking}</th>
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
                  }}>{colSampling}</th>
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
                  }}>{colManual}</th>
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
  titlePart1: { type: ControlType.String, title: "Title Part 1", defaultValue: " vs. Other Approaches to " },
  titleBrand: { type: ControlType.String, title: "Title Brand", defaultValue: "Restricted Data" },
  titlePart2: { type: ControlType.String, title: "Title Part 2", defaultValue: "" },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue: "Databricks stores your data. Masking removes it. DTS makes it AI-ready -- without removing or exposing it.",
    displayTextArea: true,
  },
  colCapability: { type: ControlType.String, title: "Col: Capability", defaultValue: "Capability" },
  colDTS: { type: ControlType.String, title: "Col: DTS", defaultValue: "DTS" },
  colMasking: { type: ControlType.String, title: "Col: Masking", defaultValue: "Masking" },
  colSampling: { type: ControlType.String, title: "Col: Sampling", defaultValue: "Sampling" },
  colManual: { type: ControlType.String, title: "Col: Manual", defaultValue: "Manual" },
  row1Capability: { type: ControlType.String, title: "Row1: Capability", defaultValue: "Privacy guarantee" },
  row1DTS: { type: ControlType.String, title: "Row1: DTS", defaultValue: "Mathematical DP bound" },
  row1MaskingText: { type: ControlType.String, title: "Row1: Masking", defaultValue: "Re-identification risk remains" },
  row1SamplingText: { type: ControlType.String, title: "Row1: Sampling", defaultValue: "No privacy guarantee" },
  row2Capability: { type: ControlType.String, title: "Row2: Capability", defaultValue: "Coverage expansion" },
  row2DTS: { type: ControlType.String, title: "Row2: DTS", defaultValue: "Generate at any scale" },
  row2MaskingText: { type: ControlType.String, title: "Row2: Masking", defaultValue: "Can't create new data" },
  row2SamplingText: { type: ControlType.String, title: "Row2: Sampling", defaultValue: "Bounded by real data volume" },
  row2ManualText: { type: ControlType.String, title: "Row2: Manual", defaultValue: "Expensive & slow" },
  row3Capability: { type: ControlType.String, title: "Row3: Capability", defaultValue: "Rare class augmentation" },
  row3DTS: { type: ControlType.String, title: "Row3: DTS", defaultValue: "Targeted generation" },
  row3SamplingText: { type: ControlType.String, title: "Row3: Sampling", defaultValue: "Can't create rare events" },
  row3ManualText: { type: ControlType.String, title: "Row3: Manual", defaultValue: "Very high cost" },
  row4Capability: { type: ControlType.String, title: "Row4: Capability", defaultValue: "Distribution fidelity" },
  row4DTS: { type: ControlType.String, title: "Row4: DTS", defaultValue: "Validated against real stats" },
  row4MaskingText: { type: ControlType.String, title: "Row4: Masking", defaultValue: "Distorted by masking" },
  row4SamplingText: { type: ControlType.String, title: "Row4: Sampling", defaultValue: "Sampling bias risk" },
  row4ManualText: { type: ControlType.String, title: "Row4: Manual", defaultValue: "Annotator variance" },
  row5Capability: { type: ControlType.String, title: "Row5: Capability", defaultValue: "Cross-border / external use" },
  row5DTS: { type: ControlType.String, title: "Row5: DTS", defaultValue: "No real data transferred" },
  row5MaskingText: { type: ControlType.String, title: "Row5: Masking", defaultValue: "Residual risk" },
  row6Capability: { type: ControlType.String, title: "Row6: Capability", defaultValue: "SynTitan integration" },
  row6DTS: { type: ControlType.String, title: "Row6: DTS", defaultValue: "Native versioning & binding" },
})
