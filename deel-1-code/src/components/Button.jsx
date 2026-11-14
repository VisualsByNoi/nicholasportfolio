import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const base = css`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 24px;
  border-radius: 999px;
  border: 1px solid var(--accent);
  background: var(--accent);
  color: var(--accent-ink);
  font: 700 14px/1 var(--font-sans);
  font-stretch: 110%;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.25s var(--ease), background 0.25s, color 0.25s, border-color 0.25s;

  &:hover {
    background: var(--ink);
    border-color: var(--ink);
    color: var(--bg);
    transform: translateY(-2px);
  }

  ${({ $ghost }) =>
    $ghost &&
    css`
      background: transparent;
      color: var(--ink);
      border-color: rgba(255, 255, 255, 0.28);
      &:hover {
        background: transparent;
        color: var(--accent);
        border-color: var(--accent);
      }
    `}
`;

const Arrow = styled.span`
  transition: transform 0.25s var(--ease);
  *:hover > & {
    transform: translateX(3px);
  }
`;

const StyledLink = styled(Link)`${base}`;
const StyledA = styled.a`${base}`;
const StyledButton = styled.button`${base}`;

/** Knop: `to` = interne link, `href` = externe link, anders <button> */
export default function Button({ to, href, ghost, arrow, children, ...rest }) {
  const content = (
    <>
      {children}
      {arrow && <Arrow aria-hidden="true">{arrow}</Arrow>}
    </>
  );
  if (to) return <StyledLink to={to} $ghost={ghost} {...rest}>{content}</StyledLink>;
  if (href) return <StyledA href={href} $ghost={ghost} {...rest}>{content}</StyledA>;
  return <StyledButton $ghost={ghost} {...rest}>{content}</StyledButton>;
}
