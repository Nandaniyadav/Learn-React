import React, { useState } from "react";
const UseState = () => {

    const [count, setCount] = useState(0);
    // console.log(count)

    const Inc = () => {
        setCount(count + 1)
    }
    const Dec = () => {
        setCount(count - 1)
    }

    return (
        <>
            <h2>Use of useState Hook</h2>
            <h2>{count}</h2>
            <button onClick={Inc}>Increment</button>
            <button onClick={Dec}>Decrement</button>
        </>
    )
}
export default UseState;
