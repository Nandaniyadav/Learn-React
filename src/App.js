//For reuseable button
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
//                     //for users file
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
// //Use of  Props

// import React from 'react'
// import Props from './Props/Props'

// const App = () => {
//   return (
//     <div>
//       <Props number='1' age = '20' />
//       <Props number='2'/>
//       <Props number='3'/>
//     </div>
//   )
// }

// export default App

///////////////////////////////

// //For Counter
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

//For Todo List

import React from 'react'
import './App.css'
import Todo from './Todo List/Todo'

const App = () => {
  return (
    <div className='App'>
      <Todo/>
    </div>
  )
}

export default App





