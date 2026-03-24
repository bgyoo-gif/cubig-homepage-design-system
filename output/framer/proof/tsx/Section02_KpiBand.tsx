import { addPropertyControls, ControlType } from "framer"

// ─── Design Tokens ───────────────────────────────────────────────────────────
const tokens = {
  colorSurfaceWhite: "#ffffff",
  colorWhite: "#ffffff",
  fontBase: '"DM Sans", sans-serif',
  fontBrand: '"Oxanium", sans-serif',
}

const IMAGE_BASE =
  "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

// ─── Props ────────────────────────────────────────────────────────────────────
interface Props {
  marginTop: number
  kpi1Number: string
  kpi1Label: string
  kpi2Number: string
  kpi2Label: string
  kpi3Number: string
  kpi3Label: string
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Section02_KpiBand({
  marginTop = 0,
  kpi1Number = "95%",
  kpi1Label = "reduction in root cause identification time (21 days to under 4 hours)",
  kpi2Number = "+30pp",
  kpi2Label = "F1-score improvement (58.55% to 88.55%) via DTS synthetic data augmentation",
  kpi3Number = "-90%",
  kpi3Label = "time-to-deploy: 4 weeks to 1 day on AI model production cycle",
}: Partial<Props>) {
  const kpis = [
    { number: kpi1Number, label: kpi1Label },
    { number: kpi2Number, label: kpi2Label },
    { number: kpi3Number, label: kpi3Label },
  ]

  return (
    <>
      <style>{`
        .s2-section {
          width: 100%;
          padding-top: 0;
          padding-bottom: 80px;
          background-color: ${tokens.colorSurfaceWhite};
          font-family: ${tokens.fontBase};
          -webkit-font-smoothing: antialiased;
        }

        .s2-inner {
          width: 100%;
          container-type: inline-size;
        }

        .s2-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        @container (min-width: 768px)  { .s2-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s2-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s2-container { padding: 0 120px; max-width: 1440px; } }

        .s2-kpi-band {
          border-radius: 40px;
          padding: 48px 32px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          justify-items: center;
          background-image: url('${IMAGE_BASE}/bg-gradient-deep-teal.png');
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
        }
        .s2-kpi-band::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.35);
          z-index: 0;
        }
        .s2-kpi-band > * { position: relative; z-index: 1; }

        @container (max-width: 1023px) {
          .s2-kpi-band { grid-template-columns: repeat(2, 1fr); }
        }
        @container (max-width: 767px) {
          .s2-kpi-band { grid-template-columns: 1fr; padding: 32px 16px; }
        }

        .s2-kpi-band__item {
          display: flex;
          flex-direction: column;
          gap: 12px;
          text-align: center;
        }

        .s2-kpi-band__number {
          font-family: ${tokens.fontBase};
          font-size: 50px;
          font-weight: 700;
          line-height: 1;
          color: ${tokens.colorWhite};
        }
        @container (max-width: 767px) {
          .s2-kpi-band__number { font-size: 40px; }
        }

        .s2-kpi-band__label {
          font-size: 14px;
          color: rgba(255,255,255,0.85);
          line-height: 1.5;
          font-family: ${tokens.fontBase};
        }
      `}</style>

      <section
        className="s2-section"
        id="section-2"
        style={{ marginTop }}
      >
        <div className="s2-inner">
        <div className="s2-container">
          <div className="s2-kpi-band">
            {kpis.map((item, i) => (
              <div className="s2-kpi-band__item" key={i}>
                <span className="s2-kpi-band__number">{item.number}</span>
                <p className="s2-kpi-band__label">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

// ─── Property Controls ────────────────────────────────────────────────────────
addPropertyControls(Section02_KpiBand, {
  marginTop: {
    type: ControlType.Number,
    title: "Margin Top",
    defaultValue: 0,
    min: 0,
    max: 200,
    step: 10,
    displayStepper: true,
  },
  kpi1Number: {
    type: ControlType.String,
    title: "KPI 1 Number",
    defaultValue: "95%",
  },
  kpi1Label: {
    type: ControlType.String,
    title: "KPI 1 Label",
    defaultValue:
      "reduction in root cause identification time (21 days to under 4 hours)",
    displayTextArea: true,
  },
  kpi2Number: {
    type: ControlType.String,
    title: "KPI 2 Number",
    defaultValue: "+30pp",
  },
  kpi2Label: {
    type: ControlType.String,
    title: "KPI 2 Label",
    defaultValue:
      "F1-score improvement (58.55% to 88.55%) via DTS synthetic data augmentation",
    displayTextArea: true,
  },
  kpi3Number: {
    type: ControlType.String,
    title: "KPI 3 Number",
    defaultValue: "-90%",
  },
  kpi3Label: {
    type: ControlType.String,
    title: "KPI 3 Label",
    defaultValue:
      "time-to-deploy: 4 weeks to 1 day on AI model production cycle",
    displayTextArea: true,
  },
})
