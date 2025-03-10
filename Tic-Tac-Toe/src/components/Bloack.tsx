import React from "react";

interface BlockProps {
  value: string;
  onClick?: () => void;
}

const Bloack: React.FC<BlockProps> = (props) => {
  return (
    <div className="block" onClick={props.onClick}>
      {props.value}
    </div>
  );
};

export default Bloack;
