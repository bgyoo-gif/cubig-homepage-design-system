import * as React from "react"
import { addPropertyControls, ControlType } from "framer"

interface Props {
  titlePart1?: string
  titleBrand?: string
  description?: string
  card1Badge?: string
  card1Number?: string
  card1Title?: string
  card1Description?: string
  card1Check1?: string
  card1Check2?: string
  card1Check3?: string
  card1Check4?: string
  card2Badge?: string
  card2Number?: string
  card2Title?: string
  card2Description?: string
  card2Check1?: string
  card2Check2?: string
  card2Check3?: string
  card2Check4?: string
  card3Badge?: string
  card3Number?: string
  card3Title?: string
  card3Description?: string
  card3Check1?: string
  card3Check2?: string
  card3Check3?: string
  card3Check4?: string
}

export default function Section05_ThreeProblems({
  titlePart1 = "Three Data Problems. ",
  titleBrand = "One Engine.",
  description = "Data that can't be used, can't be shared, or doesn't exist in sufficient volume -- DTS resolves all three.",
  card1Badge = "RESTRICTED DATA",
  card1Number = "01 / 03",
  card1Title = "Privacy-Safe Replacement",
  card1Description = "Sensitive or regulated data blocked by compliance rules. DTS generates a statistically equivalent synthetic dataset -- with no real personal information.",
  card1Check1 = "Replace GDPR, PIPA, HIPAA, or CCPA-restricted data with DP-safe synthetic equivalents",
  card1Check2 = "Differential privacy guarantee on all synthetic output",
  card1Check3 = "Safe for cross-team, cross-border, and external use",
  card1Check4 = "Full distribution fidelity preserved",
  card2Badge = "UNUSABLE DATA",
  card2Number = "02 / 03",
  card2Title = "Coverage & Balance Expansion",
  card2Description = "Data exists but is unfit for AI -- missing rare classes, biased distributions, or insufficient volume for reliable training.",
  card2Check1 = "Augment underrepresented classes at scale",
  card2Check2 = "Fix class imbalance without overfitting",
  card2Check3 = "Generate edge case and rare event samples",
  card2Check4 = "Expand small datasets to production-grade volumes",
  card3Badge = "NON-ACCESSIBLE DATA",
  card3Number = "03 / 03",
  card3Title = "Safe Dataset Generation",
  card3Description = "Data exists in a silo -- restricted by access controls, third-party agreements, or geographic regulations -- and can't reach training pipelines.",
  card3Check1 = "Generate safe replacement datasets from inaccessible sources",
  card3Check2 = "Unblock stalled validation and testing workflows",
  card3Check3 = "Remove data access bottlenecks in regulated environments",
  card3Check4 = "Maintain statistical characteristics without data transfer",
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

  const cards = [
    {
      badge: card1Badge,
      badgeColor: "#ff3030",
      number: card1Number,
      title: card1Title,
      description: card1Description,
      checks: [card1Check1, card1Check2, card1Check3, card1Check4],
    },
    {
      badge: card2Badge,
      badgeColor: "#0e824c",
      number: card2Number,
      title: card2Title,
      description: card2Description,
      checks: [card2Check1, card2Check2, card2Check3, card2Check4],
    },
    {
      badge: card3Badge,
      badgeColor: "#ff3030",
      number: card3Number,
      title: card3Title,
      description: card3Description,
      checks: [card3Check1, card3Check2, card3Check3, card3Check4],
    },
  ]

  return (
    <div ref={containerRef} style={{ width: "100%", fontFamily: '"DM Sans", sans-serif', WebkitFontSmoothing: "antialiased" }}>
      <section style={{
        width: "100%",
        padding: isMobile ? "48px 0" : "80px 0",
        backgroundColor: "#ffffff",
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
              {titlePart1}<span style={{ color: "#725bea" }}>{titleBrand}</span>
            </h2>
            <p style={{
              fontSize: isMobile ? 14 : isTablet ? 16 : 18,
              color: "#636363",
              lineHeight: 1.7,
              maxWidth: 860,
            margin: "0 auto",
            }}>{description}</p>
          </div>

          {/* Card Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr" : "repeat(3, 1fr)",
            gap: 24,
          }}>
            {cards.map((card, i) => (
              <article key={i} style={{
                backgroundColor: "#ffffff",
                borderRadius: 18,
                border: "1px solid #e6e7e9",
                padding: isMobile ? 20 : 24,
                boxShadow: "0px 24px 40px rgba(0, 0, 0, 0.04)",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
              }}>
                <span style={{
                  display: "inline-flex",
                  alignItems: "center",
                  width: "fit-content",
                  padding: "4px 12px",
                  borderRadius: 9999,
                  fontSize: 12,
                  fontWeight: 500,
                  fontFamily: '"Fragment Mono", monospace',
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  border: `1px solid ${card.badgeColor}`,
                  color: card.badgeColor,
                  marginBottom: 16,
                }}>{card.badge}</span>
                <p style={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#9c9c9c",
                  marginBottom: 8,
                  lineHeight: 1.5,
                }}>{card.number}</p>
                <h3 style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: isMobile ? 18 : isTablet ? 20 : 24,
                  fontWeight: 700,
                  color: "#0f0f0f",
                  lineHeight: 1.2,
                  marginBottom: 12,
                }}>{card.title}</h3>
                <p style={{
                  fontSize: isMobile ? 13 : 14,
                  color: "#636363",
              wordBreak: "keep-all" as const,
              overflowWrap: "break-word" as const,
                  lineHeight: 1.7,
                  flex: 1,
                  marginBottom: 16,
                }}>{card.description}</p>
                <ul style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  marginTop: 16,
                  padding: 0,
                }}>
                  {card.checks.map((check, j) => (
                    <li key={j} style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 8,
                      fontSize: isMobile ? 14 : 16,
                      lineHeight: 1.5,
                      color: "#0f0f0f",
                    }}>
                      <span style={{
                        width: 20,
                        height: 20,
                        flexShrink: 0,
                        marginTop: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#0e824c",
                        fontWeight: 700,
                        fontSize: 16,
                      }}>✓</span>
                      {check}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

addPropertyControls(Section05_ThreeProblems, {
  titlePart1: { type: ControlType.String, title: "Title Part 1", defaultValue: "Three Data Problems. " },
  titleBrand: { type: ControlType.String, title: "Title Brand", defaultValue: "One Engine." },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue: "Data that can't be used, can't be shared, or doesn't exist in sufficient volume -- DTS resolves all three.",
    displayTextArea: true,
  },
  card1Badge: { type: ControlType.String, title: "Card1: Badge", defaultValue: "RESTRICTED DATA" },
  card1Number: { type: ControlType.String, title: "Card1: Number", defaultValue: "01 / 03" },
  card1Title: { type: ControlType.String, title: "Card1: Title", defaultValue: "Privacy-Safe Replacement" },
  card1Description: {
    type: ControlType.String,
    title: "Card1: Description",
    defaultValue: "Sensitive or regulated data blocked by compliance rules. DTS generates a statistically equivalent synthetic dataset -- with no real personal information.",
    displayTextArea: true,
  },
  card1Check1: { type: ControlType.String, title: "Card1: Check 1", defaultValue: "Replace GDPR, PIPA, HIPAA, or CCPA-restricted data with DP-safe synthetic equivalents" },
  card1Check2: { type: ControlType.String, title: "Card1: Check 2", defaultValue: "Differential privacy guarantee on all synthetic output" },
  card1Check3: { type: ControlType.String, title: "Card1: Check 3", defaultValue: "Safe for cross-team, cross-border, and external use" },
  card1Check4: { type: ControlType.String, title: "Card1: Check 4", defaultValue: "Full distribution fidelity preserved" },
  card2Badge: { type: ControlType.String, title: "Card2: Badge", defaultValue: "UNUSABLE DATA" },
  card2Number: { type: ControlType.String, title: "Card2: Number", defaultValue: "02 / 03" },
  card2Title: { type: ControlType.String, title: "Card2: Title", defaultValue: "Coverage & Balance Expansion" },
  card2Description: {
    type: ControlType.String,
    title: "Card2: Description",
    defaultValue: "Data exists but is unfit for AI -- missing rare classes, biased distributions, or insufficient volume for reliable training.",
    displayTextArea: true,
  },
  card2Check1: { type: ControlType.String, title: "Card2: Check 1", defaultValue: "Augment underrepresented classes at scale" },
  card2Check2: { type: ControlType.String, title: "Card2: Check 2", defaultValue: "Fix class imbalance without overfitting" },
  card2Check3: { type: ControlType.String, title: "Card2: Check 3", defaultValue: "Generate edge case and rare event samples" },
  card2Check4: { type: ControlType.String, title: "Card2: Check 4", defaultValue: "Expand small datasets to production-grade volumes" },
  card3Badge: { type: ControlType.String, title: "Card3: Badge", defaultValue: "NON-ACCESSIBLE DATA" },
  card3Number: { type: ControlType.String, title: "Card3: Number", defaultValue: "03 / 03" },
  card3Title: { type: ControlType.String, title: "Card3: Title", defaultValue: "Safe Dataset Generation" },
  card3Description: {
    type: ControlType.String,
    title: "Card3: Description",
    defaultValue: "Data exists in a silo -- restricted by access controls, third-party agreements, or geographic regulations -- and can't reach training pipelines.",
    displayTextArea: true,
  },
  card3Check1: { type: ControlType.String, title: "Card3: Check 1", defaultValue: "Generate safe replacement datasets from inaccessible sources" },
  card3Check2: { type: ControlType.String, title: "Card3: Check 2", defaultValue: "Unblock stalled validation and testing workflows" },
  card3Check3: { type: ControlType.String, title: "Card3: Check 3", defaultValue: "Remove data access bottlenecks in regulated environments" },
  card3Check4: { type: ControlType.String, title: "Card3: Check 4", defaultValue: "Maintain statistical characteristics without data transfer" },
})
