import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

/* Scroll naar boven bij een nieuwe pagina, niet bij het openen van een case */
function useScrollTop() {
  const { pathname } = useLocation();
  const section = pathname.split("/")[1];
  const prev = useRef(section);
  useEffect(() => {
    if (prev.current !== section) window.scrollTo(0, 0);
    prev.current = section;
  }, [section]);
}

export default function Layout() {
  useScrollTop();
  return (
    <>
      <a className="skip-link" href="#main">Naar de inhoud</a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
