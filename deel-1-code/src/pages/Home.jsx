import Button from "../components/Button";
import Eyebrow from "../components/Eyebrow";
import Marquee from "../components/Marquee";
import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";
import CallToAction from "../components/CallToAction";
import { PROJECTS, FEATURED } from "../data/projects";
import { asset } from "../utils/asset";
import useTitle from "../hooks/useTitle";

export default function Home() {
  useTitle();
  const featured = FEATURED.map((id) => PROJECTS.find((p) => p.id === id));

  return (
    <>
      <section className="hero">
        <div className="wrap hero__grid">
          <div>
            <Eyebrow>Frontend developer · Amsterdam</Eyebrow>
            <h1>
              Ik bouw
              <br />
              voor het <span className="outline">web</span>
              <span className="cursor" aria-hidden="true" />
            </h1>
            <p className="lead">
              Hoi, ik ben Nicholas Faas — frontend developer met ruim twee jaar ervaring in het bouwen en onderhouden van
              webapplicaties die toegankelijk, responsive en goed te onderhouden zijn.
            </p>
            <div className="hero__actions">
              <Button to="/portfolio" arrow="→">Bekijk mijn werk</Button>
              <Button to="/cv" ghost>Bekijk mijn CV</Button>
            </div>
          </div>
          <Reveal as="figure" className="hero__photo">
            <img src={asset("img/nicholas.jpg")} alt="Portret van Nicholas Faas" width="1100" height="1650" />
            <figcaption className="hero__tag">
              <b>Nicholas Faas</b>
              <span>25 · Amsterdam</span>
            </figcaption>
          </Reveal>
        </div>
      </section>

      <Marquee />

      <section className="section" aria-labelledby="over-mij">
        <div className="wrap">
          <div className="about">
            <div>
              <Eyebrow>Over mij</Eyebrow>
              <h2 id="over-mij">
                Van vraag
                <br />
                naar <span className="outline">code</span>.
              </h2>
            </div>
            <Reveal className="about__text">
              <p>
                Ik ben hbo-afgestudeerd in Communication &amp; Multimedia Design aan de Hogeschool van Amsterdam en werk
                al ruim twee jaar als frontend developer. Bij Envalue was ik in een multidisciplinair scrumteam
                verantwoordelijk voor eigen onderdelen van hun platform: nieuwe functionaliteit bouwen, bestaande schermen
                onderhouden en werken met Git en geautomatiseerde pipelines.
              </p>
              <p>
                Daarnaast bouw en onderhoud ik webapplicaties en websites voor opdrachtgevers, waaronder een
                webapplicatie voor Waag Futurelab. Mijn designachtergrond helpt me om vanuit de gebruiker te denken: vragen en feedback
                vertalen naar oplossingen die werken, toegankelijk zijn en op elk scherm kloppen.
              </p>
            </Reveal>
          </div>

          <Reveal className="facts">
            <div className="fact"><b>2+ jaar</b><span>Ervaring in frontend development</span></div>
            <div className="fact"><b>Scrum</b><span>Sprints, refinements en reviews in een multidisciplinair team</span></div>
            <div className="fact"><b>HvA · CMD</b><span>Bachelor, afgestudeerd in 2026</span></div>
          </Reveal>
        </div>
      </section>


      <section className="section section--flush" aria-labelledby="recent">
        <div className="wrap">
          <div className="section__head">
            <div>
              <Eyebrow>Uitgelicht</Eyebrow>
              <h2 id="recent">Recent <span className="outline">werk</span></h2>
            </div>
            <Button to="/portfolio" ghost arrow="→">Alle projecten</Button>
          </div>
          <div className="grid">
            {featured.map((p, i) => (
              <ProjectCard key={p.id} project={p} size={i === 0 ? "wide" : "half"} />
            ))}
          </div>
        </div>
      </section>

      <CallToAction title={<>Samen iets <span className="outline">bouwen?</span></>} />
      <div style={{ height: "clamp(72px,10vw,140px)" }} />
    </>
  );
}
