import React from "react";
import wrapper from "./style";

const SpecialButton = (props) => {
  console.log(props.banana)
  
 
  return (
    <wrapper>
     <button className="specialButtons">{props.banana}</button>
     </wrapper>
  );
};

export default SpecialButton;
