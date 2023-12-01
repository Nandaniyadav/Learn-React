import React, { useState } from "react";
const Form = () => {
  const [name, setName] = useState();
  const [data, setData] = useState();

  const getData = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handledata = (e) => {
    setData(name);
  };
  return (
    <div style={{ marginLeft: "40%", marginTop: "100px" }}>
      <h1>Hello ! {data}</h1>
      <input
        type="text"
        className="inptfrm"
        placeholder="Enter Your Name"
        defaultValue=""
        onChange={getData}
      />
      <br />
      <button type="submit" className="formbtn" onClick={handledata}>
        SUBMIT
      </button>
    </div>
  );
};
export default Form;
