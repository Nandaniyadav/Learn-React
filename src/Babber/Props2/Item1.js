import React from 'react'

const Item1 = (props) => {
  return (
    <div>
        <h2>I am Item 1 Page</h2>
        <h3>My Name is {props.name}. My trade is {props.tr}</h3>
    </div>
  )
}

export default Item1