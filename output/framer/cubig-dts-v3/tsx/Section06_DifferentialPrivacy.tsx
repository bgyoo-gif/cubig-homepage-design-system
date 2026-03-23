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
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s6-section {
          width: 100%;
          padding: 80px 0;
          background-color: #ffffff;
          font-family: "DM Sans", sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        .s6-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s6-section-header {
          margin-bottom: 32px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s6-title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          text-wrap: balance;
        }
        .s6-title-brand { color: #a617ff; }
        .s6-description {
          font-size: 18px;
          color: #636363;
          line-height: 1.7;
          max-width: 100%;
          margin: 0 auto;
        }
        .s6-banner-wrap { margin-bottom: 48px; }
        .s6-banner {
          padding: 16px 24px;
          border-top: 1px solid #e6e7e9;
          border-bottom: 1px solid #e6e7e9;
          background-color: rgba(166, 23, 255, 0.06);
          font-size: 14px;
          line-height: 1.7;
          text-align: center;
          color: #0f0f0f;
        }
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
        .s6-tab-num {
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
        .s6-tab--active {
          background-color: #0f0f0f;
          border-color: #0f0f0f;
          color: #ffffff;
          font-weight: 600;
        }
        .s6-tab--active .s6-tab-num {
          background-color: #ffffff;
          border-color: #ffffff;
          color: #0f0f0f;
        }
        .s6-tab:hover .s6-tab-num {
          background-color: #ffffff;
          border-color: #ffffff;
          color: #0f0f0f;
        }
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
        .s6-panel-desc {
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
          max-height: 420px;
        }
        .s6-panel-screenshot img {
          width: 100%;
          display: block;
          object-fit: cover;
          object-position: top left;
        }

        @media (min-width: 768px) {
          .s6-container { padding: 0 32px; }
          .s6-title { font-size: 22px; }
          .s6-description { max-width: 720px; }
          .s6-section-header { text-align: left; }
          .s6-panel-title { font-size: 36px; }
        }
        @media (min-width: 1024px) {
          .s6-container { padding: 0 32px; }
          .s6-title { font-size: 24px; }
          .s6-panel { grid-template-columns: 5fr 7fr; gap: 64px; }
        }
        @media (min-width: 1440px) {
          .s6-container { padding: 0 120px; max-width: 1440px; }
          .s6-title { font-size: 28px; }
          .s6-description { max-width: 860px; }
          .s6-panel { gap: 80px; }
        }
        @media (max-width: 767px) {
          .s6-section-header { text-align: left; }
          .s6-title { font-size: 20px; }
          .s6-panel-screenshot { max-height: 280px; }
          .s6-tabs-nav {
            justify-content: flex-start;
            flex-wrap: nowrap;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            padding-bottom: 8px;
          }
          .s6-tabs-nav::-webkit-scrollbar { display: none; }
        }
      `}</style>
      <section className="s6-section">
        <div className="s6-container">
          <div className="s6-section-header">
            <h2 className="s6-title">
              Mathematically Guaranteed <span className="s6-title-brand">Privacy Protection</span>
            </h2>
            <p className="s6-description">{description}</p>
          </div>
          <div className="s6-banner-wrap">
            <div className="s6-banner" role="note">
              {bannerText}
            </div>
          </div>
          <div className="s6-tabs-nav" role="tablist" aria-label="DP process steps">
            {tabs.map((tab, i) => (
              <button
                key={i}
                className={`s6-tab${activeTab === i ? " s6-tab--active" : ""}`}
                role="tab"
                aria-selected={activeTab === i}
                onClick={() => setActiveTab(i)}
              >
                <span className="s6-tab-num">{i + 1}</span>
                {tab.label}
              </button>
            ))}
          </div>
          <div className="s6-panel" role="tabpanel">
            <div className="s6-panel-content">
              <h3 className="s6-panel-title">{tabs[activeTab].title}</h3>
              <p className="s6-panel-desc">{tabs[activeTab].description}</p>
            </div>
            <div className="s6-panel-screenshot">
              <img
                src={tabs[activeTab].image}
                alt={tabs[activeTab].imageAlt}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
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
