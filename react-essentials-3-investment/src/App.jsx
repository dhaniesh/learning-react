import Header from "./components/Header.jsx";
import { useState } from "react";
import UserInput from "./components/UserInput.jsx";

function App() {
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue, // convert to number
      };
    });
  }

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange} />
    </>
  );
}

export default App;
