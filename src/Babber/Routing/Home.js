// import React from 'react'
// import { Link } from 'react-router-dom'

// const Home = () => {
//   return (
//     <div>
//         <h2>I am Home Page</h2>
//         <br/><br/>
//         <Link to="/contact">I am Contact Page</Link>
//         <br/><br/>
//         <Link to="/about">I am About Page</Link>
//     </div>
//   )
// }

// export default Home;

//////////////////////////////////////

import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
       <h3>I am Home page</h3>
       <Link to="/about">About</Link>
       <br/>
       <Link to="/about">Contect</Link>
    </div>
  )
}

export default Home