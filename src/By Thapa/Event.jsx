import React, { useState } from "react";
import '../index.css'
const Event = () => {
    let color = "red"
    const [bg, setBg] = useState(color)
    const [name, setName] = useState("Click me")



    const change = () => {
        // console.log("clicked")
        let newbg = "green"
        setBg(newbg)
        setName("OUCH ! 😮")

    }
    const bgBack = () => {
        setBg(color)
        setName("Starting Color 😁")
    }
    return (
        <>
            <div style={{ backgroundColor: bg }}>
                <h2 style={{ marginLeft: "40%" }}>Event in React js</h2>
                <button className="btn" onClick={change} onDoubleClick={bgBack}>{name}</button>
            </div>
        </>
    )
}
export default Event;