// import React from "react";
// import { useState } from "react";
// const TodoList = () => {
//   const [inpuData, setInputdata] = useState("");
//   const [dataList, setDataList] = useState([]);

//   function addActivity() {
//     // setDataList([...dataList,inpuData]);
//     // console.log(dataList);
//     setDataList((dataList) => {
//       const updatedList = [...dataList, inpuData];
//       console.log(updatedList);
//       setInputdata("");
//       return updatedList;
//     });
//   }
//   function removeActivity(id) {
//     alert(`Delete ${id}`);
//     const newArr = dataList.filter((val, indx) => {
//       return indx !== id;
//     });
//     setDataList(newArr);
//   }
//   return (
//     <>
//       <h2>My Todo</h2>
//       <div>
//         <input
//           type="text"
//           value={inpuData}
//           placeholder="Create Activity"
//           onChange={(e) => setInputdata(e.target.value)}
//         />
//         <button onClick={addActivity}>Add Data</button>
//       </div>
//       <div>
//         <ol>
//           {dataList.map((val, indx) => {
//             return (
//               <>
//                 <li key={indx}>
//                   {val}
//                   <button  onClick={() => removeActivity(indx)}>
//                     Remove data
//                   </button>
//                 </li>
//               </>
//             );
//           })}
//         </ol>
//       </div>
//     </>
//   );
// };
// export default TodoList;

////////////////////

// import React, { useState } from "react";

// const TodoList = () => {
//   const [activity, setActivity] = useState("");
//   const [listData, setListDta] = useState([]);

//   function addData() {
//     // setListDta([...listData,activity]);
//     // setActivity('')
//     // console.log(listData);

//     setListDta((listData) => {
//       const updatedList = [...listData, activity];
//       console.log(updatedList);
//       setActivity("");
//       return updatedList;
//     });
//   }
//   function removeData(i) {
//     const newArr = listData.filter((element, id) => {
//       return i != id;
//     });
//     setListDta(newArr);
//   }
//   return (
//     <>
//       <div>
//         <h2>My TodoList</h2>
//         <input
//           type="text"
//           placeholder="create Activity"
//           value={activity}
//           onChange={(e) => {
//             setActivity(e.target.value);
//           }}
//         />
//         <button onClick={addData}>Add data</button>
//         <h3>Here is your List</h3>
//         {listData.map((data, i) => {
//           return (
//             <>
//               <ol key={i}>
//                 <li>
//                   {data}
//                   <button onClick={() => removeData(i)}>Remove data</button>
//                 </li>
//               </ol>
//             </>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default TodoList;

// /////////////////////////////////

// import { useState } from "react";
// const TodoList = () => {
//   const [inpuData, setInputdata] = useState("");
//   const [getData, setGetData] = useState([]);

//   // function changeHandle(e) {
//   //   setInputdata(e.target.value);
//   //   console.log(inpuData)
//   // }
//   function addData() {
//     // setGetData([...getData,inpuData])
//     // console.log(getData)
//     setGetData((getData) => {
//       const updatedData = [...getData, inpuData];
//       console.log(updatedData);
//       setInputdata("");
//       return updatedData;
//     });
//   }
//   function removeData(i) {
//     const newArr = getData.filter((element, id) => {
//       return i != id;
//     });
//     setGetData(newArr);
//   }
//   return (
//     <>
//       <h2>My Todo List</h2>
//       <input
//         type="text"
//         placeholder="create Activity"
//         value={inpuData}
//         onChange={(e) => {
//           setInputdata(e.target.value);
//         }}
//       />
//       <button onClick={addData}>Add Data</button>
//       <div>
//         <h2>Here is Your Data list</h2>
//         {getData.map((val, i) => {
//           return (
//             <>
//               <ul key={i}>
//                 <li>
//                   {val}
//                   <button onClick={() => removeData(i)}>Remove data</button>
//                 </li>
//               </ul>
//             </>
//           );
//         })}
//       </div>
//     </>
//   );
// };
// export default TodoList;

// /////////////////////////////////////

// import React from 'react'
// import Props from '../Props';

// let name = "nandani";
// let fullname= "Nandnai Yadav"
// const TodoList = () => {

//   const product = [
//     {
//       pName: "Macbook",
//       pDate: " 1 January",
//       pYear: 2001,
//     },
//     {
//       pName: "Laptop",
//       pDate: " 4 Augusr",
//       pYear: 2010,
//     },
//   ];
//   return (
//     <div>
//     <Props name={name}/>
//     <Props name="Chhavi"/>
//     <Props name="Ram"/>
//     </div>
//   )
// }

// export default TodoList

/////////////////////////////

// //useEffect hook
// import React, { useState, useEffect } from "react";

// const TodoList = () => {
//   const [count, setCount] = useState(0);
//   const [data, setDta] = useState("Ram");

//   useEffect(() => {
//     console.log("hii");
//   }, [data]);
//   function add() {
//     setCount(count + 1);
//   }
//   function updateData()
//   {
//     setDta("Seeta")
//   }
//   return (
//     <>
//       <div>Button Clicked {count} times</div>
//       <button onClick={add}>Click me</button>
//       <button onClick={updateData}>Updatedata</button>
//     </>
//   );
// };

// export default TodoList;



//////////////////////////////////////

import React, { useState } from 'react'

const TodoList = () => {
  const [input,setInput]= useState("");
  const [addData,setAddData]=useState([]);
  // function changehandle(e){
  //   setInput(e.target.value);
  //   console.log(e.target.value)

  // }
  function addActivity(){
    // setAddData([...addData,input]);
    // console.log(addData);
    setAddData((addData)=>{
      const updatedList=[...addData,input]
      console.log(updatedList);
      setInput("");
      return updatedList;
    })
  }
  function removeData(i){
    let newArr =addData.filter((ele,id)=>{
      return(
        i != id
      )
    })
    setAddData(newArr);
  }
  
  return (
    <div>
      <input type='text' placeholder='create activity' value={input} onChange={(e)=>{
        setInput(e.target.value);
      }}/>
      <button onClick={addActivity}>Add Data</button>
      <div className='container'>
        <h3> Here is your list</h3>
        {addData.map((val,i)=>{
          return(
            <>
            <ul key={i}>
              <li>{val}
              <button onClick={()=>removeData(i)}>Remove Data</button>
              </li>
            </ul>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default TodoList
