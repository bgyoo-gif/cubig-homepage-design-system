// Section06_ReleaseState.tsx — How Release State isolates which layer changed
// Framer Code Component
import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

interface Props {
  titlePart1?: string
  titleBrand?: string
  titlePart2?: string
  definitionTitle?: string
  definitionBody?: string
  introText?: string
  bullet1?: string
  bullet2?: string
  bullet3?: string
  bullet4?: string
  exampleTitle?: string
  exampleBody?: string
}

export default function Section06_ReleaseState({
  titlePart1 = "How ",
  titleBrand = "Release State",
  titlePart2 = " isolates which layer changed",
  definitionTitle = "Release State",
  definitionBody = "A versioned, immutable snapshot of all conditions under which an AI run executes — including data schema, preprocessing logic, feature configuration, and runtime dependencies. Diffing two Release States shows exactly which execution condition changed between runs.",
  introText = "When every AI run is bound to a Release State, incident response changes fundamentally:",
  bullet1 = "Diff the Release State of the broken run against the last known-good run",
  bullet2 = "The diff shows exactly which execution condition changed — schema, pipeline, runtime, or data",
  bullet3 = "Reproduce the prior run under its locked Release State to verify baseline behavior",
  bullet4 = "Determine whether the issue is execution drift (fixable without retraining) or data drift (requires retraining)",
  exampleTitle = "Production example: Telecom churn prediction",
  exampleBody = "In telecom churn prediction pipelines, execution state drift often occurs when upstream customer feature schemas change between runs — such as a new segment field added or an existing type coerced differently. The model continues running. Prediction scores shift. Without Release State, there is no mechanism to identify which condition caused the divergence. With Run Binding, the diff between Release States surfaces the schema change immediately.",
}: Props) {
  return (
    <div>
      <style>{`
        .s6esd-section {
          width: 100%;
          padding: 80px 0;
          background-color: #ffffff;
          font-family: "DM Sans", sans-serif;
          color: #0f0f0f;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
          box-sizing: border-box;
        }
        .s6esd-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s6esd-container {
          width: 100%;
          padding: 0 16px;
          box-sizing: border-box;
          margin: 0 auto;
        }
        .s6esd-body {
          max-width: 860px;
          margin: 0 auto;
        }
        .s6esd-section-header {
          margin-bottom: 32px;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s6esd-title {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          text-wrap: balance;
        }
        .s6esd-title-brand {
          color: #725bea;
        }
        .s6esd-banner {
          padding: 16px 24px;
          border-top: 1px solid #e6e7e9;
          border-bottom: 1px solid #e6e7e9;
          background-color: #f7f7f7;
          margin: 0 0 24px;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s6esd-banner-title {
          font-size: 18px;
          font-weight: 700;
          color: #0f0f0f;
          margin-bottom: 8px;
          line-height: 1.2;
        }
        .s6esd-banner-body {
          font-size: 16px;
          color: #636363;
          line-height: 1.7;
          text-wrap: pretty;
          word-break: keep-all;
          overflow-wrap: break-word;
          margin: 0;
        }
        .s6esd-prose-body {
          font-size: 16px;
          color: #636363;
          line-height: 1.7;
          margin-bottom: 16px;
          text-wrap: pretty;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s6esd-bullet-list {
          list-style: none;
          padding: 0;
          margin: 0 0 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .s6esd-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 16px;
          line-height: 1.5;
          color: #636363;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        .s6esd-bullet-icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          margin-top: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0e824c;
          font-weight: 700;
          font-size: 14px;
        }
        /* Production example banner-full */
        .s6esd-example-wrap {
          margin-top: 32px;
        }
        .s6esd-example-banner {
          width: 100%;
          text-align: center;
          padding: 32px 48px;
          border-radius: 40px;
          background-image: url('${IMAGE_BASE}/bg-gradient-sage-rose.webp');
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }
        .s6esd-example-banner::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.82);
          z-index: 0;
        }
        .s6esd-example-banner > * {
          position: relative;
          z-index: 1;
        }
        .s6esd-example-title {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #0f0f0f;
          margin-bottom: 16px;
          line-height: 1.2;
          text-wrap: balance;
        }
        .s6esd-example-body {
          font-size: 16px;
          color: #0f0f0f;
          line-height: 1.7;
          max-width: 720px;
          margin: 0 auto;
          text-wrap: pretty;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        @container (min-width: 768px) {
          .s6esd-container { padding: 0 32px; }
          .s6esd-title { font-size: 22px; }
        }
        @container (min-width: 1024px) {
          .s6esd-container { padding: 0 32px; }
          .s6esd-title { font-size: 24px; }
          .s6esd-example-body { max-width: 720px; }
        }
        @container (min-width: 1440px) {
          .s6esd-container { padding: 0 120px; max-width: 1440px; }
          .s6esd-title { font-size: 28px; }
          .s6esd-example-body { max-width: 860px; }
        }
      `}</style>

      <section className="s6esd-section">
        <div className="s6esd-inner">
          <div className="s6esd-container">
            <div className="s6esd-body">
              <div className="s6esd-section-header">
                <h2 className="s6esd-title">
                  {titlePart1}
                  <span className="s6esd-title-brand">{titleBrand}</span>
                  {titlePart2}
                </h2>
              </div>
              <div className="s6esd-banner" role="note" aria-label="Definition: Release State">
                <p className="s6esd-banner-title">{definitionTitle}</p>
                <p className="s6esd-banner-body">{definitionBody}</p>
              </div>
              <p className="s6esd-prose-body">{introText}</p>
              <ul className="s6esd-bullet-list" role="list">
                <li className="s6esd-bullet-item">
                  <span className="s6esd-bullet-icon" aria-hidden="true">✓</span>
                  <span>{bullet1}</span>
                </li>
                <li className="s6esd-bullet-item">
                  <span className="s6esd-bullet-icon" aria-hidden="true">✓</span>
                  <span>{bullet2}</span>
                </li>
                <li className="s6esd-bullet-item">
                  <span className="s6esd-bullet-icon" aria-hidden="true">✓</span>
                  <span>{bullet3}</span>
                </li>
                <li className="s6esd-bullet-item">
                  <span className="s6esd-bullet-icon" aria-hidden="true">✓</span>
                  <span>{bullet4}</span>
                </li>
              </ul>
            </div>
            <div className="s6esd-body">
              <div className="s6esd-example-wrap">
                <div className="s6esd-example-banner" role="complementary" aria-label="Production example: Telecom churn prediction">
                  <h3 className="s6esd-example-title">{exampleTitle}</h3>
                  <p className="s6esd-example-body">{exampleBody}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

addPropertyControls(Section06_ReleaseState, {
  titlePart1: { type: ControlType.String, title: "Title Part 1", defaultValue: "How " },
  titleBrand: { type: ControlType.String, title: "Title Brand", defaultValue: "Release State" },
  titlePart2: { type: ControlType.String, title: "Title Part 2", defaultValue: " isolates which layer changed" },
  definitionTitle: { type: ControlType.String, title: "Definition Title", defaultValue: "Release State" },
  definitionBody: {
    type: ControlType.String, title: "Definition Body", displayTextArea: true,
    defaultValue: "A versioned, immutable snapshot of all conditions under which an AI run executes — including data schema, preprocessing logic, feature configuration, and runtime dependencies. Diffing two Release States shows exactly which execution condition changed between runs.",
  },
  introText: {
    type: ControlType.String, title: "Intro Text",
    defaultValue: "When every AI run is bound to a Release State, incident response changes fundamentally:",
  },
  bullet1: {
    type: ControlType.String, title: "Bullet 1", displayTextArea: true,
    defaultValue: "Diff the Release State of the broken run against the last known-good run",
  },
  bullet2: {
    type: ControlType.String, title: "Bullet 2", displayTextArea: true,
    defaultValue: "The diff shows exactly which execution condition changed — schema, pipeline, runtime, or data",
  },
  bullet3: {
    type: ControlType.String, title: "Bullet 3", displayTextArea: true,
    defaultValue: "Reproduce the prior run under its locked Release State to verify baseline behavior",
  },
  bullet4: {
    type: ControlType.String, title: "Bullet 4", displayTextArea: true,
    defaultValue: "Determine whether the issue is execution drift (fixable without retraining) or data drift (requires retraining)",
  },
  exampleTitle: {
    type: ControlType.String, title: "Example Title",
    defaultValue: "Production example: Telecom churn prediction",
  },
  exampleBody: {
    type: ControlType.String, title: "Example Body", displayTextArea: true,
    defaultValue: "In telecom churn prediction pipelines, execution state drift often occurs when upstream customer feature schemas change between runs — such as a new segment field added or an existing type coerced differently. The model continues running. Prediction scores shift. Without Release State, there is no mechanism to identify which condition caused the divergence. With Run Binding, the diff between Release States surfaces the schema change immediately.",
  },
})
