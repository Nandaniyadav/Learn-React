import React from "react";
const Challange3 = () => {
  let curTime = new Date();
  curTime = curTime.getHours();
  let time = new Date().toLocaleString();
//   let curTime = 1; //// for checking time
  let greeting = "";
  let cssStyle = {};

  if (curTime >= 1 && curTime < 12) {
    greeting = "Good Morning";
    cssStyle.color = "green";
  } else if (curTime >= 12 && curTime <= 17) {
    greeting = "Good Afternoon";
    cssStyle.color = "red";
  } else {
    greeting = " Good Night";
    cssStyle.color = "black";
  }
  return (
    <div>
      <h3>Current Time {time}</h3>
      <h1 className="head2">
        Hello Sir! <span style={cssStyle}>{greeting}</span> 🙏
      </h1>
    </div>
  );
};
export default Challange3;
