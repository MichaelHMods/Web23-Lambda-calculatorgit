import React from "react";


const NumberButton = (props) => {
  console.log(props);
  return (
    <button onClick={() => props.addNumber(props.nums)}>{props.nums}</button>


    
  );
};
export default NumberButton;
