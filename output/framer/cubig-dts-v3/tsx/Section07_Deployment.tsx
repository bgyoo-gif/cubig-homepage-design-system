import { addPropertyControls, ControlType } from "framer"

interface Props {
  title?: string
  bannerText?: string
  cardABtnLabel?: string
  cardABtnHref?: string
  cardBBtnLabel?: string
  cardBBtnHref?: string
}

export default function Section07_Deployment({
  title = "Standalone or Integrated with SynTitan",
  bannerText = "SynTitan performs data quality refinement as part of execution stability. SynTitan can use a subset of DTS capabilities when privacy-safe synthetic data is needed, while DTS is a full standalone enterprise synthetic data engine.",
  cardABtnLabel = "AWS Marketplace",
  cardABtnHref = "https://aws.amazon.com/marketplace",
  cardBBtnLabel = "See SynTitan Platform",
  cardBBtnHref = "/syntitan",
}: Props) {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s7-section {
          width: 100%;
          padding: 80px 0;
          background-color: #f7f7f7;
          font-family: "DM Sans", sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        .s7-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s7-section-header {
          margin-bottom: 32px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s7-title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: balance;
        }
        .s7-title-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }
        .s7-card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        .s7-card-gradient {
          padding: 2px;
          border-radius: 18px;
          box-shadow: rgba(113, 141, 176, 0.25) 0px 1px 20px 0px;
        }
        .s7-card-gradient--green {
          background: linear-gradient(109deg, #01CA51 0%, #FFEFF5 17%, #9AE6AD 43%, #C9FFE1 65%, #01CA51 84%, #01CA51 100%);
        }
        .s7-card-gradient--purple {
          background: linear-gradient(109deg, #FCD6FF 0%, #fff 17%, #FFEDFA 38%, #D48AFF 51%, #fff 73%, #FCD6FF 100%);
        }
        .s7-card-inner {
          border-radius: 16px;
          padding: 32px;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .s7-card-inner--green {
          background: linear-gradient(99deg, #F0FDF5 0%, #FCFCFE 58%, #fff 100%);
        }
        .s7-card-inner--purple {
          background: linear-gradient(99deg, #F8EDFF 0%, #FCFCFE 58%, #fff 100%);
        }
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
          border: 1px solid #a617ff;
          color: #a617ff;
          margin-bottom: 16px;
        }
        .s7-card-title {
          font-family: "DM Sans", sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          margin-bottom: 12px;
          text-wrap: balance;
        }
        .s7-card-desc {
          font-size: 14px;
          color: #636363;
          line-height: 1.7;
          margin-bottom: 24px;
        }
        .s7-checklist {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }
        .s7-check-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 16px;
          line-height: 1.5;
          color: #0f0f0f;
        }
        .s7-check-icon {
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
        }
        .s7-card-btn-wrap {
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
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap;
          text-decoration: none;
          padding: 12px 32px;
          background-color: transparent;
          color: #0f0f0f;
          border: 1px solid #e6e7e9;
        }
        .s7-btn:hover { background-color: #f7f7f7; }
        .s7-section-note {
          margin-top: 32px;
        }
        .s7-banner-info {
          padding: 16px 24px;
          border-top: 1px solid #e6e7e9;
          border-bottom: 1px solid #e6e7e9;
          background-color: rgba(21, 94, 160, 0.06);
          font-size: 14px;
          line-height: 1.7;
          text-align: center;
          color: #0f0f0f;
        }

        @media (min-width: 768px) {
          .s7-container { padding: 0 32px; }
          .s7-card-grid { grid-template-columns: repeat(2, 1fr); }
          .s7-title { font-size: 22px; }
          .s7-section-header { text-align: left; }
        }
        @media (min-width: 1024px) {
          .s7-container { padding: 0 32px; }
          .s7-title { font-size: 24px; }
        }
        @media (min-width: 1440px) {
          .s7-container { padding: 0 120px; max-width: 1440px; }
          .s7-title { font-size: 28px; }
        }
        @media (max-width: 767px) {
          .s7-section-header { text-align: left; }
          .s7-title { font-size: 20px; }
        }
      `}</style>
      <section className="s7-section">
        <div className="s7-container">
          <div className="s7-section-header">
            <h2 className="s7-title">
              Standalone or Integrated with <span className="s7-title-product">SynTitan</span>
            </h2>
          </div>
          <div className="s7-card-grid">
            <div className="s7-card-gradient s7-card-gradient--green">
              <div className="s7-card-inner s7-card-inner--green">
                <span className="s7-card-badge">MODE A - INDEPENDENT</span>
                <h3 className="s7-card-title">DTS Standalone</h3>
                <p className="s7-card-desc">
                  Use <span className="s7-title-product">DTS</span> without <span className="s7-title-product">SynTitan</span> -- directly against your data sources. Available on AWS Marketplace for enterprise procurement.
                </p>
                <ul className="s7-checklist">
                  {[
                    "Fix class imbalance -- oversample minority classes with distribution fidelity",
                    "Augment sparse datasets to production-grade volume",
                    "Generate edge cases and rare event samples",
                    "Replace missing values with statistically valid equivalents",
                    "Expand narrow training sets without data collection overhead",
                  ].map((item, i) => (
                    <li className="s7-check-item" key={i}>
                      <span className="s7-check-icon">✓</span>{item}
                    </li>
                  ))}
                </ul>
                <div className="s7-card-btn-wrap">
                  <a href={cardABtnHref} className="s7-btn" target="_blank" rel="noopener noreferrer">{cardABtnLabel}</a>
                </div>
              </div>
            </div>
            <div className="s7-card-gradient s7-card-gradient--purple">
              <div className="s7-card-inner s7-card-inner--purple">
                <span className="s7-card-badge">MODE B - INTEGRATED</span>
                <h3 className="s7-card-title">
                  <span className="s7-title-product">DTS</span> + <span className="s7-title-product">SynTitan</span>
                </h3>
                <p className="s7-card-desc">
                  When privacy or compliance is the blocker -- regulated data that can't reach models -- <span className="s7-title-product">DTS</span> runs inside <span className="s7-title-product">SynTitan</span> to generate privacy-safe replacements. The synthetic dataset is automatically versioned, bound to a Release State, and tracked in the Change Log.
                </p>
                <ul className="s7-checklist">
                  {[
                    "Replace GDPR, PIPA, HIPAA-restricted data -- no original data leaves the perimeter",
                    "Synthetic datasets versioned and bound to execution states",
                    "Change log tracks every data generation event",
                  ].map((item, i) => (
                    <li className="s7-check-item" key={i}>
                      <span className="s7-check-icon">✓</span>{item}
                    </li>
                  ))}
                </ul>
                <div className="s7-card-btn-wrap">
                  <a href={cardBBtnHref} className="s7-btn">
                    {cardBBtnLabel} <span className="s7-title-product">SynTitan</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="s7-section-note">
            <div className="s7-banner-info" role="note">
              <span className="s7-title-product">SynTitan</span> performs data quality refinement as part of execution stability. <span className="s7-title-product">SynTitan</span> can use a subset of <span className="s7-title-product">DTS</span> capabilities when privacy-safe synthetic data is needed, while <span className="s7-title-product">DTS</span> is a full standalone enterprise synthetic data engine.
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section07_Deployment, {
  title: { type: ControlType.String, title: "Title", defaultValue: "Standalone or Integrated with SynTitan" },
  bannerText: {
    type: ControlType.String,
    title: "Banner Text",
    defaultValue: "SynTitan performs data quality refinement as part of execution stability. SynTitan can use a subset of DTS capabilities when privacy-safe synthetic data is needed, while DTS is a full standalone enterprise synthetic data engine.",
    displayTextArea: true,
  },
  cardABtnLabel: { type: ControlType.String, title: "Card A Btn", defaultValue: "AWS Marketplace" },
  cardABtnHref: { type: ControlType.String, title: "Card A Href", defaultValue: "https://aws.amazon.com/marketplace" },
  cardBBtnLabel: { type: ControlType.String, title: "Card B Btn", defaultValue: "See" },
  cardBBtnHref: { type: ControlType.String, title: "Card B Href", defaultValue: "/syntitan" },
})
