// Section07_DetectionCoverage.tsx — LLM Capsule Detection Coverage
// Framer Code Component
import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

interface FeatureItem {
  icon: string
  iconLabel: string
  title: string
  tags: string[]
}

interface Props {
  eyebrow?: string
  title?: string
  titleBrand?: string
  features?: FeatureItem[]
}

const defaultFeatures: FeatureItem[] = [
  {
    icon: "ID",
    iconLabel: "Identity",
    title: "Personal Identifiers",
    tags: ["Full Name", "Date of Birth", "National ID", "Passport No.", "Email Address", "Phone Number", "Home Address"],
  },
  {
    icon: "$",
    iconLabel: "Financial",
    title: "Financial Data",
    tags: ["Account Number", "Credit Card", "Routing Number", "Tax ID", "Transaction ID", "Policy Number"],
  },
  {
    icon: "+",
    iconLabel: "Medical",
    title: "Health & Clinical",
    tags: ["Patient ID", "ICD Codes", "Diagnosis Terms", "Provider Name", "Clinical Dates", "Prescription Data"],
  },
  {
    icon: "B",
    iconLabel: "Organizational",
    title: "Enterprise Data",
    tags: ["Employee ID", "Internal Codes", "Customer ID", "Contract Number", "Project Code"],
  },
  {
    icon: "P",
    iconLabel: "Location",
    title: "Geographic Data",
    tags: ["Street Address", "Postcode / ZIP", "GPS Coordinates", "Region / State"],
  },
  {
    icon: "*",
    iconLabel: "Custom",
    title: "Enterprise-Defined Fields",
    tags: ["Custom Patterns", "Domain-Specific IDs", "Regex Rules", "Industry Codes"],
  },
]

export default function Section07_DetectionCoverage({
  eyebrow = "Detection Coverage",
  title = "What was blocking your AI. ",
  titleBrand = "Now removed.",
  features = defaultFeatures,
}: Props) {
  return (
    <>
      <style>{`
        .s7-section {
          width: 100%;
          padding: 80px 0;
          font-family: "DM Sans", sans-serif;
          color: #0f0f0f;
          background-color: #ffffff;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s7-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        /* Section Header */
        .s7-section-header {
          margin-bottom: 48px;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s7-eyebrow {
          display: block;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #636363;
          margin-bottom: 12px;
        }
        .s7-section-title {
          font-family: "DM Sans", sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -1px;
          margin: 0;
        }
        .s7-title-brand {
          background: linear-gradient(130deg, #6C54A0, #b44fcc 50%, #ff266a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Feature Grid */
        .s7-feature-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        .s7-feature-item {
          background: #f7f7f7;
          border: 1px solid #e6e7e9;
          border-radius: 16px;
          padding: 24px;
        }
        .s7-feature-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: #f0ecff;
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #6C54A0;
          margin-bottom: 12px;
        }
        .s7-feature-title {
          font-size: 16px;
          font-weight: 700;
          color: #0f0f0f;
          margin: 0 0 12px;
        }
        .s7-tag-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .s7-tag {
          display: inline-flex;
          align-items: center;
          padding: 4px 10px;
          background: #ffffff;
          border: 1px solid #e6e7e9;
          border-radius: 9999px;
          font-size: 12px;
          color: #636363;
          font-weight: 500;
        }

        /* Responsive */
        @media (min-width: 768px) {
          .s7-container { padding: 0 32px; }
          .s7-feature-grid { grid-template-columns: repeat(2, 1fr); }
          .s7-section-title { font-size: 42px; }
        }
        @media (min-width: 1024px) {
          .s7-container { padding: 0 32px; }
          .s7-feature-grid { grid-template-columns: repeat(3, 1fr); }
          .s7-section-title { font-size: 48px; }
        }
        @media (min-width: 1440px) {
          .s7-container { padding: 0 120px; max-width: 1440px; }
        }
      `}</style>

      <section className="s7-section">
        <div className="s7-container">
          {/* Section Header */}
          <div className="s7-section-header">
            <span className="s7-eyebrow">{eyebrow}</span>
            <h2 className="s7-section-title">
              {title}
              <span className="s7-title-brand">{titleBrand}</span>
            </h2>
          </div>

          {/* Feature Grid */}
          <div className="s7-feature-grid">
            {features.map((item, i) => (
              <div key={i} className="s7-feature-item">
                <span className="s7-feature-icon" aria-label={item.iconLabel}>
                  {item.icon}
                </span>
                <h3 className="s7-feature-title">{item.title}</h3>
                <div className="s7-tag-list">
                  {item.tags.map((tag, j) => (
                    <span key={j} className="s7-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section07_DetectionCoverage, {
  eyebrow: {
    type: ControlType.String,
    title: "Eyebrow",
    defaultValue: "Detection Coverage",
  },
  title: {
    type: ControlType.String,
    title: "Title",
    defaultValue: "What was blocking your AI. ",
  },
  titleBrand: {
    type: ControlType.String,
    title: "Title (Brand)",
    defaultValue: "Now removed.",
  },
})
