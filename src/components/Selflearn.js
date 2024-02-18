// import React, { useState } from "react";
// const Selflearn = () => {
//   // let [count, setCount] = useState(0);
//   // const inc = () => {
//   //   setCount(count + 1);
//   // };
//   // const dec = () => {
//   //   setCount(count - 1);
//   // };
//   // return (
//   //   <div>
//   //     <button onClick={inc}>Increment</button>
//   //     <h2>{count}</h2>
//   //     <button onClick={dec}>decrement</button>
//   //   </div>
//   // );
// };

// export default Selflearn;
//   /////////////////////// rendering element

// import React from 'react'
// import  ReactDOM  from 'react-dom'
// const Selflearn = () => {

//   ReactDOM.render(
//     [<h1>Nandani</h1>,
//     <p>kal interview ckack kregi aur job k lie offer letter aayega</p>],
//     document.getElementById("root")
//   )
// }

// export default Selflearn

//////////////////////////////////////////  props

import React, { useState } from "react";
const Selflearn = (props) => {
  const [state, setState] = useState(0);

  const dec = () => {
    setState(state - 1);
  };
  const inc = () => {
    setState(state + 1);
  };
  return (
    <>
      <h1>{props.profile}</h1>
      <h1>{props.name}</h1>
      <h3>{state}</h3>
      <button onClick={dec}>Decrement</button>
      <button onClick={inc}>Increment</button>
    </>
  );
};
export default Selflearn;
