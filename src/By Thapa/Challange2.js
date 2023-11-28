import React from "react";
const Challange2 = () => {
  let name = "Nandani Yadav";
  let curdate = new Date().toLocaleDateString();
  let curtime = new Date().toLocaleTimeString();
  return (
    <div>
      <h1>My Name is {name}</h1>
      <h3>Today date is : {curdate}</h3>
      <h3>current Time is {curtime}</h3>
    </div>
  );
};
export default Challange2;
