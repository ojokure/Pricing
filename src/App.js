import React from "react";
import "./App.css";
import Pricing from "./Pricing";

function App() {
  const mockUpPlan = {
    bronze: "$20",
    silver: "$50",
    gold: "$70",
  };

  return (
    <div>
      <Pricing prices={mockUpPlan} />
    </div>
  );
}

export default App;
