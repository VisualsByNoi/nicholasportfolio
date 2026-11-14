/* ==========================================================
   PORTFOLIO DATA
   Nieuw project? Kopieer een blok en pas het aan.
   - category: "web" | "app" | "branding" | "grafisch"
   - size: "wide" (volle breedte) | "tall" (2 rijen hoog) | leeg (halve breedte)
   - shot: screenshot → getoond in een browserframe op `cover.bg` (shotPos: uitsnede, standaard "top center")
   - image: cover-afbeelding (voor branding/grafisch)
   - book: bladerbaar boek { pages, path, title, ratio }
   - gallery: afbeeldingen in de case-weergave
   ========================================================== */
import { asset } from "../utils/asset";

export const CATEGORIES = {
  web: "Website",
  app: "Applicatie",
  branding: "Branding",
  grafisch: "Grafisch ontwerp",
};

const bg = (from, mid, to) => `radial-gradient(120% 95% at 50% 0%, ${from} 0%, ${mid} 55%, ${to} 100%)`;

const betti = {
  id: "betti-ortho",
  title: "Betti Ortho",
  subtitle: "Website voor een orthodontiepraktijk in Amsterdam-Zuid",
  category: "web",
  size: "wide",
  role: "Development & ontwerp",
  client: "Betti Ortho",
  stack: ["WordPress", "Elementor", "Responsive"],
  url: "https://bettiortho.com/",
  shot: asset("img/betti-ortho.jpg"),
  cover: { bg: bg("#3a4a3e", "#1a211c", "#121614"), domain: "bettiortho.com" },
  intro:
    "Een complete website voor een orthodontiepraktijk die patiënten van 4 tot 80 jaar behandelt: behandelingen, praktische informatie (spoed, FAQ, tips), kosten, aanmelden en verwijzen, aangevuld met patiëntervaringen. Responsive gebouwd, zodat patiënten op elk apparaat snel vinden wat ze zoeken.",
  gallery: [{ src: asset("img/betti-ortho.jpg"), caption: "Homepage" }],
};

const shanoi = {
  id: "shanoi-jansen",
  title: "Shanoi Jansen",
  subtitle: "Portfoliowebsite voor een grafisch ontwerper en fotograaf",
  category: "web",
  role: "Development & ontwerp",
  client: "Shanoi Jansen",
  stack: ["HTML/CSS/JS", "Vercel", "Responsive"],
  url: "https://shanoi-jansen-portfolio.vercel.app/",
  shot: asset("img/shanoi-jansen.jpg"),
  cover: { bg: bg("#4a3a2d", "#221c17", "#161311"), domain: "shanoi-jansen-portfolio.vercel.app" },
  intro:
    "Een portfoliowebsite voor grafisch ontwerper, fotograaf en videograaf Shanoi Jansen. Een rustige, editorial vormgeving met grote serif-koppen, die het werk overzichtelijk opsplitst in Design en Photo & video. Gedeployed via Vercel.",
  gallery: [{ src: asset("img/shanoi-jansen.jpg"), caption: "Homepage" }],
};

const waag = {
  id: "waag-futurelab",
  title: "Waag Futurelab",
  subtitle: "React-app: ontwerp je eigen verftuin",
  category: "app",
  role: "Frontend development",
  client: "Waag Futurelab",
  stack: ["React", "3D", "Responsive"],
  url: "https://project-information-design-tan.vercel.app/",
  shot: asset("img/waag-futurelab.jpg"),
  cover: { bg: bg("#3d4728", "#1c2015", "#131510"), domain: "project-information-design.vercel.app" },
  intro:
    "Waag Futurelab wilde bewustwording creëren rond duurzaam textiel verven met kleurstof uit planten. Ik bouwde een webapplicatie, volledig in React, waarin gebruikers hun eigen tuinsituatie schetsen: ze stellen de afmetingen in, filteren op zonlicht en gewenste verfkleur, plaatsen planten in een 3D-model en zien direct hoe hun tuin eruitziet en welke verf je uit die planten haalt. Een tuinontwerp is te delen via een link, QR-code of print.",
  gallery: [{ src: asset("img/waag-futurelab.jpg"), caption: "Tuin ontwerpen in 3D, met resultaten per plant en verfkleur" }],
};

const bettiBranding = {
  id: "betti-branding",
  title: "Betti Ortho — huisstijl",
  subtitle: "Visual identity voor een orthodontiepraktijk",
  category: "branding",
  size: "wide",
  role: "Brand identity",
  client: "Betti Ortho",
  stack: ["Logo", "Brand book", "Toepassingen"],
  image: asset("img/betti/cover.jpg"),
  imagePos: "center",
  intro:
    "De visuele identiteit van Betti Ortho: elegant, eerlijk, minimalistisch en vriendelijk. Het brand book beschrijft het logo-systeem, kleurenpalet, textuur, typografie, grafische elementen en fotografie, en laat zien hoe het merk landt op social media, de website, drukwerk, interieur en merchandise.",
  book: { pages: 39, path: asset("img/betti/brandbook/"), title: "Betti Ortho — Visual Identity", ratio: "16 / 9" },
  gallery: [],
};

const poster = {
  id: "groen-voor-iedereen",
  title: "Groen voor iedereen?",
  subtitle: "Infographic: bereikbaarheid van Vondelpark vs. Flevopark",
  category: "grafisch",
  size: "tall",
  role: "Onderzoek & informatieontwerp",
  stack: ["Datavisualisatie", "Infographic"],
  image: asset("img/poster-vondelpark.jpg"),
  intro:
    "Een informatieposter over hoe verschillen in bereikbaarheid de ervaring van stedelijk groen beïnvloeden. De poster vergelijkt ligging, vervoerswijze, leeftijdsverdeling en bezoekfrequentie van het Vondelpark en het Flevopark in kaarten, isometrische grafieken en bubble-matrices.",
  gallery: [{ src: asset("img/poster-vondelpark.jpg"), caption: "Volledige poster", tall: true }],
};

const puurWebsite = {
  id: "puur-website",
  title: "PUUR Facility Partners",
  subtitle: "Website voor een schoonmaak- en facilitair bedrijf",
  category: "web",
  role: "Development & ontwerp",
  client: "PUUR Facility Partners",
  stack: ["WordPress", "Elementor", "Responsive"],
  url: "https://puurfacilitypartners.nl/",
  shot: asset("img/puur-website.jpg"),
  cover: { bg: bg("#1f3a52", "#131d27", "#0f141a"), domain: "puurfacilitypartners.nl" },
  intro:
    "De website van PUUR, gebouwd in lijn met de nieuwe huisstijl. De site presenteert de diensten (totaal facilitair, VvE-schoonmaak, specialistisch, bouw en ongediertebestrijding), innovatie & duurzaamheid, missie en visie, werken bij en een contactformulier.",
  gallery: [{ src: asset("img/puur-website.jpg"), caption: "Homepage" }],
};

const experteeth = {
  id: "experteeth",
  title: "Experteeth®",
  subtitle: "Shopify-webshop voor een tandpastamerk",
  category: "web",
  status: "Binnenkort live",
  role: "Development & ontwerp",
  client: "Experteeth®",
  stack: ["Shopify", "E-commerce", "Responsive"],
  shot: asset("img/experteeth.jpg"),
  shotPos: "left top",
  cover: { bg: bg("#1f4150", "#13222a", "#0f171c"), domain: "experteeth.nl" },
  intro:
    "Een Shopify-webshop voor het tandpastamerk Experteeth®, van ontwerp tot werkende winkel. De webshop staat op het punt om gepubliceerd te worden.",
  gallery: [{ src: asset("img/experteeth.jpg"), caption: "Homepage" }],
};

const puurBranding = {
  id: "puur-branding",
  title: "PUUR — huisstijl",
  subtitle: "Brand book, logo-systeem en bestickering bedrijfswagen",
  category: "branding",
  size: "wide",
  role: "Brand identity",
  client: "PUUR Facility Partners",
  stack: ["Logo", "Brand book", "Car wrap"],
  image: asset("img/puur/p1.jpg"),
  imagePos: "center",
  intro:
    "Een complete visuele identiteit voor PUUR: vriendelijk, duurzaam, professioneel en eerlijk. Het brand book legt het logo-systeem, kleurenpalet, typografie, grafische elementen en fotografie vast, en vertaalt dat naar social media, visitekaartjes en de bestickering van de bedrijfswagen.",
  book: { pages: 24, path: asset("img/puur/brandbook/"), title: "PUUR Brand Book", ratio: "842 / 595" },
  gallery: [{ src: asset("img/puur/auto.jpg"), caption: "Bestickering bedrijfswagen" }],
};

/* Volgorde op de portfoliopagina */
export const PROJECTS = [betti, shanoi, waag, bettiBranding, poster, puurWebsite, experteeth, puurBranding];

/* Uitgelicht op de homepage (eerste = breed) */
export const FEATURED = ["betti-ortho", "shanoi-jansen", "waag-futurelab"];
