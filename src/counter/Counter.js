import React, { useState } from "react";
import Button from "../ReUseableComponents/Button";

const Counter = () => {
  const [data, setData] = useState(1);
  const Inc = () => {
    setData(data + 1);
  };
  const Dec = () => {
    setData(data - 1);
  };
  return (
    <div>
      <h2>{data}</h2>
      <Button onClick={Inc}>Increment</Button>
      <Button onClick={Dec}>Decrement</Button>
    </div>
  );
};

export default Counter;

