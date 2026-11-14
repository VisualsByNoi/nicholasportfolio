import { useState } from "react";
import Button from "../components/Button";
import Eyebrow from "../components/Eyebrow";
import useTitle from "../hooks/useTitle";

const EMAIL = "nicholasfaas@outlook.com";

export default function Contact() {
  useTitle("Contact");
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const subject = `${d.get("type")} — ${d.get("name")}`;
    const body = `${d.get("message")}\n\n${d.get("name")}${d.get("company") ? " · " + d.get("company") : ""}\n${d.get("email")}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <section className="page-head page-head--center">
        <div className="wrap">
          <Eyebrow>Contact</Eyebrow>
          <h1>Zeg <span className="outline">hallo</span>.</h1>
          <p className="lead">
            Vragen over mijn werk, een vacature of een project? Stuur een bericht, dan reageer ik zo snel mogelijk.
          </p>
        </div>
      </section>

      <section className="section section--flush">
        <div className="wrap contact">
          <form className="form" onSubmit={onSubmit}>
            <div className="row2">
              <label>Naam<input name="name" required autoComplete="name" /></label>
              <label>Organisatie<input name="company" autoComplete="organization" placeholder="Optioneel" /></label>
            </div>
            <label>E-mail<input name="email" type="email" required autoComplete="email" /></label>
            <label>
              Waar gaat het over?
              <select name="type" defaultValue="Vacature">
                <option>Vacature</option>
                <option>Project</option>
                <option>Iets anders</option>
              </select>
            </label>
            <label>Bericht<textarea name="message" required /></label>
            <div><Button type="submit" arrow="→">Verstuur bericht</Button></div>
            {sent && (
              <p className="form__note" role="status">
                Je mailprogramma wordt geopend met je bericht klaar om te versturen.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
