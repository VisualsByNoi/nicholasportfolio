import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Wrap = styled.section`
  margin: 0 auto 28px;
  max-width: max(320px, calc((100vh - 240px) * 1.6));
  outline: none;
`;

const Stage = styled.div`
  position: relative;
  aspect-ratio: ${({ $ratio }) => $ratio};
  border-radius: var(--radius);
  border: 1px solid var(--line);
  overflow: hidden;
  background: #fff;
  user-select: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: opacity 0.25s var(--ease), transform 0.35s var(--ease);
  }
  img.turning {
    opacity: 0.35;
    transform: scale(0.985);
  }
`;

const Nav = styled.button`
  position: absolute;
  top: 50%;
  ${({ $side }) => ($side === "prev" ? "left: 16px;" : "right: 16px;")}
  width: 52px;
  height: 52px;
  border: 0;
  border-radius: 50%;
  background: var(--accent);
  color: var(--accent-ink);
  font-size: 20px;
  cursor: pointer;
  transform: translateY(-50%);
  transition: background 0.2s, transform 0.2s, opacity 0.2s;

  &:hover { background: var(--ink); transform: translateY(-50%) scale(1.06); }
  &:disabled { opacity: 0; pointer-events: none; }
  @media (max-width: 700px) { width: 40px; height: 40px; font-size: 16px; }
`;

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 4px 12px;
  font: 13px var(--font-mono);
  color: var(--muted);
  b { color: var(--ink); font-weight: 700; }
`;

const Thumbs = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding: 4px 2px 12px;
  scrollbar-width: thin;
`;

const Thumb = styled.button`
  flex: 0 0 auto;
  width: 104px;
  aspect-ratio: ${({ $ratio }) => $ratio};
  padding: 0;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid ${({ $active }) => ($active ? "var(--accent)" : "transparent")};
  background: var(--surface);
  opacity: ${({ $active }) => ($active ? 1 : 0.55)};
  cursor: pointer;
  transition: opacity 0.2s, border-color 0.2s;
  &:hover { opacity: 0.9; }
  img { width: 100%; height: 100%; object-fit: cover; }
  @media (max-width: 700px) { width: 80px; }
`;

/* Bladerbaar boek: pijlen, pijltjestoetsen, swipen en miniaturen */
export default function Book({ pages, path, title, ratio = "842 / 595" }) {
  const [page, setPage] = useState(0);
  const [turning, setTurning] = useState(false);
  const thumbsRef = useRef(null);
  const touchX = useRef(null);

  const go = useCallback(
    (n) => setPage((cur) => {
      const next = Math.max(0, Math.min(pages - 1, typeof n === "function" ? n(cur) : n));
      if (next !== cur) setTurning(true);
      return next;
    }),
    [pages]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") go((c) => c + 1);
      if (e.key === "ArrowLeft") go((c) => c - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  useEffect(() => {
    const strip = thumbsRef.current;
    const t = strip?.children[page];
    if (t) strip.scrollTo({ left: t.offsetLeft - strip.clientWidth / 2 + t.clientWidth / 2, behavior: "smooth" });
    [page + 1, page - 1].forEach((n) => { if (n >= 0 && n < pages) new Image().src = `${path}${n + 1}.jpg`; });
  }, [page, pages, path]);

  return (
    <Wrap
      aria-label={title}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) go((c) => c + (dx < 0 ? 1 : -1));
        touchX.current = null;
      }}
    >
      <Stage $ratio={ratio}>
        <img
          src={`${path}${page + 1}.jpg`}
          alt={`${title} — pagina ${page + 1}`}
          className={turning ? "turning" : ""}
          onLoad={() => setTurning(false)}
        />
        <Nav $side="prev" onClick={() => go((c) => c - 1)} disabled={page === 0} aria-label="Vorige pagina">←</Nav>
        <Nav $side="next" onClick={() => go((c) => c + 1)} disabled={page === pages - 1} aria-label="Volgende pagina">→</Nav>
      </Stage>
      <Bar>
        <span>{title}</span>
        <span aria-live="polite"><b>{page + 1}</b> / {pages}</span>
      </Bar>
      <Thumbs ref={thumbsRef}>
        {Array.from({ length: pages }, (_, i) => (
          <Thumb key={i} $ratio={ratio} $active={i === page} onClick={() => go(i)} aria-label={`Ga naar pagina ${i + 1}`} aria-current={i === page}>
            <img src={`${path}thumbs/${i + 1}.jpg`} alt="" loading="lazy" />
          </Thumb>
        ))}
      </Thumbs>
    </Wrap>
  );
}
