
// import React from "react";
// const Challange2 = () => {
//   let name = "Nandani Yadav";
//   let curdate = new Date().toLocaleDateString();
//   let curtime = new Date().toLocaleTimeString();
//   return (
//     <div>
//       <h1 contentEditable>My Name is {name}</h1>
//       <h3>Today date is : {curdate}</h3>
//       <h3>current Time is {curtime}</h3>
//     </div>
//   );
// };
// export default Challange2;


// ////////////////////////////////////////////////

import React from "react";
const Challange2=()=>{
  let img1 = "https://picsum.photos/200/300"
  let img2 = "https://picsum.photos/250/300"
  let img3 = "https://picsum.photos/300/300"
return(
  <div>
    <h1 className="head"> My name is Nandani Yadav</h1>
    <div>
      <img src={img1} alt="Randam Images"></img>
      <img src={img2} alt="Randam Images"></img>
      <img src={img3} alt="Randam Images"></img>
    </div>
  </div>
)
}
export default Challange2;