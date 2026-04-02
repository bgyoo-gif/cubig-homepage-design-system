// Section06_ReleaseState.tsx — How Release State isolates which layer changed (with TCP diagram)
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
  // Production example section header
  exampleTitlePart1?: string
  exampleTitleBrand?: string
  exampleTitlePart2?: string
  exampleDescription?: string
  // Telecom Pipeline Diagram
  tcpWindowLabel?: string
  tcpCardTitle?: string
  tcpSchemaLabel?: string
  tcpNode1Title?: string
  tcpNode1Sub?: string
  tcpNode2Title?: string
  tcpNode2Sub?: string
  tcpNode3Title?: string
  tcpNode3Sub?: string
  tcpNode4Title?: string
  tcpNode4Sub?: string
  tcpRbTitle?: string
  tcpRbDesc?: string
  tcpWithoutTitle?: string
  tcpWithoutDesc?: string
  tcpWithTitle?: string
  tcpWithDesc?: string
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
  exampleTitlePart1 = "Production example: ",
  exampleTitleBrand = "Telecom churn prediction",
  exampleTitlePart2 = "",
  exampleDescription = "In telecom churn prediction pipelines, execution state drift often occurs when upstream customer feature schemas change between runs — such as a new segment field added or an existing type coerced differently. The model continues running. Prediction scores shift. Without Release State, there is no mechanism to identify which condition caused the divergence. With Run Binding, the diff between Release States surfaces the schema change immediately.",
  tcpWindowLabel = "Telecom churn prediction pipeline",
  tcpCardTitle = "Pipeline flow",
  tcpSchemaLabel = "schema change",
  tcpNode1Title = "Upstream schema",
  tcpNode1Sub = "New segment field",
  tcpNode2Title = "Feature store",
  tcpNode2Sub = "Customer features",
  tcpNode3Title = "Churn model",
  tcpNode3Sub = "Unchanged",
  tcpNode4Title = "Prediction scores",
  tcpNode4Sub = "Shifted",
  tcpRbTitle = "Run Binding",
  tcpRbDesc = "Diffs Release State between runs — surfaces schema change immediately",
  tcpWithoutTitle = "Without Run Binding",
  tcpWithoutDesc = "No mechanism to identify cause",
  tcpWithTitle = "With Run Binding",
  tcpWithDesc = "Diff surfaces schema change at source",
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
          text-align: center;
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

        /* Example section header */
        .s6esd-example-section-header {
          margin-top: 80px;
          text-align: center;
          margin-bottom: 32px;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
          text-align: center;
        }
        .s6esd-example-title {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0 0 16px;
          text-wrap: balance;
        }
        .s6esd-example-desc {
          font-size: 18px;
          color: #636363;
          line-height: 1.7;
          max-width: 100%;
          margin: 0 auto;
          text-wrap: pretty;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        /* Telecom Pipeline Diagram */
        .s6esd-tcp-diag {
          margin-top: 32px;
        }
        .s6esd-tcp-window {
          background: #f8f8f8;
          border-radius: 18px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.10);
          overflow: hidden;
        }
        .s6esd-tcp-titlebar {
          background: linear-gradient(180deg, #e8e8e8 0%, #d8d8d8 100%);
          height: 36px;
          display: flex;
          align-items: center;
          padding: 0 14px;
          gap: 8px;
          border-bottom: 1px solid #c0c0c0;
        }
        .s6esd-tcp-dot { width: 12px; height: 12px; border-radius: 50%; }
        .s6esd-tcp-dot--close { background: #ff5f57; }
        .s6esd-tcp-dot--min { background: #ffbd2e; }
        .s6esd-tcp-dot--max { background: #28ca41; }
        .s6esd-tcp-titlebar-label {
          margin: 0 auto;
          font-size: 12px;
          font-weight: 500;
          color: #636363;
          font-family: "Fragment Mono", monospace;
          transform: translateX(-18px);
        }
        .s6esd-tcp-content {
          background: linear-gradient(135deg, #dff0ea 0%, #eef3ff 40%, #f3eeff 70%, #fdeef8 100%);
          padding: 32px;
          position: relative;
        }
        .s6esd-tcp-card {
          background: linear-gradient(145deg, #ffffff 0%, #f0f0f0 40%, #e8e8e8 70%, #f5f5f5 100%);
          border: 1px solid #d0d0d0;
          border-radius: 18px;
          overflow: hidden;
          position: relative;
        }
        .s6esd-tcp-card-title {
          text-align: center;
          padding: 12px 24px;
          font-size: 14px;
          font-weight: 500;
          color: #2a2a2a;
          letter-spacing: 0.04em;
          border-bottom: 1px solid #e0e0e0;
          font-family: "Fragment Mono", monospace;
          background: linear-gradient(180deg, #fff 0%, #f8f8f8 100%);
        }
        .s6esd-tcp-nodes {
          display: flex;
          align-items: stretch;
          padding: 24px 16px;
          gap: 0;
          position: relative;
        }
        .s6esd-tcp-node {
          flex: 1;
          text-align: center;
          padding: 14px 10px;
          border-radius: 8px;
          border: 1px solid #e0e0e0;
          background: #f2f2f2;
          display: flex;
          flex-direction: column;
          gap: 3px;
          align-items: center;
          justify-content: center;
        }
        .s6esd-tcp-node-title {
          font-size: 14px;
          font-weight: 600;
          color: #2a2a2a;
        }
        .s6esd-tcp-node-sub {
          font-size: 12px;
          color: #636363;
        }
        .s6esd-tcp-node--error {
          background: linear-gradient(145deg, #fff5f5 0%, #ffe8e8 100%);
          border: 1.5px solid #ff3030;
        }
        .s6esd-tcp-node--error .s6esd-tcp-node-title { color: #ff3030; }
        .s6esd-tcp-node--error .s6esd-tcp-node-sub { color: #ff6b6b; }
        .s6esd-tcp-arrow-gap {
          width: 36px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .s6esd-tcp-arrow-gap::before {
          content: "";
          width: 20px;
          height: 1.5px;
          background: #444;
        }
        .s6esd-tcp-arrow-gap::after {
          content: "";
          border-top: 4px solid transparent;
          border-bottom: 4px solid transparent;
          border-left: 6px solid #444;
        }
        .s6esd-tcp-schema-label {
          position: absolute;
          top: 6px;
          left: 16px;
          font-size: 12px;
          color: #ff3030;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .s6esd-tcp-schema-label::after {
          content: '';
          display: inline-block;
          width: 0;
          height: 0;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 5px solid #ff3030;
        }
        /* tcp-svg removed — arrows are CSS ::before/::after on arrow-gap */
        .s6esd-tcp-svg-removed {
          display: none;
          pointer-events: none;
        }

        /* Run Binding — silver gradient card */
        .s6esd-tcp-rb {
          margin: 16px 16px 0;
          padding: 2px;
          border-radius: 18px;
          background: linear-gradient(109deg, #898989 0%, #fff 17%, #D5D5D5 63%, #F6F5F6 84%, #898989 100%);
          box-shadow: rgba(113, 141, 176, 0.25) 0px 1px 20px 0px;
        }
        .s6esd-tcp-rb-inner {
          background: #ffffff;
          border-radius: 16px;
          padding: 16px 24px;
          text-align: center;
        }
        .s6esd-tcp-rb-title {
          font-size: 14px;
          font-weight: 600;
          color: #2a2a2a;
          margin: 0 0 4px;
        }
        .s6esd-tcp-rb-desc {
          font-size: 12px;
          color: #636363;
          margin: 0;
        }

        /* Compare cards */
        .s6esd-tcp-compare {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin: 16px;
        }
        .s6esd-tcp-cmp-without {
          padding: 2px;
          border-radius: 18px;
          background: linear-gradient(109deg, #898989 0%, #fff 17%, #D5D5D5 63%, #F6F5F6 84%, #898989 100%);
          box-shadow: rgba(113, 141, 176, 0.25) 0px 1px 20px 0px;
        }
        .s6esd-tcp-cmp-without-inner {
          background: #ffffff;
          border-radius: 16px;
          padding: 12px;
          text-align: center;
        }
        .s6esd-tcp-cmp-with {
          padding: 2px;
          border-radius: 18px;
          background: linear-gradient(109deg, #BFE1FB 0%, #fff 17%, #FFEDFA 38%, #81B8FB 51%, #E2E3F0 73%, #BFE1FB 100%);
          box-shadow: rgba(113, 141, 176, 0.25) 0px 1px 20px 0px;
        }
        .s6esd-tcp-cmp-with-inner {
          background: linear-gradient(99deg, #E9EEFB 0%, #FCFCFE 58%, #fff 100%);
          border-radius: 16px;
          padding: 12px;
          text-align: center;
        }
        .s6esd-tcp-cmp-title {
          font-size: 14px;
          font-weight: 600;
          margin: 0 0 3px;
          color: #2a2a2a;
        }
        .s6esd-tcp-cmp-desc {
          font-size: 12px;
          color: #636363;
          margin: 0;
        }

        @container (min-width: 768px) {
          .s6esd-container { padding: 0 32px; }
          .s6esd-title { font-size: 22px; }
          .s6esd-example-title { font-size: 22px; }
        }
        @container (min-width: 1024px) {
          .s6esd-container { padding: 0 32px; }
          .s6esd-title { font-size: 24px; }
          .s6esd-example-title { font-size: 24px; }
          .s6esd-example-desc { max-width: 720px; }
        }
        @container (min-width: 1440px) {
          .s6esd-container { padding: 0 120px; max-width: 1440px; }
          .s6esd-title { font-size: 28px; }
          .s6esd-example-title { font-size: 28px; }
          .s6esd-example-desc { max-width: 860px; }
        }
        @container (max-width: 639px) {
          .s6esd-tcp-nodes { flex-wrap: wrap; gap: 8px; }
          .s6esd-tcp-arrow-gap { display: none; }
          .s6esd-tcp-node { flex: 1 1 calc(50% - 4px); }
          .s6esd-tcp-compare { grid-template-columns: 1fr; }
          .s6esd-tcp-svg { display: none; }
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

            {/* Production example section */}
            <div className="s6esd-body">
              <div className="s6esd-example-section-header">
                <h3 className="s6esd-example-title">
                  {exampleTitlePart1}
                  <span className="s6esd-title-brand">{exampleTitleBrand}</span>
                  {exampleTitlePart2}
                </h3>
                <p className="s6esd-example-desc">{exampleDescription}</p>
              </div>

              {/* Telecom Pipeline Diff Diagram */}
              <div className="s6esd-tcp-diag">
                <div className="s6esd-tcp-window">
                  <div className="s6esd-tcp-titlebar">
                    <span className="s6esd-tcp-dot s6esd-tcp-dot--close"></span>
                    <span className="s6esd-tcp-dot s6esd-tcp-dot--min"></span>
                    <span className="s6esd-tcp-dot s6esd-tcp-dot--max"></span>
                    <span className="s6esd-tcp-titlebar-label">{tcpWindowLabel}</span>
                  </div>
                  <div className="s6esd-tcp-content">
                    <div className="s6esd-tcp-card">
                      <div className="s6esd-tcp-card-title">{tcpCardTitle}</div>

                      <div className="s6esd-tcp-nodes" id="tcp-nodes-fr">
                        <div className="s6esd-tcp-schema-label">{tcpSchemaLabel}</div>

                        <div className="s6esd-tcp-node s6esd-tcp-node--error">
                          <span className="s6esd-tcp-node-title">{tcpNode1Title}</span>
                          <span className="s6esd-tcp-node-sub">{tcpNode1Sub}</span>
                        </div>
                        <div className="s6esd-tcp-arrow-gap"></div>
                        <div className="s6esd-tcp-node">
                          <span className="s6esd-tcp-node-title">{tcpNode2Title}</span>
                          <span className="s6esd-tcp-node-sub">{tcpNode2Sub}</span>
                        </div>
                        <div className="s6esd-tcp-arrow-gap"></div>
                        <div className="s6esd-tcp-node">
                          <span className="s6esd-tcp-node-title">{tcpNode3Title}</span>
                          <span className="s6esd-tcp-node-sub">{tcpNode3Sub}</span>
                        </div>
                        <div className="s6esd-tcp-arrow-gap"></div>
                        <div className="s6esd-tcp-node s6esd-tcp-node--error">
                          <span className="s6esd-tcp-node-title">{tcpNode4Title}</span>
                          <span className="s6esd-tcp-node-sub">{tcpNode4Sub}</span>
                        </div>

                        {/* arrows are CSS-only via .s6esd-tcp-arrow-gap */}
                      </div>

                      {/* Run Binding */}
                      <div className="s6esd-tcp-rb">
                        <div className="s6esd-tcp-rb-inner">
                          <p className="s6esd-tcp-rb-title">{tcpRbTitle}</p>
                          <p className="s6esd-tcp-rb-desc">{tcpRbDesc}</p>
                        </div>
                      </div>

                      {/* Compare cards */}
                      <div className="s6esd-tcp-compare">
                        <div className="s6esd-tcp-cmp-without">
                          <div className="s6esd-tcp-cmp-without-inner">
                            <p className="s6esd-tcp-cmp-title">{tcpWithoutTitle}</p>
                            <p className="s6esd-tcp-cmp-desc">{tcpWithoutDesc}</p>
                          </div>
                        </div>
                        <div className="s6esd-tcp-cmp-with">
                          <div className="s6esd-tcp-cmp-with-inner">
                            <p className="s6esd-tcp-cmp-title">{tcpWithTitle}</p>
                            <p className="s6esd-tcp-cmp-desc">{tcpWithDesc}</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
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
  exampleTitlePart1: { type: ControlType.String, title: "Example Title Part 1", defaultValue: "Production example: " },
  exampleTitleBrand: { type: ControlType.String, title: "Example Title Brand", defaultValue: "Telecom churn prediction" },
  exampleTitlePart2: { type: ControlType.String, title: "Example Title Part 2", defaultValue: "" },
  exampleDescription: {
    type: ControlType.String, title: "Example Description", displayTextArea: true,
    defaultValue: "In telecom churn prediction pipelines, execution state drift often occurs when upstream customer feature schemas change between runs — such as a new segment field added or an existing type coerced differently. The model continues running. Prediction scores shift. Without Release State, there is no mechanism to identify which condition caused the divergence. With Run Binding, the diff between Release States surfaces the schema change immediately.",
  },
  tcpWindowLabel: { type: ControlType.String, title: "TCP Window Label", defaultValue: "Telecom churn prediction pipeline" },
  tcpCardTitle: { type: ControlType.String, title: "TCP Card Title", defaultValue: "Pipeline flow" },
  tcpSchemaLabel: { type: ControlType.String, title: "TCP Schema Label", defaultValue: "schema change" },
  tcpNode1Title: { type: ControlType.String, title: "TCP Node 1 Title", defaultValue: "Upstream schema" },
  tcpNode1Sub: { type: ControlType.String, title: "TCP Node 1 Sub", defaultValue: "New segment field" },
  tcpNode2Title: { type: ControlType.String, title: "TCP Node 2 Title", defaultValue: "Feature store" },
  tcpNode2Sub: { type: ControlType.String, title: "TCP Node 2 Sub", defaultValue: "Customer features" },
  tcpNode3Title: { type: ControlType.String, title: "TCP Node 3 Title", defaultValue: "Churn model" },
  tcpNode3Sub: { type: ControlType.String, title: "TCP Node 3 Sub", defaultValue: "Unchanged" },
  tcpNode4Title: { type: ControlType.String, title: "TCP Node 4 Title", defaultValue: "Prediction scores" },
  tcpNode4Sub: { type: ControlType.String, title: "TCP Node 4 Sub", defaultValue: "Shifted" },
  tcpRbTitle: { type: ControlType.String, title: "Run Binding Title", defaultValue: "Run Binding" },
  tcpRbDesc: { type: ControlType.String, title: "Run Binding Desc", defaultValue: "Diffs Release State between runs — surfaces schema change immediately" },
  tcpWithoutTitle: { type: ControlType.String, title: "Without Title", defaultValue: "Without Run Binding" },
  tcpWithoutDesc: { type: ControlType.String, title: "Without Desc", defaultValue: "No mechanism to identify cause" },
  tcpWithTitle: { type: ControlType.String, title: "With Title", defaultValue: "With Run Binding" },
  tcpWithDesc: { type: ControlType.String, title: "With Desc", defaultValue: "Diff surfaces schema change at source" },
})
