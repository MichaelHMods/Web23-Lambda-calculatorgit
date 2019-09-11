import React, { useState } from "react";
import { operators } from '../../../../src/data';
import OperatorButton from './OperatorButton';

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  const [operator, setOperator] = useState(operators)
  console.log('this is operators', operators)
  // STEP 2 - add the imported data to state
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       operators.map((symbol, index) => {
         return(<OperatorButton  symbol={symbol} index={index}/>)
      })
       
       }
       
    </div>

  );
};

export default Operators;
