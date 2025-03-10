import React, { useState, useEffect } from "react";
import "./Counter.css";

const Counter: React.FC = () => {
  const [CountVal, setCountVal] = useState<number>(0);

  useEffect(() => {
    console.log("Counter mouted");
    return function () {
      console.log("unmount counter");
    };
  }, []);

  // Empty dependency array means => whole component
  // If dependency has some values

  useEffect(() => {
    console.log("user updated", CountVal);

    return function () {
      console.log("counter useEffect return", CountVal);
    };
  }, [CountVal]);

  const handleIncrement = () => {
    setCountVal(CountVal + 1);
  };

  const handleDecrement = () => {
    setCountVal(CountVal - 1);
  };

  return (
    <div className="counterContainer">
      <h1>{CountVal}</h1>
      <button
        onClick={handleIncrement}
        style={{ backgroundColor: "lightgreen" }}
      >
        INC
      </button>
      <button onClick={handleDecrement} style={{ backgroundColor: "tomato" }}>
        DEC
      </button>
    </div>
  );
};

export default Counter;
