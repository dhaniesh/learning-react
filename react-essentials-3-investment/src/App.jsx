import Header from "./components/Header.jsx";
import { useState } from "react";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputValid = userInput.duration > 0

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue, // convert to number
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange} />
      {!inputValid && <p className="center">Please enter a duration greater than zero</p>}
      {inputValid && <Results input={userInput} />}
    </>
  );
}

export default App;
