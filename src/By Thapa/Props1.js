import React from "react";

const Props1=(props)=>{
    console.log(props)
    return(
        <>
        <div className="cards">
            <div className="card">
                <img src={props.imgsrc}/>
            </div>
        </div>
        </>
    )
}
export default Props1;