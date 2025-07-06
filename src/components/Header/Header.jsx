import reactImage from "../../assets/react-core-concepts.png";
import "./Header.css"
const reactDescriptions = ["Fundamentals", "Crutial", "Core"];

function getRand(max) {
  return Math.floor(Math.random() * max);
}

export function Header() {
  const description = reactDescriptions[getRand(reactDescriptions.length)];
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
