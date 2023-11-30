import React, { useState } from "react";
const Challange4 = () => {
  let Time = new Date().toLocaleTimeString();

  const [curTime, setcurTime] = useState(Time);

  const getTime = () => {
    Time = new Date().toLocaleTimeString();
    setcurTime(Time)
  };

  let btnStyle = {
    color: "red",
    fontSize: "20px",
    borderRadius: "10px",
  };
  return (
    <>
      <h2>Get the Current Time</h2>
      <h1>{curTime}</h1>
      <button style={{ btnStyle }} onClick={getTime}>
        Click for Current Time
      </button>
    </>
  );
};
export default Challange4;
