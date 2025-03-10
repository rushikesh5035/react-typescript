import React from "react";
import "./Counter.css";

const Counter: React.FC = (props) => {
  return (
    <div className="counterContainer">
      <h1>0</h1>
      <button>INC</button>
      <button>DEC</button>
    </div>
  );
};

export default Counter;
