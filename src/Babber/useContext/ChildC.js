// import React, { useContext } from 'react'
// import { data1,data2 } from '../../App'

// const ChildC = () => {
//     let fullName=useContext(data1);
//     let job=useContext(data2);
//   return (
//     <div>
//         <h2>My name is {fullName}.And my job is {job}.</h2>
//     </div>
//   )
// }

// export default ChildC;


/////////////////////
import React, { useContext } from 'react'
import { data1 } from '../../App'

const ChildC = () => {
  let fullName = useContext(data1);
  return (
    <div>
      <h4>I am c Component</h4>
      <h2>My name is {fullName}</h2>
    </div>
  )
}

export default ChildC