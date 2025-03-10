import React from "react";
import { useAppSelector } from "./redux/hooks/hooks";

const MyComp: React.FC = () => {
  const count = useAppSelector((state) => state.counter);
  return (
    <div>
      <h3>{count}</h3>
    </div>
  );
};

export default MyComp;
