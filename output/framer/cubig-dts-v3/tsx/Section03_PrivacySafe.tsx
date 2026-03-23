import { addPropertyControls, ControlType } from "framer"

interface Props {
  title?: string
  titleBrand?: string
  description?: string
  body1?: string
  body2?: string
  bannerText?: string
}

export default function Section03_PrivacySafe({
  title = "Privacy-Safe ",
  titleBrand = "Synthetic Data",
  description = "DTS includes privacy-safe synthetic data generation to expand coverage and repair imbalance when real data is restricted or incomplete.",
  body1 = "Synthetic data generation is one capability inside DTS -- not the company identity. DTS uses differential privacy as its mathematical foundation, providing formal guarantees that synthetic outputs cannot be reverse-engineered to individual records. This makes DTS suitable for regulated industries that need AI-ready datasets without exposing raw training data.",
  body2 = "DTS is a capability within Cubig's AI-Ready Data Infrastructure -- the infrastructure layer that makes enterprise data usable, privacy-safe, and stable for production AI execution. DTS specifically addresses the Restricted Data and Unusable Data blockers.",
  bannerText = "Synthetic data is a DTS capability. It is not Cubig's top-level identity.",
}: Props) {
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
              {title}<span style={{ color: "#a617ff" }}>{titleBrand}</span>
            </h2>
            <p style={{
              fontSize: 18,
              color: "#636363",
              lineHeight: 1.7,
              maxWidth: 860,
              margin: "0 auto",
            }}>{description}</p>
          </div>

          {/* Body */}
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <p style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: 16,
              fontWeight: 500,
              lineHeight: 1.5,
              color: "#0f0f0f",
              wordBreak: "keep-all",
              overflowWrap: "break-word",
            }}>{body1}</p>
            <p style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: 16,
              fontWeight: 500,
              lineHeight: 1.5,
              color: "#0f0f0f",
              wordBreak: "keep-all",
              overflowWrap: "break-word",
              marginTop: 24,
            }}>{body2}</p>
            <div role="note" style={{
              padding: "16px 24px",
              borderTop: "1px solid #e6e7e9",
              borderBottom: "1px solid #e6e7e9",
              backgroundColor: "rgba(21, 94, 160, 0.06)",
              fontSize: 14,
              lineHeight: 1.7,
              textAlign: "center",
              marginTop: 32,
              color: "#0f0f0f",
            }}>
              {bannerText}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

addPropertyControls(Section03_PrivacySafe, {
  title: { type: ControlType.String, title: "Title", defaultValue: "Privacy-Safe " },
  titleBrand: { type: ControlType.String, title: "Title (Brand)", defaultValue: "Synthetic Data" },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue: "DTS includes privacy-safe synthetic data generation to expand coverage and repair imbalance when real data is restricted or incomplete.",
    displayTextArea: true,
  },
  body1: {
    type: ControlType.String,
    title: "Body 1",
    defaultValue: "Synthetic data generation is one capability inside DTS -- not the company identity. DTS uses differential privacy as its mathematical foundation, providing formal guarantees that synthetic outputs cannot be reverse-engineered to individual records. This makes DTS suitable for regulated industries that need AI-ready datasets without exposing raw training data.",
    displayTextArea: true,
  },
  body2: {
    type: ControlType.String,
    title: "Body 2",
    defaultValue: "DTS is a capability within Cubig's AI-Ready Data Infrastructure -- the infrastructure layer that makes enterprise data usable, privacy-safe, and stable for production AI execution. DTS specifically addresses the Restricted Data and Unusable Data blockers.",
    displayTextArea: true,
  },
  bannerText: {
    type: ControlType.String,
    title: "Banner Text",
    defaultValue: "Synthetic data is a DTS capability. It is not Cubig's top-level identity.",
    displayTextArea: true,
  },
})
