// Section06_DifferentialPrivacy.tsx — DTS Differential Privacy (Step Tabs)
// Framer Code Component
import { useState } from "react"
import { useEffect } from "react"
import { addPropertyControls, ControlType } from "framer"

const FONT_URL = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap"

const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

interface Tab {
  number: string
  label: string
  title: string
  description: string
}

interface Props {
  marginTop?: number
  sectionTitlePlain?: string
  sectionTitleHighlight?: string
  sectionDescription?: string
  bannerText?: string
  tab1Label?: string
  tab1Title?: string
  tab1Description?: string
  tab2Label?: string
  tab2Title?: string
  tab2Description?: string
  tab3Label?: string
  tab3Title?: string
  tab3Description?: string
  tab4Label?: string
  tab4Title?: string
  tab4Description?: string
}

export default function Section06_DifferentialPrivacy({
  marginTop = 0,
  sectionTitlePlain = "Mathematically Guaranteed",
  sectionTitleHighlight = "Privacy Protection",
  sectionDescription = "Differential privacy (DP) is a mathematical framework that guarantees any single individual's data cannot be identified from the synthetic output -- regardless of what an attacker already knows.",
  bannerText = "The probability of any inference about an individual from the synthetic dataset is bounded by a mathematically defined epsilon -- regardless of external knowledge.",
  tab1Label = "Statistical Profiling",
  tab1Title = "Statistical Profiling",
  tab1Description = "DTS analyzes the real dataset's statistical properties -- distributions, correlations, marginals -- without storing raw records.",
  tab2Label = "DP Noise Injection",
  tab2Title = "DP Noise Injection",
  tab2Description = "Calibrated noise is injected into the statistical model according to DP bounds. Individual data points become mathematically unidentifiable.",
  tab3Label = "Synthetic Generation",
  tab3Title = "Synthetic Generation",
  tab3Description = "New records are sampled from the DP-protected model. Output is statistically representative but contains no real personal information.",
  tab4Label = "Fidelity Validation",
  tab4Title = "Fidelity Validation",
  tab4Description = "Generated data is validated against the original distribution. Quality and utility metrics confirm suitability for training and validation use.",
}: Props) {
  const [activeTab, setActiveTab] = useState(0)

  const tabs: Tab[] = [
    { number: "1", label: tab1Label, title: tab1Title, description: tab1Description },
    { number: "2", label: tab2Label, title: tab2Title, description: tab2Description },
    { number: "3", label: tab3Label, title: tab3Title, description: tab3Description },
    { number: "4", label: tab4Label, title: tab4Title, description: tab4Description },
  ]

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

        .s6-section {
          width: 100%;
          padding: 80px 0;
          margin-top: ${marginTop}px;
          background-color: #ffffff;
          font-family: "DM Sans", sans-serif;
          color: #0f0f0f;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s6-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s6-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        /* Section Header */
        .s6-header {
          margin-bottom: 48px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s6-header__title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          text-wrap: balance;
        }
        .s6-header__title-brand {
          color: #725bea;
        }
        .s6-header__description {
          font-size: 18px;
          color: #636363;
          line-height: 1.7;
          max-width: 100%;
          margin: 0 auto;
          text-wrap: pretty;
        }

        /* Banner */
        .s6-banner {
          margin-bottom: 48px;
          padding: 16px 24px;
          border-top: 1px solid #e6e7e9;
          border-bottom: 1px solid #e6e7e9;
          background-color: rgba(114, 91, 234, 0.06);
          font-size: 14px;
          line-height: 1.7;
          text-align: center;
          color: #0f0f0f;
        }

        /* Step Tabs Nav */
        .s6-tabs-nav {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 64px;
        }
        .s6-tab {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 24px;
          border-radius: 9999px;
          border: 1px solid #e6e7e9;
          background-color: #ffffff;
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #636363;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .s6-tab:hover {
          background-color: #0f0f0f;
          border-color: #0f0f0f;
          color: #ffffff;
        }
        .s6-tab:hover .s6-tab-number {
          background-color: #ffffff;
          border-color: #ffffff;
          color: #0f0f0f;
        }
        .s6-tab--active {
          background-color: #0f0f0f;
          border-color: #0f0f0f;
          color: #ffffff;
          font-weight: 600;
        }
        .s6-tab--active .s6-tab-number {
          background-color: #ffffff;
          border-color: #ffffff;
          color: #0f0f0f;
        }
        .s6-tab-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background-color: #ececec;
          border: 1px solid #e6e7e9;
          font-size: 12px;
          font-weight: 700;
          color: #636363;
          flex-shrink: 0;
          transition: all 0.2s;
        }

        /* Tab Panel */
        .s6-panel {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          align-items: center;
        }
        .s6-panel-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .s6-panel-title {
          font-family: "DM Sans", sans-serif;
          font-size: 30px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          text-wrap: balance;
        }
        .s6-panel-description {
          font-size: 16px;
          color: #636363;
          line-height: 1.7;
        }
        .s6-panel-screenshot {
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid #e6e7e9;
          box-shadow: 0px 24px 40px rgba(0, 0, 0, 0.04);
          background-color: #f7f7f7;
        }
        .s6-screenshot-placeholder {
          background: #f2f2f2;
          border-radius: 8px;
          height: 280px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9c9c9c;
          font-size: 14px;
        }

        /* Responsive */
        @container (max-width: 767px) {
          .s6-header { text-align: left; }
          .s6-header__title { font-size: 28px; }
          .s6-tabs-nav {
            justify-content: flex-start;
            flex-wrap: nowrap;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            padding-bottom: 8px;
          }
          .s6-tabs-nav::-webkit-scrollbar { display: none; }
          .s6-panel-title { font-size: 26px; }
        }
        @container (min-width: 768px) {
          .s6-container { padding: 0 32px; }
          .s6-header__description { max-width: 720px; }
          .s6-header__title { font-size: 40px; }
          .s6-panel-title { font-size: 36px; }
        }
        @container (min-width: 1024px) {
          .s6-container { padding: 0 32px; }
          .s6-panel {
            grid-template-columns: 5fr 7fr;
            gap: 64px;
          }
          .s6-header__description { max-width: 720px; }
        }
        @container (min-width: 1440px) {
          .s6-container { padding: 0 120px; max-width: 1440px; }
          .s6-panel { gap: 80px; }
          .s6-header__description { max-width: 860px; }
        }
      `}</style>

      <section className="s6-section" id="section-6">
        <div className="s6-inner">
        <div className="s6-container">
          <div className="s6-header">
            <h2 className="s6-header__title">
              {sectionTitlePlain}{" "}
              <span className="s6-header__title-brand">{sectionTitleHighlight}</span>
            </h2>
            <p className="s6-header__description">{sectionDescription}</p>
          </div>

          <div className="s6-banner" role="note">
            {bannerText}
          </div>

          <div
            className="s6-tabs-nav"
            role="tablist"
            aria-label="DP process steps"
          >
            {tabs.map((tab, i) => (
              <button
                key={i}
                className={`s6-tab${activeTab === i ? " s6-tab--active" : ""}`}
                role="tab"
                aria-selected={activeTab === i}
                onClick={() => setActiveTab(i)}
              >
                <span className="s6-tab-number">{tab.number}</span>
                {tab.label}
              </button>
            ))}
          </div>

          <div className="s6-panel" role="tabpanel">
            <div className="s6-panel-content">
              <h3 className="s6-panel-title">{tabs[activeTab].title}</h3>
              <p className="s6-panel-description">
                {tabs[activeTab].description}
              </p>
            </div>
            <div className="s6-panel-screenshot">
              <div
                className="s6-screenshot-placeholder"
                aria-label="Screenshot placeholder"
              >
                [Screenshot placeholder]
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section06_DifferentialPrivacy, {
  marginTop: {
    type: ControlType.Number,
    title: "Top Margin",
    defaultValue: 0,
    min: 0,
    max: 200,
    step: 10,
  },
  sectionTitlePlain: {
    type: ControlType.String,
    title: "Title (plain)",
    defaultValue: "Mathematically Guaranteed",
  },
  sectionTitleHighlight: {
    type: ControlType.String,
    title: "Title (highlight)",
    defaultValue: "Privacy Protection",
  },
  sectionDescription: {
    type: ControlType.String,
    title: "Section Description",
    displayTextArea: true,
    defaultValue:
      "Differential privacy (DP) is a mathematical framework that guarantees any single individual's data cannot be identified from the synthetic output -- regardless of what an attacker already knows.",
  },
  bannerText: {
    type: ControlType.String,
    title: "Banner Text",
    displayTextArea: true,
    defaultValue:
      "The probability of any inference about an individual from the synthetic dataset is bounded by a mathematically defined epsilon -- regardless of external knowledge.",
  },
  tab1Label: {
    type: ControlType.String,
    title: "Tab 1 Label",
    defaultValue: "Statistical Profiling",
  },
  tab1Title: {
    type: ControlType.String,
    title: "Tab 1 Title",
    defaultValue: "Statistical Profiling",
  },
  tab1Description: {
    type: ControlType.String,
    title: "Tab 1 Description",
    displayTextArea: true,
    defaultValue:
      "DTS analyzes the real dataset's statistical properties -- distributions, correlations, marginals -- without storing raw records.",
  },
  tab2Label: {
    type: ControlType.String,
    title: "Tab 2 Label",
    defaultValue: "DP Noise Injection",
  },
  tab2Title: {
    type: ControlType.String,
    title: "Tab 2 Title",
    defaultValue: "DP Noise Injection",
  },
  tab2Description: {
    type: ControlType.String,
    title: "Tab 2 Description",
    displayTextArea: true,
    defaultValue:
      "Calibrated noise is injected into the statistical model according to DP bounds. Individual data points become mathematically unidentifiable.",
  },
  tab3Label: {
    type: ControlType.String,
    title: "Tab 3 Label",
    defaultValue: "Synthetic Generation",
  },
  tab3Title: {
    type: ControlType.String,
    title: "Tab 3 Title",
    defaultValue: "Synthetic Generation",
  },
  tab3Description: {
    type: ControlType.String,
    title: "Tab 3 Description",
    displayTextArea: true,
    defaultValue:
      "New records are sampled from the DP-protected model. Output is statistically representative but contains no real personal information.",
  },
  tab4Label: {
    type: ControlType.String,
    title: "Tab 4 Label",
    defaultValue: "Fidelity Validation",
  },
  tab4Title: {
    type: ControlType.String,
    title: "Tab 4 Title",
    defaultValue: "Fidelity Validation",
  },
  tab4Description: {
    type: ControlType.String,
    title: "Tab 4 Description",
    displayTextArea: true,
    defaultValue:
      "Generated data is validated against the original distribution. Quality and utility metrics confirm suitability for training and validation use.",
  },
})
