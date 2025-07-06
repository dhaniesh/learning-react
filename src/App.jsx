import componentsImage from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";
import { CoreConcepts } from "./components/CoreConcepts.jsx";
import { Header } from "./components/Header/Header.jsx";
import { TabButton } from "./components/TabButton.jsx";

function handleClick() {
  console.log("Click triggered from function written in App.jsx");
}

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

        <section id="examples">
          <menu>
            <TabButton onSelect={handleClick}>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
