import React from "react";
const Add = () => {
  //For Addition
  function sum(a, b) {
    let sum = a + b;
    return sum;
  }

  //For Subtraction
  function sub(a, b) {
    let sub = a - b;
    return sub;
  }

  //For Multification
  function mul(a, b) {
    let multi = a * b;
    return multi;
  }

  //For Division
  function div(a, b) {
    let divide = a / b;
    return divide;
  }

  //For Modulas
  function mod(a, b) {
    let mod = a % b;
    return mod;
  }

  return (
    <div>
      <h1>Add of two number : {sum(2, 4)}</h1>
      <h1>Subtraction first number to second number : {sub(2, 4)}</h1>
      <h1>Multiple of two number : {mul(2, 4)}</h1>
      <h1>Division two number : {div(5,2)}</h1>
      <h1>Modulas two number : {mod(2, 4)}</h1>
    </div>
  );
};
export default Add;
