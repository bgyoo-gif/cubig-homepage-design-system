import { useState, useEffect, useRef, useCallback } from "react";

const SILVER_CARD = {
  background: "linear-gradient(145deg, #ffffff 0%, #f0f0f0 40%, #e8e8e8 70%, #f5f5f5 100%)",
  border: "1px solid #d0d0d0",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -1px 0 rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.08)"
};
const SILVER_BOX = {
  background: "linear-gradient(160deg, #fafafa 0%, #efefef 50%, #e4e4e4 100%)",
  border: "1px solid #c8c8c8",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.85), 0 1px 2px rgba(0,0,0,0.07)"
};
const GRAD_NORMAL = {
  padding: "2px", borderRadius: "14px",
  background: "linear-gradient(135deg, #c8d8e8 0%, #d4c8e8 40%, #e8c8e4 100%)",
  boxShadow: "0 0 8px rgba(180,200,230,0.3), 0 0 16px rgba(200,180,230,0.15)"
};
const GRAD_ACCENT = {
  padding: "2px", borderRadius: "14px",
  background: "linear-gradient(135deg, #7dd3fc 0%, #a78bfa 30%, #e879f9 65%, #67e8f9 100%)",
  animation: "accentPulse 3s ease-in-out infinite"
};

function DbIcon({ size = 28, color = "#5aaee8", darkColor = "#3d91d1" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <ellipse cx="14" cy="7.5" rx="8.5" ry="3.2" fill={color} />
      <rect x="5.5" y="7.5" width="17" height="12" fill={color} />
      <ellipse cx="14" cy="19.5" rx="8.5" ry="3.2" fill={darkColor} />
      <ellipse cx="14" cy="13.5" rx="8.5" ry="2.8" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.7" />
    </svg>
  );
}

function ShieldDbIcon() {
  return (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
      <defs>
        <linearGradient id="dbg1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a0a0a0" /><stop offset="100%" stopColor="#707070" />
        </linearGradient>
      </defs>
      <ellipse cx="19" cy="10" rx="10" ry="4" fill="url(#dbg1)" />
      <rect x="9" y="10" width="20" height="14" fill="#888" />
      <ellipse cx="19" cy="24" rx="10" ry="4" fill="#666" />
      <ellipse cx="19" cy="17" rx="10" ry="3.2" fill="none" stroke="#bbb" strokeWidth="0.8" />
      <path d="M16 14.5L19 12.5L22 14.5L22 20Q19 22 16 20Z" fill="rgba(255,255,255,0.92)" />
      <polyline points="17,17.5 18.2,19 21,16" stroke="#555" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function GearDbIcon() {
  return (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
      <defs>
        <linearGradient id="dbg2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a0a0a0" /><stop offset="100%" stopColor="#707070" />
        </linearGradient>
      </defs>
      <ellipse cx="19" cy="10" rx="10" ry="4" fill="url(#dbg2)" />
      <rect x="9" y="10" width="20" height="14" fill="#888" />
      <ellipse cx="19" cy="24" rx="10" ry="4" fill="#666" />
      <ellipse cx="19" cy="17" rx="10" ry="3.2" fill="none" stroke="#bbb" strokeWidth="0.8" />
      <circle cx="19" cy="21" r="3.5" fill="rgba(255,255,255,0.92)" />
      <circle cx="19" cy="21" r="1.4" fill="#666" />
      {[[0],[45],[90],[135],[180],[225],[270],[315]].map(([a],i) => (
        <rect key={i} x="18.3" y="16.8" width="1.4" height="2.2" rx="0.4"
          fill="rgba(255,255,255,0.92)"
          transform={`rotate(${a} 19 21)`} />
      ))}
    </svg>
  );
}
function ShareIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="15.5" cy="3.5" r="2.2" fill="white" />
      <circle cx="4.5" cy="10" r="2.2" fill="white" />
      <circle cx="15.5" cy="16.5" r="2.2" fill="white" />
      <line x1="13.5" y1="4.8" x2="6.5" y2="8.7" stroke="white" strokeWidth="1.4" />
      <line x1="6.5" y1="11.3" x2="13.5" y2="15.2" stroke="white" strokeWidth="1.4" />
    </svg>
  );
}

function OsWindow({ children }) {
  return (
    <div style={{ background:"#f0f0f0", borderRadius:12, boxShadow:"0 8px 32px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.10)", overflow:"hidden", fontFamily:"-apple-system,'Helvetica Neue',Arial,sans-serif" }}>
      <div style={{ background:"linear-gradient(180deg,#e8e8e8,#d8d8d8)", height:36, display:"flex", alignItems:"center", padding:"0 14px", gap:8, borderBottom:"1px solid #c0c0c0" }}>
        {[["#ff5f57"],["#ffbd2e"],["#28ca41"]].map(([c],i)=>(
          <div key={i} style={{ width:12,height:12,borderRadius:"50%",background:c }} />
        ))}
      </div>
      <div style={{ background:"linear-gradient(135deg,#dff0ea 0%,#eef3ff 40%,#f3eeff 70%,#fdeef8 100%)", padding:28 }}>
        {children}
      </div>
    </div>
  );
}

function SectionDivider() {
  return <div style={{ width:"100%", borderRight:"1.5px dashed #ccc", position:"absolute", top:0, bottom:0 }} />;
}

function ArrowSvg({ bodyRef, genRef, validRef, analRef, rightRef }) {
  const [paths, setPaths] = useState({ l1:"", x3:0,y3:0,x4:0,y4:0 });
  useEffect(() => {
    function calc() {
      if (!bodyRef.current||!genRef.current||!validRef.current||!analRef.current||!rightRef.current) return;
      const bp = bodyRef.current.getBoundingClientRect();
      const g  = genRef.current.getBoundingClientRect();
      const v  = validRef.current.getBoundingClientRect();
      const a  = analRef.current.getBoundingClientRect();
      const r  = rightRef.current.getBoundingClientRect();
      const rel = el => ({
        left: el.left-bp.left, right: el.right-bp.left,
        midY:(el.top+el.bottom)/2-bp.top
      });
      const gr = rel(g), vr = rel(v), ar = rel(a), rr = rel(r);
      const midY = (vr.midY+ar.midY)/2;
      const mx = (gr.right+vr.left)/2;
      setPaths({
        l1:`M${gr.right+1} ${gr.midY} L${mx} ${gr.midY} L${mx} ${midY} L${vr.left-2} ${midY}`,
        x3: vr.right+2, y3: midY, x4: rr.left-2, y4: midY
      });
    }
    const t = setTimeout(calc,80);
    window.addEventListener("resize",calc);
    return () => { clearTimeout(t); window.removeEventListener("resize",calc); };
  }, []);

  return (
    <svg style={{ position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",overflow:"visible" }}>
      <defs>
        <marker id="ah-dk" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M2 1L8 5L2 9" fill="none" stroke="#444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </marker>
        <marker id="ah-bl" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M2 1L8 5L2 9" fill="none" stroke="#4a9de0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </marker>
      </defs>
      {paths.l1 && <path d={paths.l1} fill="none" stroke="#444" strokeWidth="1.5" markerEnd="url(#ah-dk)" />}
      {paths.x4>0 && <line x1={paths.x3} y1={paths.y3} x2={paths.x4} y2={paths.y4} stroke="#4a9de0" strokeWidth="1.5" markerEnd="url(#ah-bl)" />}
    </svg>
  );
}

function DefaultDiagram() {
  const bodyRef=useRef(), genRef=useRef(), validRef=useRef(), analRef=useRef(), rightRef=useRef();
  return (
    <OsWindow>
      <div style={{ ...SILVER_CARD, borderRadius:14, overflow:"hidden" }}>
        <div style={{ textAlign:"center", padding:"15px 24px 13px", fontSize:14, fontWeight:500, color:"#2a2a2a", letterSpacing:"0.04em", borderBottom:"1px solid #efefef", fontFamily:"'Courier New',monospace", background:"linear-gradient(180deg,#fff 0%,#f8f8f8 100%)" }}>
          CUBIG's Data Management Solution
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", borderBottom:"1px dashed #d0d0d0" }}>
          {["Safe Data Transformation","Trusted Data Activation","Safe Data Exchange"].map((t,i)=>(
            <div key={i} style={{ padding:"11px 12px", fontSize:12.5, color:"#444", textAlign:"center", borderRight: i<2?"1px dashed #d0d0d0":"none", background:"#fafafa" }}>{t}</div>
          ))}
        </div>
        <div ref={bodyRef} style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", position:"relative" }}>
          <div style={{ padding:"24px 16px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", borderRight:"1px dashed #d0d0d0" }}>
            <div style={{ border:"1.5px dashed #c0c0c0", borderRadius:12, padding:"18px 14px", background:"#f7f7f7", width:"100%", display:"flex", flexDirection:"column", alignItems:"center" }}>
              <div style={{ ...SILVER_BOX, borderRadius:8, padding:"10px 0", width:"100%", textAlign:"center", fontSize:13, color:"#222", position:"relative" }}>
                Raw Data
                <div style={{ position:"absolute", right:-5, top:"50%", transform:"translateY(-50%)", width:8, height:8, background:"#999", borderRadius:"50%" }} />
              </div>
              <div style={{ width:1.5, height:14, background:"#888", margin:"6px 0 0", position:"relative" }}>
                <div style={{ position:"absolute", left:"50%", bottom:-6, transform:"translateX(-50%)", borderLeft:"5px solid transparent", borderRight:"5px solid transparent", borderTop:"6px solid #888" }} />
              </div>
              <div style={{ height:10 }} />
              <div ref={genRef} style={{ ...SILVER_BOX, borderRadius:8, padding:"10px 0", width:"100%", textAlign:"center", fontSize:13, color:"#222" }}>
                Data Generation
              </div>
              <div style={{ display:"flex",flexDirection:"column",alignItems:"center",gap:3,margin:"6px 0" }}>
                {[0,1,2,3].map(i=><div key={i} style={{ width:1.5,height:4,background:"#bbb",borderRadius:1 }} />)}
              </div>
              <div style={{ ...SILVER_BOX, borderRadius:8, padding:"10px 0", width:"100%", textAlign:"center", fontSize:13, color:"#222", position:"relative" }}>
                Data Integration
                <div style={{ position:"absolute", right:-5, top:"50%", transform:"translateY(-50%)", width:8, height:8, background:"#bbb", borderRadius:"50%" }} />
              </div>
            </div>
          </div>
          <div style={{ padding:"24px 12px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:10, borderRight:"1px dashed #d0d0d0" }}>
            <div ref={validRef} style={{ ...SILVER_CARD, borderRadius:12, padding:"15px 10px 13px", width:"100%", display:"flex", flexDirection:"column", alignItems:"center", gap:8 }}>
              <div style={{ width:52,height:52, background:"linear-gradient(145deg,#f0f0f0,#ddd)", borderRadius:10, display:"flex",alignItems:"center",justifyContent:"center" }}>
                <ShieldDbIcon />
              </div>
              <div style={{ fontSize:13,color:"#222" }}>Data Validation</div>
            </div>
            <div ref={analRef} style={{ ...SILVER_CARD, borderRadius:12, padding:"15px 10px 13px", width:"100%", display:"flex", flexDirection:"column", alignItems:"center", gap:8 }}>
              <div style={{ width:52,height:52, background:"linear-gradient(145deg,#f0f0f0,#ddd)", borderRadius:10, display:"flex",alignItems:"center",justifyContent:"center" }}>
                <GearDbIcon />
              </div>
              <div style={{ fontSize:13,color:"#222" }}>Data Analysis</div>
            </div>
          </div>
          <div ref={rightRef} style={{ padding:"20px 12px", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <div style={{ ...GRAD_ACCENT, width:"100%" }}>
              <div style={{ background:"linear-gradient(145deg,rgba(237,246,255,0.95),rgba(243,236,255,0.92),rgba(255,238,255,0.9))", borderRadius:12, padding:"14px 11px", display:"flex",flexDirection:"column",alignItems:"center",gap:8 }}>
                <div style={{ background:"#fff", border:"1.5px solid #5badee", borderRadius:20, padding:"3px 11px", fontSize:10.5, fontWeight:700, color:"#2b8dd6", letterSpacing:"0.12em" }}>SAFE</div>
                <div style={{ fontSize:15,fontWeight:700,color:"#111" }}>Data Sharing</div>
                <div style={{ width:40,height:40, background:"linear-gradient(135deg,#3b82f6,#1d4ed8)", borderRadius:9, display:"flex",alignItems:"center",justifyContent:"center", boxShadow:"0 2px 8px rgba(59,130,246,0.4)" }}>
                  <ShareIcon />
                </div>
                <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:6, width:"100%" }}>
                  {[0,1,2,3,4,5].map(i=>(
                    <div key={i} style={{ display:"flex",alignItems:"center",justifyContent:"center",position:"relative" }}>
                      <DbIcon size={28} />
                      <div style={{ position:"absolute",bottom:-1,right:0, width:13,height:13, background:"#3b82f6", borderRadius:"50%", border:"1.5px solid #e8eeff", display:"flex",alignItems:"center",justifyContent:"center" }}>
                        <svg width="7" height="7" viewBox="0 0 7 7"><polyline points="1,3.5 2.8,5.5 6,1.5" stroke="white" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <ArrowSvg bodyRef={bodyRef} genRef={genRef} validRef={validRef} analRef={analRef} rightRef={rightRef} />
        </div>
      </div>
    </OsWindow>
  );
}

function parsePrompt(text) {
  const t = text.toLowerCase();
  const sections = [];
  const arrows = [];

  const sectionRe = /section\s*[:\s]+([^\|,\n]+)/gi;
  let m;
  while ((m = sectionRe.exec(text)) !== null) {
    const raw = m[1].trim();
    const headerMatch = raw.match(/^([^(]+)\(([^)]+)\)/);
    const header = headerMatch ? headerMatch[1].trim() : raw.split(/\s+with\s+/i)[0].trim();
    const itemStr = headerMatch ? headerMatch[2] : (raw.split(/\s+with\s+/i)[1] || "");
    const items = itemStr.split(/[,;]/).map(s=>s.trim()).filter(Boolean);
    let type = "default";
    if (/transform|process|generat|integrat/i.test(header+itemStr)) type="transform";
    else if (/valid|analys|activat|check/i.test(header+itemStr)) type="activation";
    else if (/shar|exchang|safe|output/i.test(header+itemStr)) type="exchange";
    sections.push({ header, items, type });
  }

  const arrowRe = /arrow\s*(?:from\s*)?["']?([^"'\-→>]+?)["']?\s*(?:->|→|to)\s*["']?([^"'\n,]+?)["']?\s*(?:color\s*[:\s]+(\w+))?/gi;
  while ((m = arrowRe.exec(text)) !== null) {
    arrows.push({ from: m[1].trim(), to: m[2].trim(), color: m[3]||"dark" });
  }

  if (sections.length === 0) return null;
  return { sections, arrows };
}

function BuiltSection({ sec, sRef }) {
  if (sec.type === "transform") {
    return (
      <div style={{ padding:"24px 16px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }}>
        <div style={{ border:"1.5px dashed #c0c0c0", borderRadius:12, padding:"16px 12px", background:"#f7f7f7", width:"100%", display:"flex", flexDirection:"column", alignItems:"center" }}>
          {sec.items.map((item,i)=>(
            <div key={i} style={{ width:"100%" }}>
              <div ref={i===0?sRef:null} style={{ ...SILVER_BOX, borderRadius:8, padding:"10px 0", width:"100%", textAlign:"center", fontSize:13, color:"#222", position:"relative" }}>
                {item}
                {(i===0||i===sec.items.length-1)&&<div style={{ position:"absolute",right:-5,top:"50%",transform:"translateY(-50%)",width:8,height:8,background:"#999",borderRadius:"50%" }}/>}
              </div>
              {i<sec.items.length-1&&(
                <div style={{ display:"flex",flexDirection:"column",alignItems:"center",margin:"4px 0" }}>
                  <div style={{ width:1.5,height:14,background:"#888",position:"relative" }}>
                    <div style={{ position:"absolute",left:"50%",bottom:-5,transform:"translateX(-50%)",borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderTop:"6px solid #888" }}/>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (sec.type === "activation") {
    return (
      <div style={{ padding:"24px 12px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:10 }}>
        {sec.items.map((item,i)=>(
          <div key={i} ref={i===0?sRef:null} style={{ ...SILVER_CARD, borderRadius:12, padding:"15px 10px 13px", width:"100%", display:"flex", flexDirection:"column", alignItems:"center", gap:8 }}>
            <div style={{ width:48,height:48, background:"linear-gradient(145deg,#f0f0f0,#ddd)", borderRadius:10, display:"flex",alignItems:"center",justifyContent:"center" }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <ellipse cx="16" cy="9" rx="9" ry="3.5" fill="#888"/>
                <rect x="7" y="9" width="18" height="12" fill="#888"/>
                <ellipse cx="16" cy="21" rx="9" ry="3.5" fill="#666"/>
              </svg>
            </div>
            <div style={{ fontSize:13,color:"#222" }}>{item}</div>
          </div>
        ))}
      </div>
    );
  }
  if (sec.type === "exchange") {
    return (
      <div style={{ padding:"20px 12px", display:"flex", alignItems:"center", justifyContent:"center" }}>
        <div ref={sRef} style={{ ...GRAD_ACCENT, width:"100%" }}>
          <div style={{ background:"linear-gradient(145deg,rgba(237,246,255,0.95),rgba(243,236,255,0.92))", borderRadius:12, padding:"14px 11px", display:"flex",flexDirection:"column",alignItems:"center",gap:8 }}>
            <div style={{ background:"#fff",border:"1.5px solid #5badee",borderRadius:20,padding:"3px 11px",fontSize:10.5,fontWeight:700,color:"#2b8dd6",letterSpacing:"0.12em" }}>SAFE</div>
            <div style={{ fontSize:14,fontWeight:700,color:"#111" }}>{sec.items[0]||sec.header}</div>
            <div style={{ width:38,height:38,background:"linear-gradient(135deg,#3b82f6,#1d4ed8)",borderRadius:9,display:"flex",alignItems:"center",justifyContent:"center" }}><ShareIcon/></div>
            <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:6,width:"100%"}}>
              {[0,1,2,3,4,5].map(i=>(
                <div key={i} style={{ display:"flex",alignItems:"center",justifyContent:"center",position:"relative" }}>
                  <DbIcon size={26}/>
                  <div style={{ position:"absolute",bottom:-1,right:0,width:12,height:12,background:"#3b82f6",borderRadius:"50%",border:"1.5px solid #e8eeff",display:"flex",alignItems:"center",justifyContent:"center" }}>
                    <svg width="6" height="6" viewBox="0 0 6 6"><polyline points="0.8,3 2.5,5 5.2,1.2" stroke="white" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div style={{ padding:"24px 12px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:8 }}>
      {sec.items.map((item,i)=>(
        <div key={i} ref={i===0?sRef:null} style={{ ...GRAD_NORMAL, width:"100%" }}>
          <div style={{ background:"linear-gradient(145deg,#fff,#f0f0f0)", borderRadius:12, padding:"12px", textAlign:"center", fontSize:13, color:"#222" }}>{item}</div>
        </div>
      ))}
    </div>
  );
}

function BuiltDiagram({ parsed }) {
  const bodyRef = useRef();
  const secRefs = useRef(parsed.sections.map(()=>({ current:null })));
  const [, forceUpdate] = useState(0);
  useEffect(()=>{ setTimeout(()=>forceUpdate(n=>n+1),100); },[parsed]);

  const cols = parsed.sections.length;
  const colStr = Array(cols).fill("1fr").join(" ");

  return (
    <OsWindow>
      <div style={{ ...SILVER_CARD, borderRadius:14, overflow:"hidden" }}>
        <div style={{ textAlign:"center", padding:"13px 24px", fontSize:14, fontWeight:500, color:"#2a2a2a", letterSpacing:"0.04em", borderBottom:"1px solid #efefef", fontFamily:"'Courier New',monospace", background:"linear-gradient(180deg,#fff,#f8f8f8)" }}>
          Custom Diagram
        </div>
        <div style={{ display:"grid", gridTemplateColumns:colStr, borderBottom:"1px dashed #d0d0d0" }}>
          {parsed.sections.map((s,i)=>(
            <div key={i} style={{ padding:"11px 12px", fontSize:12.5, color:"#444", textAlign:"center", borderRight:i<cols-1?"1px dashed #d0d0d0":"none", background:"#fafafa" }}>{s.header}</div>
          ))}
        </div>
        <div ref={bodyRef} style={{ display:"grid", gridTemplateColumns:colStr, position:"relative" }}>
          {parsed.sections.map((sec,i)=>(
            <div key={i} style={{ borderRight:i<cols-1?"1px dashed #d0d0d0":"none" }}>
              <BuiltSection sec={sec} sRef={secRefs.current[i]} />
            </div>
          ))}
          <DynamicArrows bodyRef={bodyRef} secRefs={secRefs.current} arrows={parsed.arrows} />
        </div>
      </div>
    </OsWindow>
  );
}

function DynamicArrows({ bodyRef, secRefs, arrows }) {
  const [lines, setLines] = useState([]);
  useEffect(()=>{
    function calc() {
      if (!bodyRef.current) return;
      const bp = bodyRef.current.getBoundingClientRect();
      const newLines = [];
      for (let i=0; i<secRefs.length-1; i++) {
        const a = secRefs[i]?.current;
        const b = secRefs[i+1]?.current;
        if (!a||!b) continue;
        const ar = a.getBoundingClientRect(), br = b.getBoundingClientRect();
        const x1 = ar.right-bp.left+2;
        const y1 = (ar.top+ar.bottom)/2-bp.top;
        const x2 = br.left-bp.left-2;
        const y2 = (br.top+br.bottom)/2-bp.top;
        const color = i===secRefs.length-2 ? "#4a9de0" : "#444";
        const mid = i===0 && Math.abs(y1-y2)>10;
        newLines.push({ x1,y1,x2,y2,color,mid,mx:(x1+x2)/2 });
      }
      setLines(newLines);
    }
    const t = setTimeout(calc,100);
    window.addEventListener("resize",calc);
    return()=>{ clearTimeout(t); window.removeEventListener("resize",calc); };
  },[secRefs]);

  return (
    <svg style={{ position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",overflow:"visible" }}>
      <defs>
        <marker id="adark" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M2 1L8 5L2 9" fill="none" stroke="#444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </marker>
        <marker id="ablue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M2 1L8 5L2 9" fill="none" stroke="#4a9de0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </marker>
      </defs>
      {lines.map((l,i)=>(
        l.mid
          ? <path key={i} d={`M${l.x1} ${l.y1} L${l.mx} ${l.y1} L${l.mx} ${l.y2} L${l.x2} ${l.y2}`} fill="none" stroke={l.color} strokeWidth="1.5" markerEnd={`url(#${l.color==="#444"?"adark":"ablue"})`}/>
          : <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke={l.color} strokeWidth="1.5" markerEnd={`url(#${l.color==="#444"?"adark":"ablue"})`}/>
      ))}
    </svg>
  );
}

const EXAMPLES = [
  `Section: Data Ingestion (Raw Events, Log Streams, API Feeds)\nSection: Processing (Filtering, Enrichment, Aggregation)\nSection: Output (Safe Export, Reporting)`,
  `Section: Auth Flow (User Request, Token Validation, Permission Check)\nSection: Service (Business Logic, Cache Lookup, DB Query)\nSection: Response (Format Output, Deliver Data)`,
];

export default function App() {
  const [input, setInput] = useState("");
  const [diagram, setDiagram] = useState("default");
  const [parsed, setParsed] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleGenerate() {
    if (!input.trim()) return;
    setLoading(true); setError("");
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          model:"claude-sonnet-4-20250514",
          max_tokens:1000,
          messages:[{
            role:"user",
            content:`Convert this diagram request into a structured format. Output ONLY valid JSON, no markdown, no explanation.

User request: "${input}"

Output this JSON schema:
{
  "title": "diagram title",
  "sections": [
    {
      "header": "section header label",
      "type": "transform|activation|exchange|default",
      "items": ["item1","item2"]
    }
  ]
}

Rules:
- type "transform": vertical stack with dashed container (process/pipeline steps)
- type "activation": stacked silver cards with icons (validation/analysis)
- type "exchange": accent gradient card with grid (output/sharing/safe zone)
- type "default": simple gradient border cards
- 2-4 sections max, 2-4 items per section`
          }]
        })
      });
      const data = await res.json();
      const raw = data.content?.find(c=>c.type==="text")?.text||"";
      const clean = raw.replace(/```json|```/g,"").trim();
      const obj = JSON.parse(clean);
      setParsed(obj);
      setDiagram("built");
    } catch(e) {
      setError("파싱 오류. 예시 형식을 참고해 다시 입력해 주세요.");
    }
    setLoading(false);
  }

  function loadExample(ex) { setInput(ex); }

  return (
    <div style={{ fontFamily:"-apple-system,'Helvetica Neue',Arial,sans-serif" }}>
      <style>{`
        @keyframes accentPulse {
          0%,100%{box-shadow:0 0 14px rgba(125,211,252,0.5),0 0 28px rgba(167,139,250,0.35),0 0 10px rgba(232,121,249,0.3)}
          50%{box-shadow:0 0 22px rgba(125,211,252,0.75),0 0 42px rgba(167,139,250,0.55),0 0 20px rgba(232,121,249,0.5)}
        }
      `}</style>

      {diagram==="default" ? <DefaultDiagram/> : parsed && <BuiltDiagram parsed={parsed}/>}

      <div style={{ marginTop:20, background:"#f8f8f8", border:"1px solid #e0e0e0", borderRadius:12, padding:16 }}>
        <div style={{ fontSize:12, color:"#666", marginBottom:8, fontWeight:500 }}>다이어그램 생성 — 프롬프트로 그리기</div>
        <textarea
          value={input}
          onChange={e=>setInput(e.target.value)}
          placeholder={"예) 3단계 데이터 파이프라인: 수집 → 처리 → 배포\n또는 아래 예시 클릭"}
          style={{ width:"100%", height:88, borderRadius:8, border:"1px solid #ccc", padding:"10px 12px", fontSize:13, resize:"none", fontFamily:"inherit", outline:"none", boxSizing:"border-box" }}
          onKeyDown={e=>{ if(e.key==="Enter"&&(e.metaKey||e.ctrlKey)) handleGenerate(); }}
        />
        <div style={{ display:"flex", gap:8, marginTop:8, flexWrap:"wrap", alignItems:"center" }}>
          <button onClick={handleGenerate} disabled={loading||!input.trim()} style={{ background:"linear-gradient(135deg,#3b82f6,#1d4ed8)", color:"#fff", border:"none", borderRadius:8, padding:"8px 18px", fontSize:13, cursor:"pointer", opacity:loading||!input.trim()?0.5:1 }}>
            {loading ? "생성 중…" : "생성 ↗"}
          </button>
          <button onClick={()=>{setDiagram("default");setParsed(null);setInput("");}} style={{ background:"#fff", color:"#555", border:"1px solid #ccc", borderRadius:8, padding:"8px 14px", fontSize:13, cursor:"pointer" }}>
            기본으로
          </button>
          <span style={{ fontSize:11.5, color:"#999" }}>예시:</span>
          {EXAMPLES.map((ex,i)=>(
            <button key={i} onClick={()=>loadExample(ex)} style={{ background:"#fff", color:"#4a7dd6", border:"1px solid #b8cef0", borderRadius:6, padding:"5px 10px", fontSize:11.5, cursor:"pointer" }}>
              예시 {i+1}
            </button>
          ))}
        </div>
        {error && <div style={{ marginTop:8, fontSize:12, color:"#c0392b" }}>{error}</div>}
        <div style={{ marginTop:10, fontSize:11.5, color:"#aaa" }}>
          섹션 타입: transform(파이프라인) · activation(검증/분석) · exchange(출력/공유) · default(일반)
        </div>
      </div>
    </div>
  );
}
