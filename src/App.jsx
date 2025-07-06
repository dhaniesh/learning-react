import reactImage from "./assets/react-core-concepts.png"
import componentsImage from "./assets/components.png"
import { CORE_CONCEPTS } from "./data.js"

const reactDescriptions = ["Fundamentals", "Crutial", "Core"]

/**
 * Function to return a random number between 0 and input
*/
function getRandDesc(max) {
  return Math.floor(Math.random() * max)
}

function Header() {
  const description = reactDescriptions[getRandDesc(reactDescriptions.length)];
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

function CoreConcepts(props) {
  return (
    <li>
      <img src={props.image} alt="Image" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

// Props with object destructuring
// function CoreConcepts({image, title, description}) {
//   return (
//     <li>
//       <img src={image} alt="Image" />
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </li>
//   )
// }

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            <CoreConcepts
              title="Components"
              description="The core UI building block"
              image={componentsImage}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>

        </section>
      </main>
    </div>
  );
}

export default App;
