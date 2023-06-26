import React from "react";
import Car from "./Components/Car";

const App = () => {
  return (
    <div>
      <Car model={carInfo.model} />
    </div>
  );
};

export default App;

const carInfo = {
  name: "Ford",
  model: "Mustang",
};
