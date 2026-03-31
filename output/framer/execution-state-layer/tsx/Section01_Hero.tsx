// Section01_Hero.tsx — Execution State Layer Hero
// Framer Code Component
import { useEffect } from "react"
import { addPropertyControls, ControlType } from "framer"

const FONT_URL = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap"

const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

interface Props {
  title?: string
  description?: string
  diagramWindowLabel?: string
  diagramCardTitle?: string
  col1Title?: string
  col1Badge?: string
  col1Bullet?: string
  col1Caption?: string
  col2Title?: string
  col2Bullet?: string
  col2Caption?: string
  col3Title?: string
  col3Bullet?: string
  col3Caption?: string
  aiColTitle?: string
  aiItem1?: string
  aiItem2?: string
  aiItem3?: string
}

export default function Section01_Hero({
  title = "Execution State Layer",
  description = "A data infrastructure layer that binds every AI execution to a versioned, frozen, and verifiable data state — enabling reproducibility, traceability, and consistent outcomes across production environments.",
  diagramWindowLabel = "Execution State Layer",
  diagramCardTitle = "AI Execution = Model + Code + Execution State Layer",
  col1Title = "Data State",
  col1Badge = "V1.2",
  col1Bullet = "Versioned & Frozen",
  col1Caption = "Versioned Data",
  col2Title = "Validation",
  col2Bullet = "Integrity Checks",
  col2Caption = "Verified Integrity",
  col3Title = "Traceability",
  col3Bullet = "Full Lineage",
  col3Caption = "Full Lineage",
  aiColTitle = "AI Execution",
  aiItem1 = "Model",
  aiItem2 = "Code",
  aiItem3 = "Runtime",
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
    <div>
      <style>{`

        .s1-section {
          width: 100%;
          padding: 100px 0 80px;
          overflow: hidden;
          font-family: "DM Sans", sans-serif;
          color: #0f0f0f;
          background-color: #ffffff;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
          box-sizing: border-box;
        }
        .s1-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s1-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s1-hero {
          text-align: center;
          max-width: 860px;
          margin: 0 auto;
        }
        .s1-title {
          font-family: "DM Sans", sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0 0 16px;
          text-wrap: balance;
        }
        .s1-description {
          font-size: 18px;
          color: #636363;
          line-height: 1.7;
          max-width: 100%;
          margin: 0 auto;
          text-wrap: pretty;
        }

        /* Diagram background wrap */
        .s1-diag-bg {
          background-image: url('${IMAGE_BASE}/bg-paint-white-teal.webp');
          background-size: cover;
          background-position: center;
          border-radius: 40px;
          padding: 64px 32px;
          margin-top: 48px;
          max-width: 920px;
          width: 100%;
          margin-left: auto;
          margin-right: auto;
          box-sizing: border-box;
        }
        .s1-window {
          background: rgba(255,255,255,0.65);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 18px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
          overflow: hidden;
          font-family: "DM Sans", sans-serif;
        }
        .s1-titlebar {
          background: linear-gradient(180deg, #e8e8e8 0%, #d8d8d8 100%);
          height: 36px;
          display: flex;
          align-items: center;
          padding: 0 14px;
          gap: 8px;
          border-bottom: 1px solid #c0c0c0;
        }
        .s1-titlebar__dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .s1-titlebar__dot--close { background: #ff5f57; }
        .s1-titlebar__dot--min   { background: #ffbd2e; }
        .s1-titlebar__dot--max   { background: #28ca41; }
        .s1-titlebar__label {
          margin: 0 auto;
          font-size: 12px;
          font-weight: 500;
          color: #636363;
          font-family: "Fragment Mono", monospace;
          transform: translateX(-18px);
        }
        .s1-win-content {
          background: transparent;
          padding: 32px;
        }
        .s1-card {
          background: rgba(255,255,255,0.7);
          border: 1px solid rgba(255,255,255,0.5);
          border-radius: 18px;
          overflow: hidden;
        }
        .s1-card__title {
          text-align: center;
          padding: 12px 24px;
          font-size: 14px;
          font-weight: 500;
          color: #0f0f0f;
          letter-spacing: 0.04em;
          border-bottom: 1px solid rgba(255,255,255,0.5);
          font-family: "Fragment Mono", monospace;
          background: rgba(255,255,255,0.4);
        }
        .s1-body {
          display: grid;
          grid-template-columns: 3fr auto 1fr;
          align-items: stretch;
        }
        .s1-col--esl {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          border-right: 1px dashed #d0d0d0;
        }
        .s1-sub {
          padding: 16px 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          text-align: center;
          border-right: 1px dashed #e0e0e0;
        }
        .s1-sub:last-child { border-right: none; }
        .s1-sub__title {
          font-size: 14px;
          font-weight: 700;
          color: #0f0f0f;
        }
        .s1-sub__icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: #fff;
          border: 1.5px solid #e0e0e0;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .s1-sub__icon svg {
          width: 22px;
          height: 22px;
          stroke: #2563eb;
          fill: none;
          stroke-width: 1.6;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .s1-sub__badge {
          position: absolute;
          bottom: -5px;
          right: -8px;
          background: #2563eb;
          color: #fff;
          font-size: 9px;
          font-weight: 700;
          border-radius: 4px;
          padding: 1px 5px;
        }
        .s1-sub__bullet {
          font-size: 12px;
          color: #636363;
        }
        .s1-sub__bullet::before { content: "• "; color: #2563eb; }
        .s1-sub__caption {
          font-size: 11px;
          color: #9c9c9c;
          font-style: italic;
          margin-top: auto;
        }
        .s1-col--arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 12px;
        }
        .s1-arrow-line { display: flex; align-items: center; gap: 0; }
        .s1-arrow-line__bar { width: 32px; height: 2px; background: #444; }
        .s1-arrow-line__tip {
          width: 0;
          height: 0;
          border-top: 5px solid transparent;
          border-bottom: 5px solid transparent;
          border-left: 7px solid #444;
        }
        .s1-col--ai {
          padding: 16px 24px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 10px;
        }
        .s1-col--ai__title {
          font-size: 14px;
          font-weight: 700;
          color: #0f0f0f;
          margin-bottom: 4px;
        }
        .s1-col--ai__item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: #636363;
          font-weight: 500;
        }
        .s1-col--ai__item svg {
          width: 16px;
          height: 16px;
          stroke: #2563eb;
          fill: none;
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-linejoin: round;
          flex-shrink: 0;
        }

        @container (min-width: 768px) {
          .s1-container { padding: 0 32px; }
          .s1-title { font-size: 28px; }
          .s1-description { max-width: 100%; }
        }
        @container (min-width: 1024px) {
          .s1-container { padding: 0 32px; }
          .s1-title { font-size: 32px; }
          .s1-description { max-width: 720px; }
        }
        @container (min-width: 1440px) {
          .s1-container { padding: 0 120px; max-width: 1440px; }
          .s1-title { font-size: 36px; }
          .s1-description { max-width: 860px; }
        }

        @container (max-width: 640px) {
          .s1-body { grid-template-columns: 1fr; }
          .s1-col--esl { grid-template-columns: 1fr; border-right: none; border-bottom: 1px dashed #d0d0d0; }
          .s1-sub { border-right: none; border-bottom: 1px dashed #e0e0e0; }
          .s1-sub:last-child { border-bottom: none; }
          .s1-col--arrow { padding: 8px 0; transform: rotate(90deg); }
          .s1-col--ai { flex-direction: row; flex-wrap: wrap; gap: 8px 16px; }
          .s1-col--ai__title { width: 100%; }
          .s1-diag-bg { padding: 32px 16px; border-radius: 24px; }
        }
      `}</style>

      <section className="s1-section">
        <div className="s1-inner">
          <div className="s1-container">
            <div className="s1-hero">
              <h1 className="s1-title">{title}</h1>
              <p className="s1-description">{description}</p>
            </div>

            <div className="s1-diag-bg">
              <div className="s1-window">
                <div className="s1-titlebar">
                  <span className="s1-titlebar__dot s1-titlebar__dot--close"></span>
                  <span className="s1-titlebar__dot s1-titlebar__dot--min"></span>
                  <span className="s1-titlebar__dot s1-titlebar__dot--max"></span>
                  <span className="s1-titlebar__label">{diagramWindowLabel}</span>
                </div>
                <div className="s1-win-content">
                  <div className="s1-card">
                    <div className="s1-card__title">{diagramCardTitle}</div>
                    <div className="s1-body">
                      <div className="s1-col--esl">
                        <div className="s1-sub">
                          <div className="s1-sub__title">{col1Title}</div>
                          <div className="s1-sub__icon">
                            <svg viewBox="0 0 24 24">
                              <ellipse cx="12" cy="5" rx="9" ry="3"/>
                              <path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
                              <path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6"/>
                            </svg>
                            <span className="s1-sub__badge">{col1Badge}</span>
                          </div>
                          <div className="s1-sub__bullet">{col1Bullet}</div>
                          <div className="s1-sub__caption">{col1Caption}</div>
                        </div>
                        <div className="s1-sub">
                          <div className="s1-sub__title">{col2Title}</div>
                          <div className="s1-sub__icon">
                            <svg viewBox="0 0 24 24">
                              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                              <polyline points="9 12 11 14 15 10"/>
                            </svg>
                          </div>
                          <div className="s1-sub__bullet">{col2Bullet}</div>
                          <div className="s1-sub__caption">{col2Caption}</div>
                        </div>
                        <div className="s1-sub">
                          <div className="s1-sub__title">{col3Title}</div>
                          <div className="s1-sub__icon">
                            <svg viewBox="0 0 24 24">
                              <circle cx="11" cy="11" r="8"/>
                              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                            </svg>
                          </div>
                          <div className="s1-sub__bullet">{col3Bullet}</div>
                          <div className="s1-sub__caption">{col3Caption}</div>
                        </div>
                      </div>
                      <div className="s1-col--arrow">
                        <div className="s1-arrow-line">
                          <div className="s1-arrow-line__bar"></div>
                          <div className="s1-arrow-line__tip"></div>
                        </div>
                      </div>
                      <div className="s1-col--ai">
                        <div className="s1-col--ai__title">{aiColTitle}</div>
                        <div className="s1-col--ai__item">
                          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
                          {aiItem1}
                        </div>
                        <div className="s1-col--ai__item">
                          <svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                          {aiItem2}
                        </div>
                        <div className="s1-col--ai__item">
                          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                          {aiItem3}
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

addPropertyControls(Section01_Hero, {
  title: { type: ControlType.String, title: "Title", defaultValue: "Execution State Layer" },
  description: { type: ControlType.String, title: "Description", displayTextArea: true, defaultValue: "A data infrastructure layer that binds every AI execution to a versioned, frozen, and verifiable data state — enabling reproducibility, traceability, and consistent outcomes across production environments." },
  diagramWindowLabel: { type: ControlType.String, title: "Window Label", defaultValue: "Execution State Layer" },
  diagramCardTitle: { type: ControlType.String, title: "Card Title", defaultValue: "AI Execution = Model + Code + Execution State Layer" },
  col1Title: { type: ControlType.String, title: "Col1 Title", defaultValue: "Data State" },
  col1Badge: { type: ControlType.String, title: "Col1 Badge", defaultValue: "V1.2" },
  col1Bullet: { type: ControlType.String, title: "Col1 Bullet", defaultValue: "Versioned & Frozen" },
  col1Caption: { type: ControlType.String, title: "Col1 Caption", defaultValue: "Versioned Data" },
  col2Title: { type: ControlType.String, title: "Col2 Title", defaultValue: "Validation" },
  col2Bullet: { type: ControlType.String, title: "Col2 Bullet", defaultValue: "Integrity Checks" },
  col2Caption: { type: ControlType.String, title: "Col2 Caption", defaultValue: "Verified Integrity" },
  col3Title: { type: ControlType.String, title: "Col3 Title", defaultValue: "Traceability" },
  col3Bullet: { type: ControlType.String, title: "Col3 Bullet", defaultValue: "Full Lineage" },
  col3Caption: { type: ControlType.String, title: "Col3 Caption", defaultValue: "Full Lineage" },
  aiColTitle: { type: ControlType.String, title: "AI Col Title", defaultValue: "AI Execution" },
  aiItem1: { type: ControlType.String, title: "AI Item 1", defaultValue: "Model" },
  aiItem2: { type: ControlType.String, title: "AI Item 2", defaultValue: "Code" },
  aiItem3: { type: ControlType.String, title: "AI Item 3", defaultValue: "Runtime" },
})
