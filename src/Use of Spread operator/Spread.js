import React, { useState } from "react";

const Spread = () => {
  let bioData = {
    name: "Nandani",
    age: 20,
    Branch: "Information Technology",
  };
  const [myData, setMyData] = useState(bioData);
  const changeData = () => {
    let newVal = myData;
    setMyData({ ...myData, name: "Chhavi", Branch: "Computer Science" });

    // if (newVal === bioData) {
    //   setMyData({ ...myData, age: 67, name: "Chhavi" });
    // } else {
    //   setMyData({bioData});
    // }
  };
  return (
    <div>
      <h1>
        Hii My Name is : {myData.name}
        <br />
        My Age is : {myData.age}
        <br />
        My Branch is : {myData.Branch}
      </h1>
      <button onClick={changeData} style={{ height: 50, width: 150 }}>
        Change Data
      </button>
    </div>
  );
};

export default Spread;
