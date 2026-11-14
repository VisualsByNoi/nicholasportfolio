import Button from "../components/Button";
import Chips from "../components/Chips";
import Eyebrow from "../components/Eyebrow";
import { COMPETENCIES, EDUCATION, EXPERIENCE, PROFILE } from "../data/cv";
import { asset } from "../utils/asset";
import useTitle from "../hooks/useTitle";

export default function CV() {
  useTitle("CV");
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <Eyebrow>Curriculum vitae</Eyebrow>
          <h1>Nicholas <span className="outline">Faas</span></h1>
          <p className="lead">Frontend developer · Amsterdam</p>
          <div className="no-print">
            <Button ghost arrow="↓" onClick={() => window.print()}>Download als PDF</Button>
          </div>
        </div>
      </section>

      <section className="section section--flush">
        <div className="wrap cv">
          <aside className="cv__side">
            <img src={asset("img/nicholas.jpg")} alt="Nicholas Faas" />
            <dl>
              <dt>Rol</dt><dd>Frontend developer</dd>
              <dt>Woonplaats</dt><dd>Amsterdam, Nederland</dd>
              <dt>E-mail</dt><dd><a href="mailto:nicholasfaas@outlook.com">nicholasfaas@outlook.com</a></dd>
              <dt>Talen</dt><dd>Nederlands (moedertaal)<br />Engels (goed)</dd>
            </dl>
          </aside>

          <div>
            <div className="cv__block">
              <h2>Profiel</h2>
              <p className="lead" style={{ maxWidth: "none" }}>{PROFILE}</p>
            </div>

            <div className="cv__block">
              <h2>Werkervaring</h2>
              <ol className="timeline">
                {EXPERIENCE.map((job) => (
                  <li key={job.period + job.title}>
                    <time>{job.period}</time>
                    <div>
                      <h3>{job.title} <span>· {job.org}</span></h3>
                      <ul className="bullets">
                        {job.bullets.map((b) => <li key={b}>{b}</li>)}
                      </ul>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="cv__block">
              <h2>Opleiding</h2>
              <ol className="timeline">
                <li>
                  <time>{EDUCATION.period}</time>
                  <div>
                    <h3>{EDUCATION.title} <span>· {EDUCATION.org}</span></h3>
                    <p>{EDUCATION.text}</p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="cv__block">
              <h2>Competenties</h2>
              <ol className="timeline">
                {COMPETENCIES.map((c) => (
                  <li key={c.label}>
                    <span className="label">{c.label}</span>
                    <div><Chips items={c.items} label={c.label} /></div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
