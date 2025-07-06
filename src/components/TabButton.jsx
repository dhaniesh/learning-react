export function TabButton(props) {
  function handleClick() {
    console.log("hello world!");
  }

  // Here children is a special props, the value refers to the items between the tags
  return (
    <li>
      <button onClick={handleClick}>{props.children}</button>
    </li>
  );
}
