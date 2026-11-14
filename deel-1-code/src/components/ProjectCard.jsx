import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { CATEGORIES } from "../data/projects";
import { useReveal } from "./Reveal";
import BrowserFrame from "./BrowserFrame";

const Card = styled(Link)`
  grid-column: span 6;
  display: flex;
  flex-direction: column;
  color: inherit;
  text-decoration: none;
  opacity: ${({ $in }) => ($in ? 1 : 0)};
  transform: translateY(${({ $in }) => ($in ? "0" : "24px")});
  transition: opacity 0.8s var(--ease), transform 0.8s var(--ease);

  ${({ $size }) => $size === "wide" && css`grid-column: span 12;`}
  ${({ $size }) => $size === "tall" && css`grid-row: span 2;`}

  @media (max-width: 900px) {
    grid-column: span 12;
    grid-row: auto;
  }
`;

const Media = styled.div`
  position: relative;
  overflow: hidden;
  aspect-ratio: ${({ $size }) => ($size === "wide" ? "21 / 9" : "4 / 3")};
  border-radius: var(--radius);
  border: 1px solid var(--line);
  background: ${({ $bg }) => $bg || "var(--surface)"};
  transition: border-color 0.35s;

  ${({ $size }) =>
    $size === "tall" &&
    css`
      flex: 1;
      aspect-ratio: auto;
      min-height: 560px;
      background: #e6e6e3;
    `}

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    transition: transform 0.7s var(--ease), object-position 6s cubic-bezier(0.45, 0, 0.2, 1);
  }
  ${({ $size }) =>
    $size === "tall" &&
    css`
      > img { position: absolute; inset: 0; }
    `}

  ${Card}:hover & {
    border-color: rgba(95, 211, 189, 0.5);
  }
  ${Card}:hover & > img {
    transform: ${({ $size }) => ($size === "tall" ? "none" : "scale(1.035)")};
    object-position: ${({ $size }) => ($size === "tall" ? "center 100%" : "top center")};
  }
  ${Card}:hover & .frame {
    transform: translateY(-16px);
    transition-duration: 0.5s;
    transition-delay: 0s;
  }

  @media (max-width: 900px) {
    aspect-ratio: ${({ $size }) => ($size === "tall" ? "3 / 4" : "4 / 3")};
    min-height: 0;
    flex: none;
  }
`;

const Badge = styled.span`
  position: absolute;
  top: 14px;
  left: 14px;
  z-index: 2;
  padding: 7px 10px;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: rgba(10, 12, 11, 0.75);
  backdrop-filter: blur(6px);
  color: var(--ink);
  font: 11px/1 var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.06em;

  ${({ $live }) =>
    $live &&
    css`
      &::before {
        content: "";
        display: inline-block;
        width: 6px;
        height: 6px;
        margin-right: 6px;
        border-radius: 50%;
        background: #e0a100;
        vertical-align: 1px;
      }
    `}
`;

const Open = styled.span`
  position: absolute;
  right: 14px;
  bottom: 14px;
  z-index: 3;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--accent);
  color: var(--accent-ink);
  font-size: 18px;
  font-weight: 700;
  opacity: 0;
  transform: scale(0.6);
  transition: transform 0.35s var(--ease), opacity 0.35s;

  ${Card}:hover &,
  ${Card}:focus-visible & {
    opacity: 1;
    transform: none;
  }
`;

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
  padding: 16px 4px 0;

  h3 {
    font-weight: 850;
    font-stretch: 118%;
    text-transform: uppercase;
    font-size: 22px;
    letter-spacing: -0.01em;
    transition: color 0.3s;
  }
  ${Card}:hover & h3 {
    color: var(--accent);
  }
  p {
    margin: 4px 0 0;
    color: var(--muted);
    font: 13.5px/1.6 var(--font-mono);
  }
  span {
    font: 11px var(--font-mono);
    color: var(--accent);
    white-space: nowrap;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
`;

export default function ProjectCard({ project: p, size }) {
  const [ref, inView] = useReveal();
  const s = size ?? p.size;
  return (
    <Card ref={ref} to={`/portfolio/${p.id}`} $size={s} $in={inView} aria-label={`${p.title} — bekijk project`}>
      <Media $size={s} $bg={p.shot ? p.cover?.bg : undefined}>
        <Badge $live={!!p.status}>{p.status || CATEGORIES[p.category]}</Badge>
        {p.shot ? (
          <BrowserFrame src={p.shot} alt={`${p.title} — homepage`} domain={p.cover?.domain} wide={s === "wide"} inView={inView} position={p.shotPos} />
        ) : (
          <img src={p.image} alt={p.title} loading="lazy" style={p.imagePos ? { objectPosition: p.imagePos } : undefined} />
        )}
        <Open aria-hidden="true">↗</Open>
      </Media>
      <Meta>
        <div>
          <h3>{p.title}</h3>
          <p>{p.subtitle}</p>
        </div>
        <span>{p.role}</span>
      </Meta>
    </Card>
  );
}
