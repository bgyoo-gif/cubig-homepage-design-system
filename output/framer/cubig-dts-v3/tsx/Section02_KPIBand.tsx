import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

interface KPIItem {
  number: string
  label: string
  sub: string
}

interface Props {
  kpi1Number?: string
  kpi1Label?: string
  kpi1Sub?: string
  kpi2Number?: string
  kpi2Label?: string
  kpi2Sub?: string
  kpi3Number?: string
  kpi3Label?: string
  kpi3Sub?: string
  kpi4Number?: string
  kpi4Label?: string
  kpi4Sub?: string
  bannerText?: string
}

export default function Section02_KPIBand({
  kpi1Number = "+30pp",
  kpi1Label = "F1-Score Lift",
  kpi1Sub = "58.55% → 88.55%",
  kpi2Number = "-90%",
  kpi2Label = "Time to Deploy",
  kpi2Sub = "4 weeks → 1 day",
  kpi3Number = "97.6%",
  kpi3Label = "AI Detection Rate",
  kpi3Sub = "IBK Industrial Bank",
  kpi4Number = "277K+",
  kpi4Label = "Synthetic Records",
  kpi4Sub = "Kyobo Life Insurance",
  bannerText = "True AI-ready data means it is usable, privacy-safe, and stable for production execution.",
}: Props) {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s2-section {
          width: 100%;
          padding: 80px 0;
          background-color: #ffffff;
          font-family: "DM Sans", sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        .s2-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s2-kpi-band {
          border-radius: 40px;
          padding: 48px 32px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          justify-items: center;
          background-image: url('${IMAGE_BASE}/bg-lavender.png');
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
        .s2-kpi-item {
          display: flex;
          flex-direction: column;
          gap: 12px;
          text-align: center;
        }
        .s2-kpi-number {
          font-family: "DM Sans", sans-serif;
          font-size: 50px;
          font-weight: 700;
          line-height: 1;
          color: #ffffff;
        }
        .s2-kpi-label {
          font-size: 14px;
          color: rgba(255,255,255,0.85);
          line-height: 1.5;
        }
        .s2-kpi-sub {
          font-size: 12px;
          color: rgba(255,255,255,0.65);
          font-family: "Fragment Mono", monospace;
          margin-top: 2px;
        }
        .s2-banner-wrap {
          margin-top: 24px;
        }
        .s2-banner-full {
          width: 100%;
          text-align: center;
          padding: 32px 48px;
          border-radius: 40px;
          background-image: url('${IMAGE_BASE}/bg-green-wave.png');
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.7;
          border: none;
          isolation: isolate;
        }
        .s2-banner-full::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.45);
          z-index: 0;
        }
        .s2-banner-full > * { position: relative; z-index: 1; }
        .s2-banner-full p { color: #0f0f0f; }
        .s2-banner-full em { font-style: italic; }

        @media (max-width: 1023px) {
          .s2-kpi-band { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 767px) {
          .s2-kpi-band { grid-template-columns: 1fr; padding: 32px 20px; }
          .s2-kpi-number { font-size: 36px; }
        }
        @media (min-width: 768px) {
          .s2-container { padding: 0 32px; }
        }
        @media (min-width: 1024px) {
          .s2-container { padding: 0 32px; }
        }
        @media (min-width: 1440px) {
          .s2-container { padding: 0 120px; max-width: 1440px; }
        }
      `}</style>
      <section className="s2-section">
        <div className="s2-container">
          <div className="s2-kpi-band">
            <div className="s2-kpi-item">
              <span className="s2-kpi-number">{kpi1Number}</span>
              <p className="s2-kpi-label">{kpi1Label}</p>
              <span className="s2-kpi-sub">{kpi1Sub}</span>
            </div>
            <div className="s2-kpi-item">
              <span className="s2-kpi-number">{kpi2Number}</span>
              <p className="s2-kpi-label">{kpi2Label}</p>
              <span className="s2-kpi-sub">{kpi2Sub}</span>
            </div>
            <div className="s2-kpi-item">
              <span className="s2-kpi-number">{kpi3Number}</span>
              <p className="s2-kpi-label">{kpi3Label}</p>
              <span className="s2-kpi-sub">{kpi3Sub}</span>
            </div>
            <div className="s2-kpi-item">
              <span className="s2-kpi-number">{kpi4Number}</span>
              <p className="s2-kpi-label">{kpi4Label}</p>
              <span className="s2-kpi-sub">{kpi4Sub}</span>
            </div>
          </div>
          <div className="s2-banner-wrap">
            <div className="s2-banner-full">
              <p>True AI-ready data means it is <em>usable</em>, <em>privacy-safe</em>, and <em>stable for production execution</em>.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section02_KPIBand, {
  kpi1Number: { type: ControlType.String, title: "KPI1 Number", defaultValue: "+30pp" },
  kpi1Label: { type: ControlType.String, title: "KPI1 Label", defaultValue: "F1-Score Lift" },
  kpi1Sub: { type: ControlType.String, title: "KPI1 Sub", defaultValue: "58.55% → 88.55%" },
  kpi2Number: { type: ControlType.String, title: "KPI2 Number", defaultValue: "-90%" },
  kpi2Label: { type: ControlType.String, title: "KPI2 Label", defaultValue: "Time to Deploy" },
  kpi2Sub: { type: ControlType.String, title: "KPI2 Sub", defaultValue: "4 weeks → 1 day" },
  kpi3Number: { type: ControlType.String, title: "KPI3 Number", defaultValue: "97.6%" },
  kpi3Label: { type: ControlType.String, title: "KPI3 Label", defaultValue: "AI Detection Rate" },
  kpi3Sub: { type: ControlType.String, title: "KPI3 Sub", defaultValue: "IBK Industrial Bank" },
  kpi4Number: { type: ControlType.String, title: "KPI4 Number", defaultValue: "277K+" },
  kpi4Label: { type: ControlType.String, title: "KPI4 Label", defaultValue: "Synthetic Records" },
  kpi4Sub: { type: ControlType.String, title: "KPI4 Sub", defaultValue: "Kyobo Life Insurance" },
  bannerText: {
    type: ControlType.String,
    title: "Banner Text",
    defaultValue: "True AI-ready data means it is usable, privacy-safe, and stable for production execution.",
    displayTextArea: true,
  },
})
