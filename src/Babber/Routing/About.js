// import React from 'react'
// import { Link } from 'react-router-dom'

// const About = () => {
//   return (
//     <div>
//         <h2>I am About Page</h2>
//         <Link to="/">I am Home Page</Link>
//         <br/><br/>
//         <Link to="/contact">I am Contact Page</Link>
//         <br/><br/>
//     </div>
//   )
// }

// export default About;

/////////////////////////////
import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h3>I am About page</h3>
      <Link to="/">Home</Link>
      <br/>
      <Link to="/contact">Contact</Link>
    </div>
  )
}

export default About