// Section05_ThreeProblems.tsx — DTS Three Data Problems / One Engine (Card Grid)
// Framer Code Component
import { useEffect } from "react"
import { addPropertyControls, ControlType } from "framer"

const FONT_URL = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap"

interface Props {
  marginTop?: number
  sectionTitle?: string
  sectionTitleHighlight?: string
  sectionDescription?: string
  // Card 1
  card1Badge?: string
  card1Number?: string
  card1Title?: string
  card1Description?: string
  card1Check1?: string
  card1Check2?: string
  card1Check3?: string
  card1Check4?: string
  // Card 2
  card2Badge?: string
  card2Number?: string
  card2Title?: string
  card2Description?: string
  card2Check1?: string
  card2Check2?: string
  card2Check3?: string
  card2Check4?: string
  // Card 3
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
  marginTop = 0,
  sectionTitle = "Three Data Problems.",
  sectionTitleHighlight = "One Engine.",
  sectionDescription = "Data that can't be used, can't be shared, or doesn't exist in sufficient volume -- DTS resolves all three.",
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

        .s5-section {
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
        .s5-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s5-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        /* Section Header */
        .s5-header {
          margin-bottom: 48px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s5-header__title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          text-wrap: balance;
        }
        .s5-title-highlight {
          color: #725bea;
        }
        .s5-header__description {
          font-size: 18px;
          color: #636363;
          line-height: 1.7;
          max-width: 100%;
          margin: 0 auto;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        /* Card Grid */
        .s5-card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        /* Card */
        .s5-card {
          background-color: #ffffff;
          border-radius: 18px;
          border: 1px solid #e6e7e9;
          padding: 24px;
          box-shadow: 0px 24px 40px rgba(0, 0, 0, 0.04);
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }
        .s5-card__badge {
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
          border: 1px solid currentColor;
          margin-bottom: 16px;
        }
        .s5-card__badge--red {
          color: #ff3030;
          border-color: #ff3030;
        }
        .s5-card__badge--teal {
          color: #0e824c;
          border-color: #0e824c;
        }
        .s5-card__number {
          font-family: "DM Sans", sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: #9c9c9c;
          margin-bottom: 8px;
          line-height: 1.5;
        }
        .s5-card__title {
          font-family: "DM Sans", sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          margin-bottom: 12px;
          text-wrap: balance;
        }
        .s5-card__description {
          font-size: 14px;
          color: #636363;
          line-height: 1.7;
          flex: 1;
          margin-bottom: 0;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        /* Checklist */
        .s5-checklist {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 16px;
          padding: 0;
        }
        .s5-check-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 16px;
          line-height: 1.5;
          color: #0f0f0f;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s5-check-icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          margin-top: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0e824c;
          font-weight: 700;
          font-size: 16px;
          line-height: 1;
        }

        /* Responsive */
        @container (min-width: 768px) {
          .s5-container { padding: 0 32px; }
          .s5-card-grid { grid-template-columns: repeat(2, 1fr); }
          .s5-header__description { max-width: 720px; }
        }
        @container (min-width: 1024px) {
          .s5-container { padding: 0 32px; }
          .s5-card-grid { grid-template-columns: repeat(3, 1fr); }
          .s5-header__title { font-size: 40px; }
        }
        @container (min-width: 1440px) {
          .s5-container { padding: 0 120px; max-width: 1440px; }
          .s5-header__description { max-width: 860px; }
        }

        @container (max-width: 767px) {
          .s5-header { text-align: left; }
          .s5-header__title { font-size: 28px; }
          .s5-header__description { font-size: 16px; }
        }
      `}</style>

      <section className="s5-section" id="section-5">
        <div className="s5-inner">
        <div className="s5-container">
          <div className="s5-header">
            <h2 className="s5-header__title">
              {sectionTitle} <span className="s5-title-highlight">{sectionTitleHighlight}</span>
            </h2>
            <p className="s5-header__description">{sectionDescription}</p>
          </div>

          <div className="s5-card-grid">

            {/* Card 1: Restricted Data */}
            <article className="s5-card">
              <span className="s5-card__badge s5-card__badge--red">{card1Badge}</span>
              <p className="s5-card__number">{card1Number}</p>
              <h3 className="s5-card__title">{card1Title}</h3>
              <p className="s5-card__description">{card1Description}</p>
              <ul className="s5-checklist">
                <li className="s5-check-item">
                  <span className="s5-check-icon">✓</span>
                  {card1Check1}
                </li>
                <li className="s5-check-item">
                  <span className="s5-check-icon">✓</span>
                  {card1Check2}
                </li>
                <li className="s5-check-item">
                  <span className="s5-check-icon">✓</span>
                  {card1Check3}
                </li>
                <li className="s5-check-item">
                  <span className="s5-check-icon">✓</span>
                  {card1Check4}
                </li>
              </ul>
            </article>

            {/* Card 2: Unusable Data */}
            <article className="s5-card">
              <span className="s5-card__badge s5-card__badge--teal">{card2Badge}</span>
              <p className="s5-card__number">{card2Number}</p>
              <h3 className="s5-card__title">{card2Title}</h3>
              <p className="s5-card__description">{card2Description}</p>
              <ul className="s5-checklist">
                <li className="s5-check-item">
                  <span className="s5-check-icon">✓</span>
                  {card2Check1}
                </li>
                <li className="s5-check-item">
                  <span className="s5-check-icon">✓</span>
                  {card2Check2}
                </li>
                <li className="s5-check-item">
                  <span className="s5-check-icon">✓</span>
                  {card2Check3}
                </li>
                <li className="s5-check-item">
                  <span className="s5-check-icon">✓</span>
                  {card2Check4}
                </li>
              </ul>
            </article>

            {/* Card 3: Non-Accessible Data */}
            <article className="s5-card">
              <span className="s5-card__badge s5-card__badge--red">{card3Badge}</span>
              <p className="s5-card__number">{card3Number}</p>
              <h3 className="s5-card__title">{card3Title}</h3>
              <p className="s5-card__description">{card3Description}</p>
              <ul className="s5-checklist">
                <li className="s5-check-item">
                  <span className="s5-check-icon">✓</span>
                  {card3Check1}
                </li>
                <li className="s5-check-item">
                  <span className="s5-check-icon">✓</span>
                  {card3Check2}
                </li>
                <li className="s5-check-item">
                  <span className="s5-check-icon">✓</span>
                  {card3Check3}
                </li>
                <li className="s5-check-item">
                  <span className="s5-check-icon">✓</span>
                  {card3Check4}
                </li>
              </ul>
            </article>

          </div>
        </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section05_ThreeProblems, {
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
    defaultValue: "Three Data Problems.",
  },
  sectionTitleHighlight: {
    type: ControlType.String,
    title: "Title (highlight)",
    defaultValue: "One Engine.",
  },
  sectionDescription: {
    type: ControlType.String,
    title: "Description",
    displayTextArea: true,
    defaultValue:
      "Data that can't be used, can't be shared, or doesn't exist in sufficient volume -- DTS resolves all three.",
  },
  card1Badge: {
    type: ControlType.String,
    title: "Card 1 Badge",
    defaultValue: "RESTRICTED DATA",
  },
  card1Number: {
    type: ControlType.String,
    title: "Card 1 Number",
    defaultValue: "01 / 03",
  },
  card1Title: {
    type: ControlType.String,
    title: "Card 1 Title",
    defaultValue: "Privacy-Safe Replacement",
  },
  card1Description: {
    type: ControlType.String,
    title: "Card 1 Description",
    displayTextArea: true,
    defaultValue:
      "Sensitive or regulated data blocked by compliance rules. DTS generates a statistically equivalent synthetic dataset -- with no real personal information.",
  },
  card1Check1: {
    type: ControlType.String,
    title: "Card 1 Check 1",
    defaultValue: "Replace GDPR, PIPA, HIPAA, or CCPA-restricted data with DP-safe synthetic equivalents",
  },
  card1Check2: {
    type: ControlType.String,
    title: "Card 1 Check 2",
    defaultValue: "Differential privacy guarantee on all synthetic output",
  },
  card1Check3: {
    type: ControlType.String,
    title: "Card 1 Check 3",
    defaultValue: "Safe for cross-team, cross-border, and external use",
  },
  card1Check4: {
    type: ControlType.String,
    title: "Card 1 Check 4",
    defaultValue: "Full distribution fidelity preserved",
  },
  card2Badge: {
    type: ControlType.String,
    title: "Card 2 Badge",
    defaultValue: "UNUSABLE DATA",
  },
  card2Number: {
    type: ControlType.String,
    title: "Card 2 Number",
    defaultValue: "02 / 03",
  },
  card2Title: {
    type: ControlType.String,
    title: "Card 2 Title",
    defaultValue: "Coverage & Balance Expansion",
  },
  card2Description: {
    type: ControlType.String,
    title: "Card 2 Description",
    displayTextArea: true,
    defaultValue:
      "Data exists but is unfit for AI -- missing rare classes, biased distributions, or insufficient volume for reliable training.",
  },
  card2Check1: {
    type: ControlType.String,
    title: "Card 2 Check 1",
    defaultValue: "Augment underrepresented classes at scale",
  },
  card2Check2: {
    type: ControlType.String,
    title: "Card 2 Check 2",
    defaultValue: "Fix class imbalance without overfitting",
  },
  card2Check3: {
    type: ControlType.String,
    title: "Card 2 Check 3",
    defaultValue: "Generate edge case and rare event samples",
  },
  card2Check4: {
    type: ControlType.String,
    title: "Card 2 Check 4",
    defaultValue: "Expand small datasets to production-grade volumes",
  },
  card3Badge: {
    type: ControlType.String,
    title: "Card 3 Badge",
    defaultValue: "NON-ACCESSIBLE DATA",
  },
  card3Number: {
    type: ControlType.String,
    title: "Card 3 Number",
    defaultValue: "03 / 03",
  },
  card3Title: {
    type: ControlType.String,
    title: "Card 3 Title",
    defaultValue: "Safe Dataset Generation",
  },
  card3Description: {
    type: ControlType.String,
    title: "Card 3 Description",
    displayTextArea: true,
    defaultValue:
      "Data exists in a silo -- restricted by access controls, third-party agreements, or geographic regulations -- and can't reach training pipelines.",
  },
  card3Check1: {
    type: ControlType.String,
    title: "Card 3 Check 1",
    defaultValue: "Generate safe replacement datasets from inaccessible sources",
  },
  card3Check2: {
    type: ControlType.String,
    title: "Card 3 Check 2",
    defaultValue: "Unblock stalled validation and testing workflows",
  },
  card3Check3: {
    type: ControlType.String,
    title: "Card 3 Check 3",
    defaultValue: "Remove data access bottlenecks in regulated environments",
  },
  card3Check4: {
    type: ControlType.String,
    title: "Card 3 Check 4",
    defaultValue: "Maintain statistical characteristics without data transfer",
  },
})
