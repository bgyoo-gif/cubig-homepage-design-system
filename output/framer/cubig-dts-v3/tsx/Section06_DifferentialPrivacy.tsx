import { useState } from "react"
import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

interface Props {
  title?: string
  description?: string
  bannerText?: string
}

export default function Section06_DifferentialPrivacy({
  title = "Mathematically Guaranteed Privacy Protection",
  description = "Differential privacy (DP) is a mathematical framework that guarantees any single individual's data cannot be identified from the synthetic output -- regardless of what an attacker already knows.",
  bannerText = "The probability of any inference about an individual from the synthetic dataset is bounded by a mathematically defined epsilon -- regardless of external knowledge.",
}: Props) {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      label: "Statistical Profiling",
      title: "Statistical Profiling",
      description: "DTS analyzes the real dataset's statistical properties -- distributions, correlations, marginals -- without storing raw records.",
      image: `${IMAGE_BASE}/screenshot-dts-statistical-profiling.png`,
      imageAlt: "DTS Statistical Profiling interface",
    },
    {
      label: "DP Noise Injection",
      title: "DP Noise Injection",
      description: "Calibrated noise is injected into the statistical model according to DP bounds. Individual data points become mathematically unidentifiable.",
      image: `${IMAGE_BASE}/screenshot-dts-differencial-privacy.png`,
      imageAlt: "DTS Differential Privacy interface",
    },
    {
      label: "Synthetic Generation",
      title: "Synthetic Generation",
      description: "New records are sampled from the DP-protected model. Output is statistically representative but contains no real personal information.",
      image: `${IMAGE_BASE}/screenshot-dts-syntheticgeneration.png`,
      imageAlt: "DTS Synthetic Generation interface",
    },
    {
      label: "Fidelity Validation",
      title: "Fidelity Validation",
      description: "Generated data is validated against the original distribution. Quality and utility metrics confirm suitability for training and validation use.",
      image: `${IMAGE_BASE}/screenshot-dts-quality-evaluation.png`,
      imageAlt: "DTS Quality Evaluation dashboard",
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
              Mathematically Guaranteed <span style={{ color: "#a617ff" }}>Privacy Protection</span>
            </h2>
            <p style={{
              fontSize: 18,
              color: "#636363",
              lineHeight: 1.7,
              maxWidth: 860,
            }}>{description}</p>
          </div>

          {/* Banner */}
          <div style={{ marginBottom: 48 }}>
            <div role="note" style={{
              padding: "16px 24px",
              borderTop: "1px solid #e6e7e9",
              borderBottom: "1px solid #e6e7e9",
              backgroundColor: "rgba(166, 23, 255, 0.06)",
              fontSize: 14,
              lineHeight: 1.7,
              textAlign: "center",
              color: "#0f0f0f",
            }}>{bannerText}</div>
          </div>

          {/* Tab Nav */}
          <div role="tablist" aria-label="DP process steps" style={{
            display: "flex",
            justifyContent: "center",
            gap: 12,
            flexWrap: "wrap",
            marginBottom: 64,
          }}>
            {tabs.map((tab, i) => {
              const isActive = activeTab === i
              return (
                <button
                  key={i}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(i)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 24px",
                    borderRadius: 9999,
                    border: "1px solid",
                    borderColor: isActive ? "#0f0f0f" : "#e6e7e9",
                    backgroundColor: isActive ? "#0f0f0f" : "#ffffff",
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: 14,
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? "#ffffff" : "#636363",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    backgroundColor: isActive ? "#ffffff" : "#ececec",
                    border: "1px solid",
                    borderColor: isActive ? "#ffffff" : "#e6e7e9",
                    fontSize: 12,
                    fontWeight: 700,
                    color: isActive ? "#0f0f0f" : "#636363",
                    flexShrink: 0,
                  }}>{i + 1}</span>
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* Panel */}
          <div role="tabpanel" style={{
            display: "grid",
            gridTemplateColumns: "5fr 7fr",
            gap: 80,
            alignItems: "center",
          }}>
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}>
              <h3 style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: 36,
                fontWeight: 700,
                color: "#0f0f0f",
                lineHeight: 1.2,
              }}>{tabs[activeTab].title}</h3>
              <p style={{
                fontSize: 16,
                color: "#636363",
                lineHeight: 1.7,
              }}>{tabs[activeTab].description}</p>
            </div>
            <div style={{
              borderRadius: 24,
              overflow: "hidden",
              border: "1px solid #e6e7e9",
              boxShadow: "0px 24px 40px rgba(0, 0, 0, 0.04)",
              backgroundColor: "#f7f7f7",
              maxHeight: 420,
            }}>
              <img
                src={tabs[activeTab].image}
                alt={tabs[activeTab].imageAlt}
                loading="lazy"
                style={{
                  width: "100%",
                  display: "block",
                  objectFit: "cover",
                  objectPosition: "top left",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

addPropertyControls(Section06_DifferentialPrivacy, {
  title: { type: ControlType.String, title: "Title", defaultValue: "Mathematically Guaranteed Privacy Protection" },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue: "Differential privacy (DP) is a mathematical framework that guarantees any single individual's data cannot be identified from the synthetic output -- regardless of what an attacker already knows.",
    displayTextArea: true,
  },
  bannerText: {
    type: ControlType.String,
    title: "Banner Text",
    defaultValue: "The probability of any inference about an individual from the synthetic dataset is bounded by a mathematically defined epsilon -- regardless of external knowledge.",
    displayTextArea: true,
  },
})
