export function TabButton({children, onSelect}) {
  // Here children is a special props, the value refers to the items between the tags
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
