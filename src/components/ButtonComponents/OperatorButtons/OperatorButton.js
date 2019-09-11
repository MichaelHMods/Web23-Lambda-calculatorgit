import React from "react";
import Operators from "./Operators";

const OperatorButton = (props) => {
  return(
    <>
      <button>{props.symbol.char}</button>
    </>
  );
};
export default OperatorButton;
