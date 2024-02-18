import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Page1=()=>{
    const navigate = useNavigate()
    const go =()=>{
        navigate('/page2')
    }
    return(
        <div>
            <h1>Thhis is Page-1</h1>
            {/* <Link to='/page2'>Page-2</Link> */}
            <button onClick={go}>Go to page-2</button>
        </div>
    )
}
export default Page1;