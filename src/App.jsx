import { useState } from "react";
import Header from "./components/Header";
import UserInputs from "./components/UserInputs";
import Result from "./components/Result";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  function handleChange(identifier, newValue) {
    setUserInput(prevInput => {
      return {
        ...prevInput,
        [identifier] : +newValue
      }
    });
  }

  return (
    <>
      <Header />
      <UserInputs userInput={userInput} onChange={handleChange} />
      <Result input={userInput} />
    </>
  );
}

export default App;
