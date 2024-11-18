import Input from "./Input";

export default function UserInputs() {
  return (
      <div id="user-input">
        <div className="input-group">
            <Input label="Initial Investment" type="number"/>
            <Input label="Annual Investment" type="number"/>
        </div>
        <div className="input-group">
            <Input label="Expected Return" type="number"/>
            <Input label="Duration" type="number"/>
        </div>
      </div>
  );
}
