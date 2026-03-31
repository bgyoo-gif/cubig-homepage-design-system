// Section07_Deployment.tsx — DTS Standalone or Integrated with SynTitan
// Framer Code Component
import { useEffect } from "react"
import { addPropertyControls, ControlType } from "framer"

const FONT_URL = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap"

interface Props {
  marginTop?: number
  sectionTitle?: string
  sectionTitleProduct?: string
  cardAMode?: string
  cardATitle?: string
  cardADescription?: string
  cardAItem1?: string
  cardAItem2?: string
  cardAItem3?: string
  cardAItem4?: string
  cardAItem5?: string
  cardABtnText?: string
  cardABtnHref?: string
  cardBMode?: string
  cardBTitle?: string
  cardBDescription?: string
  cardBItem1?: string
  cardBItem2?: string
  cardBItem3?: string
  cardBBtnText?: string
  cardBBtnHref?: string
  noteText?: string
}

export default function Section07_Deployment({
  marginTop = 0,
  sectionTitle = "Standalone or Integrated with",
  sectionTitleProduct = "SynTitan",
  cardAMode = "MODE A - INDEPENDENT",
  cardATitle = "DTS Standalone",
  cardADescription = "Use DTS without SynTitan -- directly against your data sources. Available on AWS Marketplace for enterprise procurement.",
  cardAItem1 = "Fix class imbalance -- oversample minority classes with distribution fidelity",
  cardAItem2 = "Augment sparse datasets to production-grade volume",
  cardAItem3 = "Generate edge cases and rare event samples",
  cardAItem4 = "Replace missing values with statistically valid equivalents",
  cardAItem5 = "Expand narrow training sets without data collection overhead",
  cardABtnText = "AWS Marketplace",
  cardABtnHref = "https://aws.amazon.com/marketplace",
  cardBMode = "MODE B - INTEGRATED",
  cardBTitle = "DTS + SynTitan",
  cardBDescription = "When privacy or compliance is the blocker -- regulated data that can't reach models -- DTS runs inside SynTitan to generate privacy-safe replacements. The synthetic dataset is automatically versioned, bound to a Release State, and tracked in the Change Log.",
  cardBItem1 = "Replace GDPR, PIPA, HIPAA-restricted data -- no original data leaves the perimeter",
  cardBItem2 = "Synthetic datasets versioned and bound to execution states",
  cardBItem3 = "Change log tracks every data generation event",
  cardBBtnText = "See SynTitan Platform",
  cardBBtnHref = "/syntitan",
  noteText = "SynTitan performs data quality refinement as part of execution stability. SynTitan can use a subset of DTS capabilities when privacy-safe synthetic data is needed, while DTS is a full standalone enterprise synthetic data engine.",
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

        .s7-section {
          width: 100%; overflow: hidden; box-sizing: border-box;
          padding: 80px 0;
          margin-top: ${marginTop}px;
          background-color: #f7f7f7;
          font-family: "DM Sans", sans-serif;
          color: #0f0f0f;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s7-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s7-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        /* Section Header */
        .s7-header {
          margin-bottom: 48px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s7-header__title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 0;
          text-wrap: balance;
        }
        .s7-header__title-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }

        /* Card Grid */
        .s7-card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        /* Gradient Card — Green */
        .s7-card-green {
          padding: 2px;
          border-radius: 18px;
          background: linear-gradient(109deg, #01CA51 0%, #FFEFF5 17%, #9AE6AD 43%, #C9FFE1 65%, #01CA51 84%, #01CA51 100%);
          box-shadow: rgba(113, 141, 176, 0.25) 0px 1px 20px 0px;
        }
        .s7-card-green .s7-card-inner {
          background: linear-gradient(99deg, #F0FDF5 0%, #FCFCFE 58%, #fff 100%);
        }

        /* Gradient Card — Purple */
        .s7-card-purple {
          padding: 2px;
          border-radius: 18px;
          background: linear-gradient(109deg, #FCD6FF 0%, #fff 17%, #FFEDFA 38%, #D48AFF 51%, #fff 73%, #FCD6FF 100%);
          box-shadow: rgba(113, 141, 176, 0.25) 0px 1px 20px 0px;
        }
        .s7-card-purple .s7-card-inner {
          background: linear-gradient(99deg, #F8EDFF 0%, #FCFCFE 58%, #fff 100%);
        }

        .s7-card-inner {
          border-radius: calc(18px - 2px);
          padding: 32px;
          height: 100%;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }

        /* Card Badge */
        .s7-card-badge {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          padding: 4px 12px;
          border-radius: 9999px;
          font-size: 12px;
          font-weight: 500;
          font-family: "Fragment Mono", monospace;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          border: 1px solid #725bea;
          color: #725bea;
          margin-bottom: 16px;
        }

        /* Card Title */
        .s7-card-title {
          font-family: "DM Sans", sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          margin-bottom: 12px;
          text-wrap: balance;
        }
        .s7-card-title-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }

        /* Card Description */
        .s7-card-description {
          font-size: 14px;
          color: #636363;
          line-height: 1.7;
          margin-bottom: 24px;
        }

        /* Bullet list */
        .s7-bullet {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
          padding: 0;
        }
        .s7-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 16px;
          line-height: 1.5;
          color: #0f0f0f;
        }
        .s7-bullet-icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          margin-top: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .s7-bullet-icon::before {
          content: "✓";
          color: #0e824c;
          font-weight: 700;
          font-size: 16px;
          line-height: 1;
        }

        /* Card Button */
        .s7-card-button {
          margin-top: auto;
          padding-top: 24px;
        }
        .s7-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          font-size: 16px;
          cursor: pointer;
          border: 1px solid #e6e7e9;
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap;
          text-decoration: none;
          padding: 12px 32px;
          background-color: transparent;
          color: #0f0f0f;
        }
        .s7-btn:hover { background-color: #f7f7f7; }

        /* Note Banner */
        .s7-note {
          margin-top: 32px;
          padding: 16px 24px;
          border-top: 1px solid #e6e7e9;
          border-bottom: 1px solid #e6e7e9;
          background-color: rgba(21, 94, 160, 0.06);
          font-size: 14px;
          line-height: 1.7;
          text-align: center;
          color: #0f0f0f;
        }

        /* Responsive */
        @container (max-width: 767px) {
          .s7-header { text-align: left; }
          .s7-header__title { font-size: 28px; }
        }
        @container (min-width: 768px) {
          .s7-container { padding: 0 32px; }
          .s7-card-grid { grid-template-columns: repeat(2, 1fr); }
          .s7-header__title { font-size: 40px; }
        }
        @container (min-width: 1024px) {
          .s7-container { padding: 0 32px; }
        }
        @container (min-width: 1440px) {
          .s7-container { padding: 0 120px; max-width: 1440px; }
        }
      `}</style>

      <section className="s7-section" id="section-7">
        <div className="s7-inner">
        <div className="s7-container">
          <div className="s7-header">
            <h2 className="s7-header__title">
              {sectionTitle}{" "}
              <span className="s7-header__title-product">{sectionTitleProduct}</span>
            </h2>
          </div>

          <div className="s7-card-grid">
            {/* Card A: DTS Standalone */}
            <div className="s7-card-green">
              <div className="s7-card-inner">
                <span className="s7-card-badge">{cardAMode}</span>
                <h3 className="s7-card-title">{cardATitle}</h3>
                <p className="s7-card-description">{cardADescription}</p>
                <ul className="s7-bullet">
                  {[cardAItem1, cardAItem2, cardAItem3, cardAItem4, cardAItem5].map(
                    (item, i) => (
                      <li key={i} className="s7-bullet-item">
                        <span className="s7-bullet-icon"></span>
                        {item}
                      </li>
                    )
                  )}
                </ul>
                <div className="s7-card-button">
                  <a
                    href={cardABtnHref}
                    className="s7-btn"
                    target={cardABtnHref?.startsWith("http") ? "_blank" : undefined}
                    rel={cardABtnHref?.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {cardABtnText}
                  </a>
                </div>
              </div>
            </div>

            {/* Card B: DTS + SynTitan */}
            <div className="s7-card-purple">
              <div className="s7-card-inner">
                <span className="s7-card-badge">{cardBMode}</span>
                <h3 className="s7-card-title">{cardBTitle}</h3>
                <p className="s7-card-description">{cardBDescription}</p>
                <ul className="s7-bullet">
                  {[cardBItem1, cardBItem2, cardBItem3].map((item, i) => (
                    <li key={i} className="s7-bullet-item">
                      <span className="s7-bullet-icon"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="s7-card-button">
                  <a href={cardBBtnHref} className="s7-btn">
                    {cardBBtnText}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Overlap Note Banner */}
          <div className="s7-note" role="note">
            {noteText}
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section07_Deployment, {
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
    title: "Section Title (plain)",
    defaultValue: "Standalone or Integrated with",
  },
  sectionTitleProduct: {
    type: ControlType.String,
    title: "Section Title (product)",
    defaultValue: "SynTitan",
  },
  cardAMode: {
    type: ControlType.String,
    title: "Card A Mode",
    defaultValue: "MODE A - INDEPENDENT",
  },
  cardATitle: {
    type: ControlType.String,
    title: "Card A Title",
    defaultValue: "DTS Standalone",
  },
  cardADescription: {
    type: ControlType.String,
    title: "Card A Description",
    displayTextArea: true,
    defaultValue:
      "Use DTS without SynTitan -- directly against your data sources. Available on AWS Marketplace for enterprise procurement.",
  },
  cardAItem1: {
    type: ControlType.String,
    title: "Card A Item 1",
    defaultValue: "Fix class imbalance -- oversample minority classes with distribution fidelity",
  },
  cardAItem2: {
    type: ControlType.String,
    title: "Card A Item 2",
    defaultValue: "Augment sparse datasets to production-grade volume",
  },
  cardAItem3: {
    type: ControlType.String,
    title: "Card A Item 3",
    defaultValue: "Generate edge cases and rare event samples",
  },
  cardAItem4: {
    type: ControlType.String,
    title: "Card A Item 4",
    defaultValue: "Replace missing values with statistically valid equivalents",
  },
  cardAItem5: {
    type: ControlType.String,
    title: "Card A Item 5",
    defaultValue: "Expand narrow training sets without data collection overhead",
  },
  cardABtnText: {
    type: ControlType.String,
    title: "Card A Button Text",
    defaultValue: "AWS Marketplace",
  },
  cardABtnHref: {
    type: ControlType.String,
    title: "Card A Button Link",
    defaultValue: "https://aws.amazon.com/marketplace",
  },
  cardBMode: {
    type: ControlType.String,
    title: "Card B Mode",
    defaultValue: "MODE B - INTEGRATED",
  },
  cardBTitle: {
    type: ControlType.String,
    title: "Card B Title",
    defaultValue: "DTS + SynTitan",
  },
  cardBDescription: {
    type: ControlType.String,
    title: "Card B Description",
    displayTextArea: true,
    defaultValue:
      "When privacy or compliance is the blocker -- regulated data that can't reach models -- DTS runs inside SynTitan to generate privacy-safe replacements. The synthetic dataset is automatically versioned, bound to a Release State, and tracked in the Change Log.",
  },
  cardBItem1: {
    type: ControlType.String,
    title: "Card B Item 1",
    defaultValue: "Replace GDPR, PIPA, HIPAA-restricted data -- no original data leaves the perimeter",
  },
  cardBItem2: {
    type: ControlType.String,
    title: "Card B Item 2",
    defaultValue: "Synthetic datasets versioned and bound to execution states",
  },
  cardBItem3: {
    type: ControlType.String,
    title: "Card B Item 3",
    defaultValue: "Change log tracks every data generation event",
  },
  cardBBtnText: {
    type: ControlType.String,
    title: "Card B Button Text",
    defaultValue: "See SynTitan Platform",
  },
  cardBBtnHref: {
    type: ControlType.String,
    title: "Card B Button Link",
    defaultValue: "/syntitan",
  },
  noteText: {
    type: ControlType.String,
    title: "Note Banner Text",
    displayTextArea: true,
    defaultValue:
      "SynTitan performs data quality refinement as part of execution stability. SynTitan can use a subset of DTS capabilities when privacy-safe synthetic data is needed, while DTS is a full standalone enterprise synthetic data engine.",
  },
})
