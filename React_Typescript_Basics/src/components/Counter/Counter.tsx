import React, { useState } from "react";
import "./Counter.css";

const Counter: React.FC = () => {
  const [CountVal, setCountVal] = useState<number>(0);

  // const handleIncrement = () => {
  //   setCountVal(CountVal + 1);
  // };

  // const handleDecrement = () => {
  //   setCountVal(CountVal - 1);
  // };

  return (
    <div className="counterContainer">
      <h1>{CountVal}</h1>
      <button
        onClick={() => setCountVal(CountVal + 1)}
        style={{ backgroundColor: "lightgreen" }}
      >
        INC
      </button>
      <button
        onClick={() => setCountVal(CountVal - 1)}
        style={{ backgroundColor: "tomato" }}
      >
        DEC
      </button>
    </div>
  );
};

export default Counter;
