import React from "react";

const Button = (props) => {
  const { children, onClick, style } = props;
  return (
    <div>
      <button style={style ? style: {background: 'red', color: 'white'}} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
