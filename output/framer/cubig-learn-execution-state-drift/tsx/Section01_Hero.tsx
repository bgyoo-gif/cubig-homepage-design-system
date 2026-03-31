// Section01_Hero.tsx — Execution State Drift Learn Article Hero
// Framer Code Component
import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

interface Props {
  titlePart1?: string
  titleBrand?: string
  titlePart2?: string
  description?: string
}

export default function Section01_Hero({
  titlePart1 = "",
  titleBrand = "Execution State Drift",
  titlePart2 = " vs Model Drift: Why Most Teams Look in the Wrong Place",
  description = "When production AI degrades, teams check the model first. But most failures are not model drift — they are execution state drift. Schema changes, pipeline updates, runtime differences. Learn the distinction and how to isolate the root cause.",
}: Props) {
  return (
    <div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        .s1esd-section {
          width: 100%;
          padding: 100px 0 80px;
          background-color: #ffffff;
          font-family: "DM Sans", sans-serif;
          color: #0f0f0f;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
          box-sizing: border-box;
        }
        .s1esd-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s1esd-container {
          width: 100%;
          padding: 0 16px;
          box-sizing: border-box;
          margin: 0 auto;
        }
        .s1esd-hero {
          max-width: 860px;
          margin: 0 auto;
        }
        .s1esd-title {
          font-family: "DM Sans", sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0 0 16px;
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
          margin: 0;
          text-wrap: pretty;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        @container (min-width: 768px) {
          .s1esd-container { padding: 0 32px; }
          .s1esd-title { font-size: 28px; }
        }
        @container (min-width: 1024px) {
          .s1esd-container { padding: 0 32px; }
          .s1esd-title { font-size: 32px; }
          .s1esd-description { max-width: 720px; }
        }
        @container (min-width: 1440px) {
          .s1esd-container { padding: 0 120px; max-width: 1440px; }
          .s1esd-title { font-size: 36px; }
          .s1esd-description { max-width: 860px; }
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
})
