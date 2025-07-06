import reactImage from "./assets/react-core-concepts.png"
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

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
