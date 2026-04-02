// Section01_Hero.tsx — Execution State Drift Learn Article Hero (A-2 Hero Screenshot + Diagram)
// Framer Code Component
import { useEffect } from "react"
import { addPropertyControls, ControlType } from "framer"

const FONT_URL = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap"
const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

interface Props {
  titlePart1?: string
  titleBrand?: string
  titlePart2?: string
  description?: string
  diagramCaption?: string
  layer1Title?: string
  layer1Sub?: string
  layer2Title?: string
  layer2Sub?: string
  layer3Title?: string
  layer3Sub?: string
  subCard1Title?: string
  subCard1Desc?: string
  subCard2Title?: string
  subCard2Desc?: string
  subCard3Title?: string
  subCard3Desc?: string
  ncText?: string
  teamsLookText?: string
}

export default function Section01_Hero({
  titlePart1 = "",
  titleBrand = "Execution State Drift",
  titlePart2 = " vs Model Drift: Why Most Teams Look in the Wrong Place",
  description = "When production AI degrades, teams check the model first. But most failures are not model drift — they are execution state drift. Schema changes, pipeline updates, runtime differences. Learn the distinction and how to isolate the root cause.",
  diagramCaption = "Execution state drift bypasses the model — and most monitors.",
  layer1Title = "Application outputs",
  layer1Sub = "Scores · decisions · predictions",
  layer2Title = "Model layer",
  layer2Sub = "Weights · hyperparameters · registry — unchanged",
  layer3Title = "Execution environment",
  layer3Sub = "Schema · pipeline · runtime",
  subCard1Title = "Schema",
  subCard1Desc = "Silent column change",
  subCard2Title = "Pipeline",
  subCard2Desc = "Updated transform",
  subCard3Title = "Runtime",
  subCard3Desc = "Env difference",
  ncText = "no changes",
  teamsLookText = "Teams look here",
}: Props) {
  useEffect(() => {
    // Load fonts
    const fontId = "font-dm-sans-esd"
    if (!document.getElementById(fontId)) {
      const link = document.createElement("link")
      link.id = fontId
      link.rel = "stylesheet"
      link.href = FONT_URL
      document.head.appendChild(link)
    }

    // Inject JSON-LD
    const ldId = "jsonld-execution-state-drift"
    if (!document.getElementById(ldId)) {
      const script = document.createElement("script")
      script.id = ldId
      script.type = "application/ld+json"
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": "https://cubig.ai/#org",
            "name": "Cubig",
            "url": "https://cubig.ai"
          },
          {
            "@type": "Article",
            "@id": "https://cubig.ai/learn/execution-state-drift-vs-model-drift#article",
            "url": "https://cubig.ai/learn/execution-state-drift-vs-model-drift",
            "headline": "Execution State Drift vs Model Drift: Why Most Teams Look in the Wrong Place",
            "description": "When production AI degrades, teams check the model first. But most failures are not model drift — they are execution state drift. Schema changes, pipeline updates, runtime differences. Learn the distinction and how to isolate the root cause.",
            "keywords": "execution state drift, model drift vs data drift, production AI failure diagnosis, schema drift, preprocessing drift, Release State",
            "author": { "@id": "https://cubig.ai/#org" },
            "publisher": { "@id": "https://cubig.ai/#org" },
            "isPartOf": { "@type": "WebSite", "url": "https://cubig.ai" }
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the difference between model drift and execution state drift?",
                "acceptedAnswer": { "@type": "Answer", "text": "Model drift is when real-world distribution diverges from training distribution over time. Execution state drift is when the conditions around the model — schema, pipeline, runtime — change without any model update. Most production AI failures are execution state drift, not model drift." }
              },
              {
                "@type": "Question",
                "name": "Can model drift monitoring detect execution state drift?",
                "acceptedAnswer": { "@type": "Answer", "text": "No. Model drift monitoring tracks output and feature distributions relative to a baseline. It detects that something changed but cannot identify whether the change came from the model, the data schema, the preprocessing logic, or the runtime environment." }
              },
              {
                "@type": "Question",
                "name": "How do you distinguish execution state drift from model drift in production?",
                "acceptedAnswer": { "@type": "Answer", "text": "By comparing the full execution state of the failing run against the last known-good run. If the model is unchanged but the execution state (schema, pipeline, runtime) differs, the cause is execution state drift. If the execution state is identical but output distributions have shifted, the cause is likely model or data drift." }
              },
              {
                "@type": "Question",
                "name": "Why does schema change cause AI failures?",
                "acceptedAnswer": { "@type": "Answer", "text": "AI models expect a specific feature configuration. When upstream schema changes — a column type coerces differently, a field is removed, null rates increase — the model receives inputs that differ from what it was trained on, causing silent degradation without a visible error." }
              },
              {
                "@type": "Question",
                "name": "What is preprocessing drift?",
                "acceptedAnswer": { "@type": "Answer", "text": "Preprocessing drift is when the logic applied to data before model training or inference changes between runs — through a normalization update, new imputation rule, or feature parsing change — causing model behavior to shift even though the model and raw data appear unchanged." }
              },
              {
                "@type": "Question",
                "name": "How does SynTitan detect execution state drift?",
                "acceptedAnswer": { "@type": "Answer", "text": "SynTitan captures all execution conditions in a Release State at each run. When behavior changes, it diffs the Release State of the failing run against prior states to identify exactly which condition changed — schema, pipeline, or runtime — providing root cause without retraining cycles." }
              }
            ]
          }
        ]
      })
      document.head.appendChild(script)
    }

    return () => {}
  }, [])

  return (
    <div>
      <style>{`
        .s1esd-section {
          width: 100%;
          padding: 100px 0 0;
          background-color: #ffffff;
          font-family: "DM Sans", sans-serif;
          color: #0f0f0f;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
          box-sizing: border-box;
          overflow: hidden;
        }
        .s1esd-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s1esd-container {
          width: 100%;
          padding: 0 16px;
          box-sizing: border-box;
          overflow: hidden;
          margin: 0 auto;
        }
        .s1esd-hero {
          max-width: 860px;
          margin: 0 auto;
          text-align: center;
        }
        .s1esd-title {
          font-family: "DM Sans", sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0 0 12px;
          text-wrap: balance;
        }
        .s1esd-title-brand {
          color: #725bea;
        }
        .s1esd-description {
          font-size: 18px;
          color: #636363;
          line-height: 1.7;
          max-width: 100%;
          margin: 0 0 32px;
          text-wrap: pretty;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        /* Screenshot frame */
        .s1esd-frame {
          margin-top: 48px;
          border-radius: 40px;
          padding: 48px 48px 0;
          background-image: url('${IMAGE_BASE}/bg-paint-white-teal.webp');
          background-size: cover;
          background-position: center;
          overflow: hidden;
        }

        /* Diagram */
        .s1esd-diag {
          font-family: "DM Sans", sans-serif;
          background: #ffffff;
          overflow: hidden;
          width: 100%;
          border-radius: 18px 18px 0 0;
        }
        .s1esd-diag-frame {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 10px 14px;
          background: linear-gradient(180deg, #f2f2f2 0%, #ececec 100%);
          border-bottom: 1px solid #e0e0e0;
        }
        .s1esd-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        .s1esd-dot--red { background: #ff3030; }
        .s1esd-dot--yellow { background: #f59e0b; }
        .s1esd-dot--green { background: #0e824c; }

        .s1esd-canvas {
          padding: 32px 32px 24px;
          background: #ffffff;
          position: relative;
        }
        .s1esd-main {
          display: grid;
          grid-template-columns: 130px 1fr 130px;
          gap: 0;
          align-items: stretch;
          position: relative;
        }
        .s1esd-layers {
          display: flex;
          flex-direction: column;
          gap: 0;
          position: relative;
          z-index: 1;
        }
        .s1esd-layer {
          border-radius: 10px;
          padding: 16px 24px;
          text-align: center;
        }
        .s1esd-layer-title {
          font-size: 16px;
          font-weight: 700;
          margin: 0 0 4px;
        }
        .s1esd-layer-sub {
          font-size: 12px;
          margin: 0;
          line-height: 1.4;
        }
        .s1esd-layer--app {
          background: #eef3ff;
          border: 1.5px solid #c6d4fa;
        }
        .s1esd-layer--app .s1esd-layer-title { color: #3061f2; }
        .s1esd-layer--app .s1esd-layer-sub { color: #636363; }
        .s1esd-layer--model {
          background: #f2f2f2;
          border: 1.5px solid #e6e7e9;
        }
        .s1esd-layer--model .s1esd-layer-title { color: #0f0f0f; }
        .s1esd-layer--model .s1esd-layer-sub { color: #636363; }
        .s1esd-layer--exec {
          background: #fff5f5;
          border: 1.5px solid #ffcccc;
        }
        .s1esd-layer--exec .s1esd-layer-title { color: #ff3030; }
        .s1esd-layer--exec .s1esd-layer-sub { color: #636363; }
        .s1esd-layer-gap { height: 10px; }

        .s1esd-nc {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin: 8px 0;
        }
        .s1esd-nc-line {
          flex: 1;
          height: 1px;
          background: #e6e7e9;
        }
        .s1esd-nc-text {
          font-size: 12px;
          color: #9c9c9c;
          font-weight: 500;
          background: #ffffff;
          padding: 0 8px;
        }

        .s1esd-sub-cards {
          display: flex;
          gap: 8px;
          margin-top: 12px;
        }
        .s1esd-sub-card {
          flex: 1;
          background: #ffffff;
          border: 1.5px solid #ffcccc;
          border-radius: 7px;
          padding: 10px;
          text-align: center;
        }
        .s1esd-sub-card-title {
          font-size: 14px;
          font-weight: 700;
          color: #ff3030;
          margin: 0 0 2px;
        }
        .s1esd-sub-card-desc {
          font-size: 12px;
          color: #636363;
          margin: 0;
          line-height: 1.4;
        }

        .s1esd-right-col {
          display: flex;
          flex-direction: column;
          justify-content: start;
        }
        .s1esd-right-spacer { height: 82px; }
        .s1esd-teams {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .s1esd-teams-arrow {
          width: 28px;
          height: 2px;
          background: #636363;
          position: relative;
          flex-shrink: 0;
        }
        .s1esd-teams-arrow::before {
          content: '';
          position: absolute;
          left: -1px;
          top: 50%;
          transform: translateY(-50%);
          border-top: 4px solid transparent;
          border-bottom: 4px solid transparent;
          border-right: 6px solid #636363;
        }
        .s1esd-teams-text {
          font-size: 12px;
          color: #636363;
          font-weight: 500;
          white-space: nowrap;
        }

        .s1esd-left-col {
          position: relative;
        }
        /* L자 경로: 하단→좌→상→우 화살표 */
        .s1esd-drift-wrap {
          position: absolute;
          top: 10%;
          bottom: 10%;
          right: 0;
          width: 60%;
        }
        /* 수직선 (좌측) */
        .s1esd-drift-wrap::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #ff3030;
        }
        /* 하단 가로선 (좌→우, exec 높이) */
        .s1esd-drift-h-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: #ff3030;
        }
        /* 상단 가로선 + 화살표 (좌→우, app 높이) */
        .s1esd-drift-h-top {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: #ff3030;
        }
        .s1esd-drift-h-top::after {
          content: "";
          position: absolute;
          right: -2px;
          top: 50%;
          transform: translateY(-50%);
          border-top: 5px solid transparent;
          border-bottom: 5px solid transparent;
          border-left: 7px solid #ff3030;
        }
        .s1esd-drift-label {
          position: absolute;
          left: -6px;
          top: 50%;
          transform: translateY(-50%) rotate(-90deg);
          font-size: 11px;
          font-weight: 600;
          color: #ff3030;
          letter-spacing: 0.06em;
          white-space: nowrap;
        }

        .s1esd-caption {
          margin-top: 24px;
          text-align: center;
          font-size: 14px;
          color: #636363;
          font-style: italic;
          padding-bottom: 24px;
        }

        @container (min-width: 768px) {
          .s1esd-container { padding: 0 32px; }
          .s1esd-title { font-size: 28px; }
        }
        @container (min-width: 1024px) {
          .s1esd-container { padding: 0 32px; }
          .s1esd-title { font-size: 32px; }
          .s1esd-description { max-width: 720px; margin-left: auto; margin-right: auto; }
        }
        @container (min-width: 1440px) {
          .s1esd-container { padding: 0 120px; max-width: 1440px; }
          .s1esd-title { font-size: 36px; }
          .s1esd-description { max-width: 860px; }
        }
        @container (max-width: 767px) {
          .s1esd-frame {
            padding: 16px 16px 0;
            border-radius: 24px 24px 0 0;
            background-image: none;
          }
        }
        @container (max-width: 639px) {
          .s1esd-main { grid-template-columns: 1fr; }
          .s1esd-right-col, .s1esd-left-col { display: none; }
          .s1esd-sub-cards { flex-direction: column; }
          .s1esd-layer-title { font-size: 14px; }
          .s1esd-canvas { padding: 24px 12px 16px; }
          .s1esd-drift-wrap { display: none; }
        }
      `}</style>

      <section className="s1esd-section">
        <div className="s1esd-inner">
          <div className="s1esd-container">
            <div className="s1esd-hero">
              <h1 className="s1esd-title">
                {titlePart1}
                <span className="s1esd-title-brand">{titleBrand}</span>
                {titlePart2}
              </h1>
              <p className="s1esd-description">{description}</p>
            </div>

            {/* Screenshot frame with diagram */}
            <div className="s1esd-frame">
              <div className="s1esd-diag">
                {/* OS window titlebar */}
                <div className="s1esd-diag-frame">
                  <span className="s1esd-dot s1esd-dot--red"></span>
                  <span className="s1esd-dot s1esd-dot--yellow"></span>
                  <span className="s1esd-dot s1esd-dot--green"></span>
                </div>

                {/* Canvas */}
                <div className="s1esd-canvas">
                  <div className="s1esd-main">
                    {/* Left: CSS L-shape drift path */}
                    <div className="s1esd-left-col">
                      <div className="s1esd-drift-wrap">
                        <div className="s1esd-drift-h-top"></div>
                        <div className="s1esd-drift-h-bottom"></div>
                        <span className="s1esd-drift-label">drift path</span>
                      </div>
                    </div>

                    <div className="s1esd-layers" id="edh-layers-fr">
                      {/* Layer 1: Application outputs */}
                      <div className="s1esd-layer s1esd-layer--app">
                        <p className="s1esd-layer-title">{layer1Title}</p>
                        <p className="s1esd-layer-sub">{layer1Sub}</p>
                      </div>

                      <div className="s1esd-layer-gap"></div>

                      {/* Layer 2: Model layer */}
                      <div className="s1esd-layer s1esd-layer--model">
                        <p className="s1esd-layer-title">{layer2Title}</p>
                        <p className="s1esd-layer-sub">{layer2Sub}</p>
                      </div>

                      {/* No changes */}
                      <div className="s1esd-nc">
                        <span className="s1esd-nc-line"></span>
                        <span className="s1esd-nc-text">{ncText}</span>
                        <span className="s1esd-nc-line"></span>
                      </div>

                      {/* Layer 3: Execution environment */}
                      <div className="s1esd-layer s1esd-layer--exec">
                        <p className="s1esd-layer-title">{layer3Title}</p>
                        <p className="s1esd-layer-sub">{layer3Sub}</p>
                        <div className="s1esd-sub-cards">
                          <div className="s1esd-sub-card">
                            <p className="s1esd-sub-card-title">{subCard1Title}</p>
                            <p className="s1esd-sub-card-desc">{subCard1Desc}</p>
                          </div>
                          <div className="s1esd-sub-card">
                            <p className="s1esd-sub-card-title">{subCard2Title}</p>
                            <p className="s1esd-sub-card-desc">{subCard2Desc}</p>
                          </div>
                          <div className="s1esd-sub-card">
                            <p className="s1esd-sub-card-title">{subCard3Title}</p>
                            <p className="s1esd-sub-card-desc">{subCard3Desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right: Teams look here */}
                    <div className="s1esd-right-col">
                      <div className="s1esd-right-spacer"></div>
                      <div className="s1esd-teams">
                        <span className="s1esd-teams-arrow"></span>
                        <span className="s1esd-teams-text">{teamsLookText}</span>
                      </div>
                    </div>
                  </div>

                  <p className="s1esd-caption">{diagramCaption}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

addPropertyControls(Section01_Hero, {
  titlePart1: {
    type: ControlType.String,
    title: "Title Part 1",
    defaultValue: "",
  },
  titleBrand: {
    type: ControlType.String,
    title: "Title (Brand)",
    defaultValue: "Execution State Drift",
  },
  titlePart2: {
    type: ControlType.String,
    title: "Title Part 2",
    defaultValue: " vs Model Drift: Why Most Teams Look in the Wrong Place",
  },
  description: {
    type: ControlType.String,
    title: "Description",
    displayTextArea: true,
    defaultValue:
      "When production AI degrades, teams check the model first. But most failures are not model drift — they are execution state drift. Schema changes, pipeline updates, runtime differences. Learn the distinction and how to isolate the root cause.",
  },
  diagramCaption: {
    type: ControlType.String,
    title: "Diagram Caption",
    defaultValue: "Execution state drift bypasses the model — and most monitors.",
  },
  layer1Title: { type: ControlType.String, title: "Layer 1 Title", defaultValue: "Application outputs" },
  layer1Sub: { type: ControlType.String, title: "Layer 1 Sub", defaultValue: "Scores · decisions · predictions" },
  layer2Title: { type: ControlType.String, title: "Layer 2 Title", defaultValue: "Model layer" },
  layer2Sub: { type: ControlType.String, title: "Layer 2 Sub", defaultValue: "Weights · hyperparameters · registry — unchanged" },
  layer3Title: { type: ControlType.String, title: "Layer 3 Title", defaultValue: "Execution environment" },
  layer3Sub: { type: ControlType.String, title: "Layer 3 Sub", defaultValue: "Schema · pipeline · runtime" },
  subCard1Title: { type: ControlType.String, title: "Sub Card 1 Title", defaultValue: "Schema" },
  subCard1Desc: { type: ControlType.String, title: "Sub Card 1 Desc", defaultValue: "Silent column change" },
  subCard2Title: { type: ControlType.String, title: "Sub Card 2 Title", defaultValue: "Pipeline" },
  subCard2Desc: { type: ControlType.String, title: "Sub Card 2 Desc", defaultValue: "Updated transform" },
  subCard3Title: { type: ControlType.String, title: "Sub Card 3 Title", defaultValue: "Runtime" },
  subCard3Desc: { type: ControlType.String, title: "Sub Card 3 Desc", defaultValue: "Env difference" },
  ncText: { type: ControlType.String, title: "No Changes Text", defaultValue: "no changes" },
  teamsLookText: { type: ControlType.String, title: "Teams Look Text", defaultValue: "Teams look here" },
})
