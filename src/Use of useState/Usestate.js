import React, { useState } from "react";
const LearnHook = () => {
  const [myValue, setMyValue] = useState("use of useState");

  let newval = myValue;
  let changeName = () => {
    if (myValue === "use of useState") {
      setMyValue("Learn Hook");
    } else {
      setMyValue("use of useState");
    }
  };

  return (
    <div>
      <h1>{myValue}</h1>
      <button onClick={changeName}>Change Value</button>
    </div>
  );
};

export default LearnHook;

