import styled from "styled-components";

/* Browservenster met een screenshot. Schuift van onder het vak in
   zodra de kaart in beeld komt, en een klein stukje omhoog bij hover. */
export const Frame = styled.div`
  position: absolute;
  left: ${({ $wide }) => ($wide ? "25%" : "9%")};
  right: ${({ $wide }) => ($wide ? "25%" : "9%")};
  bottom: -24px;
  display: flex;
  flex-direction: column;
  border-radius: 12px 12px 0 0;
  overflow: hidden;
  background: #0f1211;
  box-shadow: 0 40px 80px -24px rgba(0, 0, 0, 0.7);
  transform: translateY(${({ $in }) => ($in ? "0" : "105%")});
  transition: transform 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s;

  @media (max-width: 900px) {
    left: 9%;
    right: 9%;
  }
  @media (prefers-reduced-motion: reduce) {
    transform: none;
    transition: none;
  }
`;

const Bar = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 12px;
  background: #1b1f1d;

  i {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #3b423f;
  }
  i:first-child {
    background: var(--accent);
  }
  em {
    flex: 1;
    margin-left: 10px;
    padding: 4px 10px;
    border-radius: 6px;
    background: #0d100f;
    color: var(--muted);
    font: normal 11px var(--font-mono);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Shot = styled.div`
  aspect-ratio: 3 / 2;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: ${({ $pos }) => $pos || "top center"};
  }
`;

export default function BrowserFrame({ src, alt, domain, wide, inView, position }) {
  return (
    <Frame $wide={wide} $in={inView} className="frame">
      <Bar aria-hidden="true">
        <i />
        <i />
        <i />
        <em>{domain}</em>
      </Bar>
      <Shot $pos={position}>
        <img src={src} alt={alt} loading="lazy" />
      </Shot>
    </Frame>
  );
}
