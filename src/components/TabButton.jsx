export function TabButton({ children, onSelect, isSelected }) {
  // Here children is a special props, the value refers to the items between the tags
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
