import { useEffect, useState } from "react";
import Input from "./Input";

export default function UserInputs({ handleInputChange }) {
  const [initialInvestment, setInitialInvesment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const inputs = {
      initialInvestment: parseInt(initialInvestment),
      annualInvestment: parseInt(annualInvestment),
      expectedReturn: parseInt(expectedReturn),
      duration: parseInt(duration),
    };

    console.log('Inputs: ');
    console.log(inputs);

    handleInputChange(inputs);
  }, [initialInvestment, annualInvestment, expectedReturn, duration]);

  return (
    <div id="user-input">
      <div className="input-group">
        <Input
          label="Initial Investment"
          type="number"
          handleChange={setInitialInvesment}
        />
        <Input
          label="Annual Investment"
          type="number"
          handleChange={setAnnualInvestment}
        />
      </div>
      <div className="input-group">
        <Input
          label="Expected Return"
          type="number"
          handleChange={setExpectedReturn}
        />
        <Input label="Duration" type="number" handleChange={setDuration} />
      </div>
    </div>
  );
}
