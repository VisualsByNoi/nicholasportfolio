import { useCallback, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Eyebrow from "../components/Eyebrow";
import ProjectCard from "../components/ProjectCard";
import CaseModal from "../components/CaseModal";
import CallToAction from "../components/CallToAction";
import { CATEGORIES, PROJECTS } from "../data/projects";
import useTitle from "../hooks/useTitle";

const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 36px;
`;

const Filter = styled.button`
  padding: 11px 16px;
  border-radius: 999px;
  border: 1px solid ${({ $active }) => ($active ? "var(--accent)" : "rgba(255,255,255,.18)")};
  background: ${({ $active }) => ($active ? "var(--accent)" : "transparent")};
  color: ${({ $active }) => ($active ? "var(--accent-ink)" : "var(--ink-2)")};
  font: 700 12px var(--font-sans);
  font-stretch: 110%;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: var(--accent);
    color: ${({ $active }) => ($active ? "var(--accent-ink)" : "var(--accent)")};
  }
  sup {
    margin-left: 4px;
    font: 10px var(--font-mono);
    opacity: 0.6;
  }
`;

export default function Portfolio() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");
  const open = PROJECTS.find((p) => p.id === id);
  useTitle(open ? open.title : "Portfolio");

  const cats = useMemo(() => [...new Set(PROJECTS.map((p) => p.category))], []);
  const list = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
  const close = useCallback(() => navigate("/portfolio"), [navigate]);

  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <Eyebrow>Portfolio</Eyebrow>
          <h1>Geselecteerd <span className="outline">werk</span></h1>
          <p className="lead">
            Websites en applicaties die ik heb gebouwd, aangevuld met branding en grafisch werk. Klik op een project
            voor de case.
          </p>
        </div>
      </section>

      <section style={{ paddingBottom: "clamp(72px,10vw,140px)" }}>
        <div className="wrap">
          <Filters role="toolbar" aria-label="Filter projecten">
            <Filter $active={filter === "all"} aria-pressed={filter === "all"} onClick={() => setFilter("all")}>
              Alles<sup>{PROJECTS.length}</sup>
            </Filter>
            {cats.map((c) => (
              <Filter key={c} $active={filter === c} aria-pressed={filter === c} onClick={() => setFilter(c)}>
                {CATEGORIES[c]}
                <sup>{PROJECTS.filter((p) => p.category === c).length}</sup>
              </Filter>
            ))}
          </Filters>
          <div className="grid">
            {list.map((p) => (
              <ProjectCard key={`${filter}-${p.id}`} project={p} size={filter === "all" ? p.size : "half"} />
            ))}
          </div>
        </div>
      </section>

      <CallToAction eyebrow="Volgende stap" title={<>Past mijn werk bij <span className="outline">jullie?</span></>} />
      <div style={{ height: "clamp(72px,10vw,140px)" }} />

      {open && <CaseModal key={open.id} project={open} onClose={close} />}
    </>
  );
}
