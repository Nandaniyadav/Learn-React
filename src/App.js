////////////For reuseable button component
// import logo from './logo.svg';
// import './App.css';
// import Button from './ReUseableComponents/Button';

// function App() {
//   return (
//     <div className='App'>
//     <h1>Reuseable Buttons</h1>
//     <Button onClick={()=>{
//       alert("clickd")
//     }}>Clickme</Button>
//     <Button style={{background: "green"}} onClick={()=>{
//       alert("welcome")
//     }}>Touch me</Button>
//     <Button onClick={()=>{
//       alert("use reuseable buttons")
//     }}>Clickme</Button>
//     </div>

//   );
// }

// export default App;

///////////////////////////////////////////////
//                     //for users file component
// import React from 'react'
// import Users from './Users'

// const App = () => {
//   function apple(){
//     alert("clicked")
//   }
//   return (
//     <div>
//     <Users/>
//     <button onClick={apple}>click me</button>
//     </div>
//   )
// }

// export default App

////////////////////////////////////
// //life cycle method

// import React from 'react'

// class App extends React.Component {

//   constructor () {
//     super();
//     console.warn("constructor")
//   }

//   componentDidAmount() {
//     console.warn("componentDidAmount")
//   }
//   render() {
//     console.warn("render")
//   }

//   return() {
//     <div>
//       <h1>Life cycle Method</h1>
//     </div>
//   }
// }

// export default App

/////////////////////////
// // Use Class component

// import React from 'react'
// import Classcmp from './ClassBased/Classcmp'

// const App = () => {
//   return (
//     <div>
//       <Classcmp></Classcmp>
//     </div>
//   )
// }

// export default App

////////////////////////////////
// //Use of  Props component

// import React from 'react'
// import Props from './Props/Props'

// const App = () => {
//   return (
//     <div>
//       <Props number='1' age = '20' />
//       <Props number='2' myName="Nandani"/>
//       <Props number='3'/>
//     </div>
//   )
// }

// export default App

///////////////////////////////

// //For Counter component
// import React from 'react'
// import './App.css'
// import Counter from './counter/Counter'

// const App = () => {
//   return (
//     <div className='App'>
//     <Counter/>
//     </div>
//   )
// }

// export default App

/////////////////////////////

// ////////// for UseStatearray component

// import React from 'react';
// import './App.css'
// import UseStatearray from './Use of useState/UseStatearray'
// const App = () => {
//   return (
//     <div className='App'>
//       <UseStatearray/>
//     </div>
//   )
// }
// export default App;
////////////////////////////////

// //////// for Usestate component
// import React from 'react'
// import './App.css'
// import LearnHook from './Use of useState/Usestate'

// const App = () => {
//   return (
//     <div className='App'>
//       <LearnHook/>
//     </div>
//   )
// }

// export default App

// ///////////////////////////////////////
// /////////For Spread component

// import React from 'react'
// import './App.css'
// import Spread from './Use of Spread operator/Spread'

// const App = () => {
//   return (
//     <div className='App'>
//       <Spread/>
//     </div>
//   )
// }

// export default App
// ////////////////////////////////////////
// //for Progress Bar
// import React from 'react'
// import './App.css'
// import ProgressBar from './Progress Bar/ProgressBar'

// const App = () => {
//   return (
//     <div className='App'>
//       <ProgressBar/>
//       <ProgressBar name="nandani"/>
//     </div>
//   )
// }

// export default App

// // ////////////////////////////////
/////For Todo List

// import React from 'react'
// import './App.css'
// import Todo from './Todo List/Todo'

// const App = () => {
//   return (
//     <div className='App'>
//       <Todo/>
//     </div>
//   )
// }

// export default App

/////////////////////////////////////////
//For Chalange1 fileName

// import React from "react";
// import Chlange1 from "./By Thapa/Chalange1";
// const App = () => {
//   return (
//     <div>
//       <Chlange1 />
//     </div>
//   );
// };
// export default App;
///////////////////////////////////////////////////////////////////
////For Challange2 fileName
// import React from "react";
// import Challange2 from "./By Thapa/Challange2";
// const App =()=>{
//   return(
//     <div>
//       <Challange2/>
//     </div>
//   )
// }
// export  default App;

//////////////////////////////////////////////////////////////
////For Challange3 fileName

// import React from "react";
// import './App.css'
// import Challange3 from "./By Thapa/Challange3"
// const App =()=>{
//   return(
//     <div className="App">
//       <Challange3/>
//     </div>
//   )
// }
// export default App;

/////////////////////////////////////////////////
/////For Calculater
// import React from "react";
// import Add from './By Thapa/Calculater/Calc'
// const App =()=>{
//   return(
//     <div>
//       <Add/>
//     </div>
//   )
// }
// export default App;

///////////////////////////////////////////////////////////
//For Props1

// import React from "react";
// import Props1 from "./By Thapa/Props1";

// const App =()=>{
//   return(
//     <div>
//       <Props1 imgsrc="https://picsum.photos/200/300" alt="Randam Images"/>
//       <Props1 imgsrc="https://picsum.photos/seed/picsum/200/300"/>
//       <Props1 imgsrc="https://picsum.photos/200/300/?blur=2" alt="Randam images"/>
//     </div>
//   )
// }
// export default App;

///////////////////////////////////////////////////
//For SlotGame

// import React from "react";
// import SlotGame from "./By Thapa/SlotGame";
// import Slot from "./By Thapa/SlotGame";
// const App =()=>{
//     return(
//         <>
//         <h1>🧭Welcome to <span>Slot Machine</span> Game 🧭</h1>
//       <SlotGame/>
//       <Slot a='😂' b='😃' c='😍'/>
//       {/* <Slot a='😎' b='😎' c='😎'/>
//       <Slot a='🤩' b='😛' c='🤩'/> */}
//         </>
//     )
// }
// export default App;

///////////////////////////////////////////////////////
// For Usestate

// import React from "react";
// import './App.css'
// import UseState from "./By Thapa/UseState";
// const App =()=>{
//     return(
//         <div className="App">
//         <UseState/>
//         </div>
//     )
// }
// export default App;

///////////////////////////////////////////
//For Challange4.js
// import React from "react";
// import './App.css'
// import Challange4 from "./By Thapa/Challange4";
// const App =()=>{
//     return(
//         <div className="App">
//         <Challange4/>
//         </div>
//     )
// }
// export default App;

//////////////////////////////////////////////
//For Event.jsx

// import React from "react";
// import Event from "./By Thapa/Event";
// const App = () =>{
//     return(
//         <Event/>
//     )
// }
// export default App

/////////////////////////////////////////////////////////////////
// For Form.js
// import React from "react";
// import Form from "./By Thapa/Form";
// const App = () =>{
//     return(
//         <Form/>
//     )
// }
// export default App
/////////////////////////////////  for selflearn

// import React from "react";
// import Selflearn from "./components/Selflearn";

//  const App =()=>{
//     return(
//         <div>
//              <Selflearn name="Nandani Yadav"/>
//             <Selflearn profile="Frontend developer"/>

//         </div>
//     )
//  }
//  export default App

////////////////////////////
// for Routing file

// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Page1 from './components/Page1'
// import Page2 from './components/Page2'
// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Page1/>} />
//           <Route path="page2" element={<Page2/>}/>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };
// export default App;

//////////////Prop by Babber

// import React from "react";
// import "./App.css";
// import Item from "./Babber/Props/Item";
// import ItemDate from "./Babber/Props/ItemDate";
// const App = () => {
// const product = [
//   {
//     pName: "Macbook",
//     pDate: " 1 January",
//     pYear: 2001,
//   },
//   {
//     pName: "Laptop",
//     pDate: " 4 Augusr",
//     pYear: 2010,
//   },
// ];
//   return (
//     <div className="App">
//       <Item classNameitemStyle  name={product[0].pName}/>
//       {/* helloji mai hu Item */}
//       <ItemDate date={product[0].pDate} year={product[0].pYear} />
//     </div>
//   );
// };

// export default App;
///////////////////////////////////////
// ////////props
// import React from 'react'
// import Item1 from './Babber/Props2/Item1'

// const App = () => {
//   let somName=[{
//     name:"Sarita",
//     trade:"cs"
//   },
//  {
//   name:"xyz",
//   trade:"it"
//  }]
  
//   return (
//     <div>
//       <Item1 name={somName[0].name} tr={somName[0].trade}/>
//       <Item1 myName="Chhavi"/>
//     </div>
//   )
// }

// export default App

////////////////////////////


// import React from 'react'
// import './App.css'
// import TodoList from './Babber/Props/TodoList'

// const App = () => {
//   return (
//     <div className='App'>
//       <TodoList/>
//     </div>
//   )
// }

// export default App
///////////////////////////
/////////prop driling
// import React from 'react';
// import ChildA from './Babber/propDriling/ChildA';

// const App = () => {
//   let name="Nandani Yadav"
//   return (
//     <div>
//       <ChildA name={name} job="Frontend"/>
//     </div>
//   )
// }

// export default App;
// ///////////////////////////////
//// use of Context Api

// import React, { createContext } from 'react'
// import ChildA from './Babber/ContextApi/ChildA'

// let data1 = createContext();
// let data2 = createContext();
// const App = () => {
//   let name = "Nandani Yadav"
//   let job = "Frontend Developer"
//   return (
//     <div>
//       <data1.Provider value={name}>
//         <data2.Provider value={job}>
//         <ChildA/>
//         </data2.Provider>
//       </data1.Provider>
      
//     </div>
//   )
// }

// export default App;
// export {data1,data2};
/////////////////////////////////////
// //// use of context api
//  import React, { createContext } from 'react'
// import ChildA from './Babber/ContextApi/ChildA'
 
// let data1= createContext();
// let data2= createContext();
//  const App = () => {
//   let name ="Nandani Yadav";
//   let job = "Frontend Developer";
//    return (
//      <div>
//       <data1.Provider value={name}>
//         <data2.Provider value={job}>
//         <ChildA/>
//         </data2.Provider>
//       </data1.Provider>
      
//      </div>
//    )
//  }
 
//  export default App;
//  export {data1,data2};

////////////////////////////
// useContext hook
// import React, { createContext } from 'react'
// import ChildA from './Babber/useContext/ChildA'

// let data1=createContext();
// let data2=createContext();
// const App = () => {
//   let name = "Nandani Yadav";
//   let job = "Frontend developer"
//   return (
//     <div>
//       <data1.Provider value={name}>
//         <data2.Provider value={job}>
//         <ChildA/>
//         </data2.Provider>
//       </data1.Provider>
      
//     </div>
//   )
// }

// export default App
// export {data1,data2}

////////////////////////////////
/// use of useContext 

// import React, { createContext } from 'react'
// import ChildA from './Babber/useContext/ChildA'

//  let data1= createContext();
// const App = () => {
//   let name = "Nandani Yadav";
//   return (
//     <div>
//       <data1.Provider value={name}>
//       <ChildA/>
//       </data1.Provider>
      
//     </div>
//   )
// }

// export default App;
// export {data1}


// //////////////
// //Routing
// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Home from './Babber/Routing/Home'
// import Contact from './Babber/Routing/Contact'
// import About from './Babber/Routing/About'

// const App = () => {
//   return (
//     <div>
//       <h2> Learn Routing</h2>
//       <Routes>
//         <Route path='/' element={<Home/>}>Home</Route>
//         <Route path='/contact' element={<Contact/>}>Home</Route>
//         <Route path='/about' element={<About/>}>Home</Route>
//       </Routes>
//     </div>
//   )
// }

// export default App



///////////////////////////////////
// // Routing

// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Home from './Babber/Routing/Home'
// import Contact from './Babber/Routing/Contact'
// import About from './Babber/Routing/About'

// const App = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path='/' element={<Home/>}>Home</Route>
//         <Route path='/contact' element={<Contact/>}/>
//         <Route path='/about' element={<About/>}></Route>
//       ontact</Routes>
//     </div>
//   )
// }

// export default App


///////////////////////////////////
// //todolist
// import React from 'react'
// import TodoList from './Babber/Props/TodoList'

// const App = () => {
//   return (
//     <div>
//       <TodoList/>
//     </div>
//   )
// }

// export default App

/////////////////////////

import React from 'react'
import Efect from './Babber/Efect'

const App = () => {
  return (
    <div>
      <Efect/>
    </div>
  )
}

export default App