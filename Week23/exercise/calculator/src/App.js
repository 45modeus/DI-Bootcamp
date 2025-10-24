import React, { useState } from "react";
import "./App.css"

function App() {

  //states variables
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("add")
  const [result, setResult] = useState(null);

  // add numbers
  // const Add = () => {
  //   const sum = Number(num1) + Number(num2);
  //   setResult(sum);
  // };


  //calculate

  const calculate = () => {
    const n1 = Number(num1);
    const n2 = Number(num2);
    let res = 0;

    switch (operation) {
      case "add":
        res = n1 + n2;
        break;
      case "substract":
        res = n1 - n2;
        break;
      case "multiply":
        res = n1 * n2;
        break;
      case "divide":
        res = n2 !== 0 ? n1 / n2: "Cannot devide by zero";
        break;
      
      default:
        res = "Invalid operation"
    }

    setResult(res);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h1>Calculator</h1>

      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
        style={{ marginRight: "10px" }}
      />

      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />

      <div style={{ marginTop: "20px" }}>
        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
          style={{ marginRight: "10px" }}
        >
          <option value="add">Addition (+)</option>
          <option value="subtract">Subtraction (−)</option>
          <option value="multiply">Multiplication (×)</option>
          <option value="divide">Division (÷)</option>
        </select>

        <button onClick={calculate}>Calculate</button>
      </div>

      {result !== null && (
        <h2 style={{ marginTop: "20px" }}>Result: {result}</h2>
      )}
    </div>
  );
}

export default App;
