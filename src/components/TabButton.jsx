export function TabButton({ children, isSelected, ...props }) {
  // Here children is a special props, the value refers to the items between the tags
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
