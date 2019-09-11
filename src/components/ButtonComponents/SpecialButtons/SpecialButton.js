import React from "react";

const SpecialButton = (props) => {
  console.log(props.banana)
  

  return (
    <>
     <button>{props.index}</button>
    </>
  );
};

export default SpecialButton;
