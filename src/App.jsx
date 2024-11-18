import { useState } from "react";
import Header from "./components/Header";
import UserInputs from "./components/UserInputs";
import Result from "./components/Result";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [investmentResult, setInvestmentResult] = useState([]);

  function handleInputChange(inputs) {
    console.log("App: ");
    console.log(inputs);

    const results = calculateInvestmentResults(inputs);
    setInvestmentResult(results);
  }

  return (
    <>
      <Header />
      <UserInputs handleInputChange={handleInputChange} />
      <Result results={investmentResult} />
    </>
  );
}

export default App;
