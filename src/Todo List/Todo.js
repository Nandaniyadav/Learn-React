/////* learn useState */
// import React, { useState } from 'react'
// const Todo = () => {
//     const [addinput, setAddInput] = useState(["Hello"])
//     let data = [{
//         name: "Nandani",
//         age: 65,
//     },
//     {
//         name: "Surya",
//         age: 24,
//     }]
//     function addEvent() {
//         setAddInput(data)
//     }
//     console.log(addinput)
//     return (
//         <div>
//             <button onClick={addEvent}>ADD</button>
//             {addinput.map((value) => {
//                 return (
//                     <h1>{value.name}</h1>
//                 )
//             })}
//         </div>
//     )
// }
// export default Todo

///////////////////////////////

// import React, { useState } from 'react'

// const Todo = () => {
//     const [addactivity, setAddActivity] = useState("");
//     const [listData, setlistData] = useState([]);

//     function addEvent() {
//         // setlistData(...listData, addactivity)
//         // console.log(listData)
//         setlistData((listData) => {
//             const updatedList = [...listData, addactivity]
//             console.log(updatedList)
//             setAddActivity("")
//             return updatedList
//         })
//     }
//     function removeEvent(index) {
//         const updatedData = listData.filter((elem, id) => {
//             return index != id;
//         })
//         setlistData(updatedData)
//     }

//     function editEvent() {

//     }
//     return (
//         <div className='App'>
//             <h2>My Todo List</h2>
//             <input type="text" placeholder='Enter your   List' value={addactivity} onChange={(e) => {
//                 setAddActivity(e.target.value)
//             }} />
//             <button onClick={addEvent}>ADD</button>
//             <div>
//                 {listData.map((value, index) => {
//                     return (
//                         <div>
//                             <li key={index}>{value}</li>
//                             <button onClick={() => removeEvent(index)}>DELETE</button>
//                             <button onClick={editEvent}>EDIT</button>
//                         </div>
//                     )
//                 })}
//             </div>
//         </div>
//     )
// }

// export default Todo
//////////////////////////////

import React, { useState } from "react";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [addinput, setAddInput] = useState([]);

  //   function holdTask(e) {
  //     let x = e.target.value;
  //     console.log(e.target.value)
  //   }

  let addTask = () => {
    let newData = setAddInput((addinput) => {
      const updateList = setAddInput([...inputData, addinput]);
      console.log([updateList]);
    });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your task"
        onChange={(e) => {
          setInputData([e.target.value]);
          console.log(e.target.value);
        }}
      ></input>
      <br />

      <button onClick={addTask}>ADD Task</button>
      <button>EDIT Task</button>
    </div>
  );
};

export default Todo;
