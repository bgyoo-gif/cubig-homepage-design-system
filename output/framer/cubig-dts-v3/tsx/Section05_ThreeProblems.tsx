import { addPropertyControls, ControlType } from "framer"

interface Props {
  title?: string
  description?: string
}

export default function Section05_ThreeProblems({
  title = "Three Data Problems. One Engine.",
  description = "Data that can't be used, can't be shared, or doesn't exist in sufficient volume -- DTS resolves all three.",
}: Props) {
  const cards = [
    {
      badge: "RESTRICTED DATA",
      badgeColor: "#ff3030",
      number: "01 / 03",
      title: "Privacy-Safe Replacement",
      description: "Sensitive or regulated data blocked by compliance rules. DTS generates a statistically equivalent synthetic dataset -- with no real personal information.",
      checks: [
        "Replace GDPR, PIPA, HIPAA, or CCPA-restricted data with DP-safe synthetic equivalents",
        "Differential privacy guarantee on all synthetic output",
        "Safe for cross-team, cross-border, and external use",
        "Full distribution fidelity preserved",
      ],
    },
    {
      badge: "UNUSABLE DATA",
      badgeColor: "#0e824c",
      number: "02 / 03",
      title: "Coverage & Balance Expansion",
      description: "Data exists but is unfit for AI -- missing rare classes, biased distributions, or insufficient volume for reliable training.",
      checks: [
        "Augment underrepresented classes at scale",
        "Fix class imbalance without overfitting",
        "Generate edge case and rare event samples",
        "Expand small datasets to production-grade volumes",
      ],
    },
    {
      badge: "NON-ACCESSIBLE DATA",
      badgeColor: "#ff3030",
      number: "03 / 03",
      title: "Safe Dataset Generation",
      description: "Data exists in a silo -- restricted by access controls, third-party agreements, or geographic regulations -- and can't reach training pipelines.",
      checks: [
        "Generate safe replacement datasets from inaccessible sources",
        "Unblock stalled validation and testing workflows",
        "Remove data access bottlenecks in regulated environments",
        "Maintain statistical characteristics without data transfer",
      ],
    },
  ]

  return (
    <div style={{ width: "100%", fontFamily: '"DM Sans", sans-serif', WebkitFontSmoothing: "antialiased" }}>
      <section style={{
        width: "100%",
        padding: "80px 0",
        backgroundColor: "#ffffff",
        fontFamily: '"DM Sans", sans-serif',
        WebkitFontSmoothing: "antialiased",
      }}>
        <div style={{
          width: "100%",
          maxWidth: 1440,
          margin: "0 auto",
          padding: "0 120px",
          boxSizing: "border-box",
        }}>
          {/* Section Header */}
          <div style={{
            marginBottom: 32,
            textAlign: "left",
            paddingBottom: 24,
            borderBottom: "1px solid #e6e7e9",
          }}>
            <h2 style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: 28,
              fontWeight: 700,
              color: "#0f0f0f",
              lineHeight: 1.2,
              letterSpacing: "-0.5px",
              marginBottom: 16,
            }}>
              Three Data Problems. <span style={{ color: "#725bea" }}>One Engine.</span>
            </h2>
            <p style={{
              fontSize: 18,
              color: "#636363",
              lineHeight: 1.7,
              maxWidth: 860,
            }}>{description}</p>
          </div>

          {/* Card Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}>
            {cards.map((card, i) => (
              <article key={i} style={{
                backgroundColor: "#ffffff",
                borderRadius: 18,
                border: "1px solid #e6e7e9",
                padding: 24,
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
                  fontSize: 24,
                  fontWeight: 700,
                  color: "#0f0f0f",
                  lineHeight: 1.2,
                  marginBottom: 12,
                }}>{card.title}</h3>
                <p style={{
                  fontSize: 14,
                  color: "#636363",
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
                      fontSize: 16,
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
  title: { type: ControlType.String, title: "Title", defaultValue: "Three Data Problems. One Engine." },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue: "Data that can't be used, can't be shared, or doesn't exist in sufficient volume -- DTS resolves all three.",
    displayTextArea: true,
  },
})
