import React, { useEffect, useState } from "react";

const Efect = () => {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    console.log("Component run")
  },[])
  function addData() {
    setCount(count + 1);
  }
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={addData}>Add</button>
    </div>
  );
};

export default Efect;
