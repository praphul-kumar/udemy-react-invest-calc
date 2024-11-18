import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />

      {!inputIsValid && <p className="center">Please enter a duration greater than 0 </p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
