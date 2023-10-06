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




//                     //for users file
import React from 'react'
import Users from './Users'

const App = () => {
  function apple(){
    alert("clicked")
  }
  return (
    <div>
    <Users/>
    <button onClick={apple}>click me</button>
    </div>
  )
}

export default App






