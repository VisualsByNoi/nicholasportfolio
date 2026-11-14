import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import Button from "./Button";

export default function CallToAction({ eyebrow = "Contact", title, button = "Neem contact op" }) {
  return (
    <section className="section section--flush">
      <div className="wrap">
        <Reveal className="cta">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2>{title}</h2>
          <div><Button to="/contact" arrow="→">{button}</Button></div>
        </Reveal>
      </div>
    </section>
  );
}
