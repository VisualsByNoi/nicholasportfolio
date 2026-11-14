import { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { CATEGORIES } from "../data/projects";
import Book from "./Book";
import Button from "./Button";
import Eyebrow from "./Eyebrow";

const enter = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: none; }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  overflow-y: auto;
  background: var(--bg);
  animation: ${enter} 0.45s var(--ease);
`;

const TopBar = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  background: rgba(10, 12, 11, 0.82);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--line);

  .wrap { display: flex; justify-content: space-between; align-items: center; height: 64px; }
`;

const Close = styled.button`
  border: 0;
  border-radius: 999px;
  padding: 10px 18px;
  background: var(--accent);
  color: var(--accent-ink);
  font: 700 13px var(--font-sans);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  &:hover { background: var(--ink); }
`;

const Head = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: clamp(24px, 5vw, 80px);
  padding: clamp(40px, 6vw, 80px) 0 40px;
  h2 { margin: 16px 0 22px; }
  @media (max-width: 800px) { grid-template-columns: 1fr; }
`;

const Info = styled.dl`
  margin: 0;
  border-top: 1px solid var(--accent);
  div {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    padding: 14px 0;
    border-bottom: 1px solid var(--line);
    font: 13px var(--font-mono);
  }
  dt { color: var(--muted); }
  dd { margin: 0; text-align: right; font-weight: 700; }
`;

const Gallery = styled.div`
  display: grid;
  gap: 20px;
  padding-bottom: 96px;

  figure {
    margin: 0;
    border-radius: var(--radius);
    overflow: hidden;
    background: var(--surface);
    border: 1px solid var(--line);
  }
  figure.tall { max-width: 900px; margin: 0 auto; width: 100%; }
  figcaption {
    padding: 12px 18px;
    border-top: 1px solid var(--line);
    font: 13px var(--font-mono);
    color: var(--muted);
  }
`;

export default function CaseModal({ project: p, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const prev = document.activeElement;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus({ preventScroll: true });
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      prev?.focus?.({ preventScroll: true });
    };
  }, [onClose]);

  const rows = [
    ["Klant", p.client],
    ["Rol", p.role],
    ["Type", CATEGORIES[p.category]],
    ["Stack", p.stack?.join(" · ")],
    ["Status", p.status],
  ].filter(([, v]) => v);

  return (
    <Overlay role="dialog" aria-modal="true" aria-labelledby="case-title">
      <TopBar>
        <div className="wrap">
          <Eyebrow>{CATEGORIES[p.category]}</Eyebrow>
          <Close ref={closeRef} onClick={onClose}>Sluiten ✕</Close>
        </div>
      </TopBar>
      <div className="wrap">
        <Head>
          <div>
            <Eyebrow>Case</Eyebrow>
            <h2 id="case-title">{p.title}</h2>
            <p className="lead">{p.intro}</p>
            {p.url && (
              <Button href={p.url} target="_blank" rel="noopener noreferrer" arrow="↗">
                Bekijk live
              </Button>
            )}
          </div>
          <Info>
            {rows.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </Info>
        </Head>
        {p.book && <Book {...p.book} />}
        <Gallery>
          {p.gallery?.map((g) => (
            <figure key={g.src} className={g.tall ? "tall" : ""}>
              <img src={g.src} alt={g.caption || p.title} loading="lazy" />
              {g.caption && <figcaption>{g.caption}</figcaption>}
            </figure>
          ))}
        </Gallery>
      </div>
    </Overlay>
  );
}
