import React, { useState } from "react";

function Calculator() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");

  const handleNumber1Change = (event) => {
    setNumber1(event.target.value);
  };

  const handleNumber2Change = (event) => {
    setNumber2(event.target.value);
  };

  const handleAddition = () => {
    const sum = Number(number1) + Number(number2);
    setResult(sum);
  };

  return (
    <div>
      <input type="number" value={number1} onChange={handleNumber1Change} />
      <input type="number" value={number2} onChange={handleNumber2Change} />
      <button onClick={handleAddition}>Add Them</button>
      {result && <p>Result: {result}</p>}
    </div>
  );
}

export default Calculator;
