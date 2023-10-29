// import React from 'react';

// function LearnHook = () =>{
//     return(
//         <div>
// <h1>UseState</h1>
//         </div>
//     )
// }
// export default LearnHook;

import React, { useState } from "react";

const LearnHook = () => {
  const [myValue, setMyValue] = useState("use of useState");

  let changeName = () => {
    setMyValue("Learn Hook");
  };

  return (
    <div>
      <h1>{myValue}</h1>
      <button onClick={changeName}>Change Value</button>
    </div>
  );
};

export default LearnHook;
