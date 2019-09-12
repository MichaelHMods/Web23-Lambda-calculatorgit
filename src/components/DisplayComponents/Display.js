import React, {useState} from "react";




const Display = () => {
  const [display, setDisplay] = useState(0)
  console.log(display)
  return <div className="display">{display} </div>;
};

export default Display;