// Section02_KpiBand.tsx — LLM Capsule KPI Band + Certifications
// Framer Code Component
import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

interface KpiItem {
  number: string
  label: string
}

interface CertItem {
  label: string
  company: string
  certName: string
  year?: string
  isAward?: boolean
  awardLogoSrc?: string
}

interface Props {
  kpiItems?: KpiItem[]
  sectionEyebrow?: string
  sectionTitle?: string
  sectionTitleBrand?: string
  certItems?: CertItem[]
  badge1Text?: string
  badge2Text?: string
  badge3Text?: string
}

const defaultKpiItems: KpiItem[] = [
  { number: "98.1%", label: "PII Detection Accuracy" },
  { number: "99.14%", label: "Workflow Accuracy" },
  { number: "100%", label: "Structured PII Coverage" },
  { number: "98%", label: "Response Similarity" },
]

const defaultCertItems: CertItem[] = [
  { label: "Cert", company: "LLM Capsule", certName: "GS Certified", year: "2024.07", isAward: false },
  { label: "Cert", company: "Cubig", certName: "ISO/IEC 27001:2022", isAward: false },
  { label: "Cert", company: "Cubig", certName: "ISO/IEC 42001:2023", isAward: false },
  {
    label: "Awards",
    company: "Cubig",
    certName: "NextRise Global Innovator",
    isAward: true,
    awardLogoSrc: `${IMAGE_BASE}/awards-startup-worldcup.png`,
  },
]

export default function Section02_KpiBand({
  kpiItems = defaultKpiItems,
  sectionEyebrow = "Certifications",
  sectionTitle = "Certified and ",
  sectionTitleBrand = "Compliance-Ready",
  certItems = defaultCertItems,
  badge1Text = "GDPR Article 25 Data Minimization",
  badge2Text = "HIPAA PHI Protection",
  badge3Text = "Available on AWS Marketplace",
}: Props) {
  return (
    <>
      <style>{`
        .s2-section {
          width: 100%;
          padding: 80px 0;
          font-family: "DM Sans", sans-serif;
          color: #0f0f0f;
          background-color: #ffffff;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s2-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        /* KPI Band */
        .s2-kpi-band {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background-color: #e6e7e9;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 80px;
        }
        .s2-kpi-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px 24px;
          text-align: center;
          background: linear-gradient(135deg, #f0ecff 0%, #ede9ff 100%);
          gap: 8px;
        }
        .s2-kpi-number {
          font-family: "DM Sans", sans-serif;
          font-size: 48px;
          font-weight: 700;
          color: #3061f2;
          line-height: 1;
          letter-spacing: -2px;
        }
        .s2-kpi-label {
          font-size: 14px;
          color: #636363;
          line-height: 1.4;
          margin: 0;
        }

        /* Section Header */
        .s2-section-header {
          margin-bottom: 48px;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s2-eyebrow {
          display: block;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #636363;
          margin-bottom: 12px;
        }
        .s2-section-title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -1px;
          margin: 0;
        }
        .s2-title-brand {
          background: linear-gradient(130deg, #6C54A0, #b44fcc 50%, #ff266a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Cert Grid */
        .s2-cert-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-bottom: 32px;
        }
        .s2-cert-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 32px 24px;
          border: 1px solid #e6e7e9;
          border-radius: 16px;
          text-align: center;
          gap: 8px;
          background-color: #ffffff;
        }
        .s2-cert-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #9c9c9c;
        }
        .s2-cert-company {
          font-size: 14px;
          font-weight: 600;
          color: #0f0f0f;
        }
        .s2-cert-company-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }
        .s2-cert-wreath {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 120px;
          height: 60px;
          margin: 4px auto;
        }
        .s2-cert-wreath-left,
        .s2-cert-wreath-right {
          position: absolute;
          width: 36px;
          height: auto;
          object-fit: contain;
        }
        .s2-cert-wreath-left { left: 0; }
        .s2-cert-wreath-right { right: 0; }
        .s2-cert-name {
          font-size: 14px;
          font-weight: 700;
          color: #0f0f0f;
          z-index: 1;
        }
        .s2-cert-year {
          font-size: 12px;
          color: #9c9c9c;
        }
        .s2-cert-award-logo {
          width: 48px;
          height: auto;
          object-fit: contain;
          z-index: 1;
        }

        /* Badge Row */
        .s2-badge-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .s2-badge {
          display: inline-flex;
          align-items: center;
          padding: 6px 14px;
          border-radius: 9999px;
          font-size: 13px;
          font-weight: 500;
          line-height: 1;
        }
        .s2-badge--success {
          background-color: #e6f4ea;
          color: #1a7c3a;
        }
        .s2-badge--purple {
          background-color: #f0ecff;
          color: #6C54A0;
        }

        /* Responsive */
        @media (min-width: 768px) {
          .s2-container { padding: 0 32px; }
          .s2-kpi-band { grid-template-columns: repeat(4, 1fr); }
          .s2-cert-grid { grid-template-columns: repeat(4, 1fr); }
          .s2-section-title { font-size: 48px; }
        }
        @media (min-width: 1024px) {
          .s2-container { padding: 0 32px; }
          .s2-kpi-number { font-size: 56px; }
        }
        @media (min-width: 1440px) {
          .s2-container { padding: 0 120px; max-width: 1440px; }
        }
      `}</style>

      <section className="s2-section">
        <div className="s2-container">
          {/* KPI Band */}
          <div className="s2-kpi-band">
            {kpiItems.map((item, i) => (
              <div key={i} className="s2-kpi-item">
                <span className="s2-kpi-number">{item.number}</span>
                <p className="s2-kpi-label">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Section Header */}
          <div className="s2-section-header">
            <span className="s2-eyebrow">{sectionEyebrow}</span>
            <h2 className="s2-section-title">
              {sectionTitle}
              <span className="s2-title-brand">{sectionTitleBrand}</span>
            </h2>
          </div>

          {/* Cert Grid */}
          <div className="s2-cert-grid">
            {certItems.map((cert, i) => (
              <article key={i} className="s2-cert-card">
                <span className="s2-cert-label">{cert.label}</span>
                <span className="s2-cert-company">
                  {cert.company === "LLM Capsule" ? (
                    <span className="s2-cert-company-product">{cert.company}</span>
                  ) : (
                    cert.company
                  )}
                </span>
                <div className="s2-cert-wreath">
                  <img
                    className="s2-cert-wreath-left"
                    src={`${IMAGE_BASE}/cert-left.png`}
                    alt=""
                  />
                  <img
                    className="s2-cert-wreath-right"
                    src={`${IMAGE_BASE}/cert-right.png`}
                    alt=""
                  />
                  {cert.isAward && cert.awardLogoSrc ? (
                    <img
                      src={cert.awardLogoSrc}
                      alt={cert.certName}
                      className="s2-cert-award-logo"
                    />
                  ) : (
                    <span className="s2-cert-name">{cert.certName}</span>
                  )}
                </div>
                {cert.isAward && (
                  <span className="s2-cert-name">{cert.certName}</span>
                )}
                {cert.year && (
                  <span className="s2-cert-year">{cert.year}</span>
                )}
              </article>
            ))}
          </div>

          {/* Badge Row */}
          <div className="s2-badge-row">
            <span className="s2-badge s2-badge--success">{badge1Text}</span>
            <span className="s2-badge s2-badge--success">{badge2Text}</span>
            <span className="s2-badge s2-badge--purple">{badge3Text}</span>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section02_KpiBand, {
  sectionEyebrow: {
    type: ControlType.String,
    title: "Eyebrow",
    defaultValue: "Certifications",
  },
  sectionTitle: {
    type: ControlType.String,
    title: "Title",
    defaultValue: "Certified and ",
  },
  sectionTitleBrand: {
    type: ControlType.String,
    title: "Title (Brand)",
    defaultValue: "Compliance-Ready",
  },
  badge1Text: {
    type: ControlType.String,
    title: "Badge 1",
    defaultValue: "GDPR Article 25 Data Minimization",
  },
  badge2Text: {
    type: ControlType.String,
    title: "Badge 2",
    defaultValue: "HIPAA PHI Protection",
  },
  badge3Text: {
    type: ControlType.String,
    title: "Badge 3",
    defaultValue: "Available on AWS Marketplace",
  },
})
