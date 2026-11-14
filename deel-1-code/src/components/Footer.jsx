import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <span>© {new Date().getFullYear()} Nicholas Faas — Frontend developer, Amsterdam</span>
        <nav aria-label="Footer">
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/cv">CV</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
