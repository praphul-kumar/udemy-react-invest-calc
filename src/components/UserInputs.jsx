import { useEffect, useState } from "react";
import Input from "./Input";

export default function UserInputs({ userInput, onChange }) {
  
  return (
    <div id="user-input">
      <div className="input-group">
        <Input
          label="Initial Investment"
          identifier="initialInvestment"
          value={userInput.initialInvestment}
          handleChange={onChange}
        />
        <Input
          label="Annual Investment"
          identifier="annualInvestment"
          value={userInput.annualInvestment}
          handleChange={onChange}
        />
      </div>
      <div className="input-group">
        <Input
          label="Expected Return"
          identifier="expectedReturn"
          value={userInput.expectedReturn}
          handleChange={onChange}
        />
        <Input
          label="Duration"
          identifier="duration"
          value={userInput.duration}
          handleChange={onChange}
        />
      </div>
    </div>
  );
}
