// import React from 'react';
// import { data1,data2 } from '../../App';

// const ChildC = () => {
//   return (
//     <div>
//         <data1.Consumer>
//             {
//                 (name)=>{
//                     return(
//                         <data2.Consumer>
//                             {
//                                 (job)=>{
//                                     return(
//                                       <h1>My name is {name}. And My job Profile is {job}</h1>
//                                     )
//                                 }
//                             }
//                         </data2.Consumer>

//                     )
//                 }
//             }
//         </data1.Consumer>
//     </div>
//   )
// }

// export default ChildC

///////////////////////////////////////////

import React from "react";
import { data1, data2 } from "../../App";
const ChildC = () => {
  return (
    <div>
      <h3>I am Component C</h3>
      <data1.Consumer>
        {(name) => {
          return (
            <data2.Consumer>
              {(job) => {
                return (
                  <h2>
                    My name is {name}. And my job is {job}
                  </h2>
                );
              }}
            </data2.Consumer>
            // <h2>My name is {name}</h2>
          );
        }}
      </data1.Consumer>
    </div>
  );
};

export default ChildC;
