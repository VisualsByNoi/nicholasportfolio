# Nicholas Faas — portfolio (React)

Portfoliowebsite gebouwd met **React**, **React Router**, **styled-components** en **Vite**.

## Lokaal draaien
```bash
npm install
npm run dev        # ontwikkelserver op http://localhost:5173
npm run build      # productiebuild in dist/
```

## Structuur
```
src/
  components/   herbruikbare componenten (styled-components): Button, Chips, ProjectCard,
                BrowserFrame, CaseModal, Book, Header, Footer, …
  pages/        Home, Portfolio (met case-route /portfolio/:id), CV, Contact
  data/         projects.js (portfolio) en cv.js (CV-teksten, competenties, skills)
  styles/       global.css (basis, layout en pagina-stijlen)
public/img/     afbeeldingen en brand books
```

## Project toevoegen
Voeg een object toe in `src/data/projects.js` en zet het in de `PROJECTS`-lijst.
Op de homepage bepaalt `FEATURED` welke projecten uitgelicht worden.

## Toegankelijkheid
Skip-link, zichtbare focusstijlen, `aria`-labels op navigatie, filters en dialoog,
toetsenbordbediening (Esc sluit een case, pijltjes bladeren door een brand book)
en `prefers-reduced-motion` wordt gerespecteerd.

## Live zetten op Vercel
1. Push deze map naar een GitHub-repo.
2. Vercel → Add New → Project → kies de repo. Vercel herkent Vite automatisch
   (build: `npm run build`, output: `dist`).
3. `vercel.json` stuurt alle routes naar `index.html`, zodat `/portfolio`, `/cv`
   en `/contact` direct werken.
