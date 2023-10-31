import React, { useState } from "react";
const LearnHook = () => {
  const [myValue, setMyValue] = useState("use of useState in React js");

  let newval = myValue;
  let changeName = () => {
    if (myValue === "use of useState in React js") {
      setMyValue("Learn Hook in React js");
    } else {
      setMyValue("use of useState in React js");
    }
  };

  return (
    <div>
      <h1>{myValue}</h1>
      <button
        onClick={changeName}
        style={{ height: 50, width: 150, fontSize: 20 }}
      >
        Change Value
      </button>
    </div>
  );
};

export default LearnHook;
