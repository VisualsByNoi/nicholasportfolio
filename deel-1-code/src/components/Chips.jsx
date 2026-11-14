import styled from "styled-components";

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Chip = styled.li`
  font: 12.5px/1.4 var(--font-mono);
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  color: var(--ink-2);
`;

export default function Chips({ items, label }) {
  return (
    <List aria-label={label}>
      {items.map((item) => (
        <Chip key={item}>{item}</Chip>
      ))}
    </List>
  );
}
