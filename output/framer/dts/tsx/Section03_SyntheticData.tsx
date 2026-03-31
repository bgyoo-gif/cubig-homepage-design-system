// Section03_SyntheticData.tsx — DTS Privacy-Safe Synthetic Data Positioning
// Framer Code Component
import { useEffect } from "react"
import { addPropertyControls, ControlType } from "framer"

const FONT_URL = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap"

interface Props {
  marginTop?: number
  sectionTitle?: string
  sectionTitleHighlight?: string
  sectionDescription?: string
  body1?: string
  body2?: string
  bannerText?: string
}

export default function Section03_SyntheticData({
  marginTop = 0,
  sectionTitle = "Privacy-Safe",
  sectionTitleHighlight = "Synthetic Data",
  sectionDescription = "DTS includes privacy-safe synthetic data generation to expand coverage and repair imbalance when real data is restricted or incomplete.",
  body1 = "Synthetic data generation is one capability inside DTS -- not the company identity. DTS uses differential privacy as its mathematical foundation, providing formal guarantees that synthetic outputs cannot be reverse-engineered to individual records. This makes DTS suitable for regulated industries that need AI-ready datasets without exposing raw training data.",
  body2 = "DTS is a capability within Cubig's AI-Ready Data Infrastructure -- the infrastructure layer that makes enterprise data usable, privacy-safe, and stable for production AI execution. DTS specifically addresses the Restricted Data and Unusable Data blockers.",
  bannerText = "Synthetic data is a DTS capability. It is not Cubig's top-level identity.",
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

        .s3-section {
          width: 100%; overflow: hidden; box-sizing: border-box;
          padding: 80px 0;
          margin-top: ${marginTop}px;
          font-family: "DM Sans", sans-serif;
          color: #0f0f0f;
          background-color: #ffffff;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
          box-sizing: border-box;
        }
        .s3-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s3-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        /* Section Header */
        .s3-header {
          margin-bottom: 48px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s3-header__title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          text-wrap: balance;
        }
        .s3-header__title-highlight {
          color: #725bea;
        }
        .s3-header__description {
          font-size: 18px;
          color: #636363;
          line-height: 1.7;
          max-width: 100%;
          margin: 0 auto;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        /* Body content */
        .s3-body {
          max-width: 100%;
        }
        .s3-body-text {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 500;
          color: #0f0f0f;
          line-height: 1.5;
          margin: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s3-body-text + .s3-body-text {
          margin-top: 24px;
        }

        /* Banner */
        .s3-banner {
          padding: 16px 24px;
          border-top: 1px solid #e6e7e9;
          border-bottom: 1px solid #e6e7e9;
          background-color: rgba(21, 94, 160, 0.06);
          font-size: 14px;
          line-height: 1.7;
          text-align: center;
          margin-top: 32px;
          color: #0f0f0f;
        }

        /* Responsive */
        @container (min-width: 768px) {
          .s3-container { padding: 0 32px; }
          .s3-header__description { max-width: 720px; }
        }
        @container (min-width: 1024px) {
          .s3-container { padding: 0 32px; }
          .s3-header__description { max-width: 720px; }
          .s3-body { max-width: 860px; margin: 0 auto; }
          .s3-header__title { font-size: 40px; }
        }
        @container (min-width: 1440px) {
          .s3-container { padding: 0 120px; max-width: 1440px; }
          .s3-header__description { max-width: 860px; }
        }

        @container (max-width: 767px) {
          .s3-header { text-align: left; }
          .s3-header__title { font-size: 28px; }
          .s3-header__description { font-size: 16px; }
          .s3-body-text { font-size: 15px; }
        }
      `}</style>

      <section className="s3-section" id="section-3">
        <div className="s3-inner">
        <div className="s3-container">
          <div className="s3-header">
            <h2 className="s3-header__title">
              {sectionTitle} <span className="s3-header__title-highlight">{sectionTitleHighlight}</span>
            </h2>
            <p className="s3-header__description">{sectionDescription}</p>
          </div>

          <div className="s3-body">
            <p className="s3-body-text">{body1}</p>
            <p className="s3-body-text">{body2}</p>
            <div className="s3-banner" role="note">
              {bannerText}
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section03_SyntheticData, {
  marginTop: {
    type: ControlType.Number,
    title: "Top Margin",
    defaultValue: 0,
    min: 0,
    max: 200,
    step: 10,
  },
  sectionTitle: {
    type: ControlType.String,
    title: "Title (plain)",
    defaultValue: "Privacy-Safe",
  },
  sectionTitleHighlight: {
    type: ControlType.String,
    title: "Title (highlight)",
    defaultValue: "Synthetic Data",
  },
  sectionDescription: {
    type: ControlType.String,
    title: "Header Description",
    displayTextArea: true,
    defaultValue:
      "DTS includes privacy-safe synthetic data generation to expand coverage and repair imbalance when real data is restricted or incomplete.",
  },
  body1: {
    type: ControlType.String,
    title: "Body Paragraph 1",
    displayTextArea: true,
    defaultValue:
      "Synthetic data generation is one capability inside DTS -- not the company identity. DTS uses differential privacy as its mathematical foundation, providing formal guarantees that synthetic outputs cannot be reverse-engineered to individual records. This makes DTS suitable for regulated industries that need AI-ready datasets without exposing raw training data.",
  },
  body2: {
    type: ControlType.String,
    title: "Body Paragraph 2",
    displayTextArea: true,
    defaultValue:
      "DTS is a capability within Cubig's AI-Ready Data Infrastructure -- the infrastructure layer that makes enterprise data usable, privacy-safe, and stable for production AI execution. DTS specifically addresses the Restricted Data and Unusable Data blockers.",
  },
  bannerText: {
    type: ControlType.String,
    title: "Banner Text",
    displayTextArea: true,
    defaultValue: "Synthetic data is a DTS capability. It is not Cubig's top-level identity.",
  },
})
