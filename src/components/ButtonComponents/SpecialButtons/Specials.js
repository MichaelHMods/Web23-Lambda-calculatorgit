import React, { useState } from "react";
import { specials } from '../../../../src/data';
import SpecialButton from './SpecialButton'

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  const [specs, setSpecs] = useState(specials);
  console.log("this is special-special", specials);
  
  // STEP 2 - add the imported data to state

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       specials.map((key, index) =>{ 
        console.log(key)
        console.log(index)
          return(
            <SpecialButton banana={key} index={index}/>
            )
       })
      }
    </div>
  );
};

export default Specials;
