export function TabButton(props) {
  // Here children is a special props, the value refers to the items between the tags
  return (
    <li>
      <button>{props.children}</button>
    </li>
  );
}
