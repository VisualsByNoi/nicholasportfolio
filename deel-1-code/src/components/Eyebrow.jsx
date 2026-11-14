import styled from "styled-components";

/* Klein label boven koppen, in de stijl van een code-opmerking */
const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);

  &::before {
    content: "//";
    color: var(--muted);
    letter-spacing: 0;
  }
`;

export default Eyebrow;
