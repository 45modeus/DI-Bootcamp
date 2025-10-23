import React from "react";
import Car from "./components/Car.js";

function App() {
  const carinfo = {name: "Ford", model: "Mustang"};

  return (
    <div>
      <Car carinfo={carinfo} />
    </div>
  );
}

export default App;
