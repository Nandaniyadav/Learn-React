import React, { useState } from "react";

const Todo = () => {
  const bioData = [
    {
      id: 0,
      Name: "Ram",
      age: 20,
    },
    {
      id: 1,
      Name: "Shyam",
      age: 23,
    },
    {
      id: 2,
      Name: "Mohan",
      age: 30,
    },
  ];
  //   console.log(bioData)

  /*-----use of useState for contain allData ----*/
  const [myalldata, setMyallData] = useState(bioData);

  function removeData() {
    setMyallData([]);
  }
  return (
    <div>
      {myalldata.map((curElm) => {
        return (
          <h1 key={curElm.id}>
            <ol>
              <li>Id is {curElm.id} </li>
              <li>Name is: {curElm.Name} </li>
              <li>Age is :{curElm.age}</li>
            </ol>
          </h1>
        );
      })}
      <button style={{ height: 50, width: 150 }} onClick={removeData}>
        CLEAR
      </button>
    </div>
  );
};

export default Todo;
