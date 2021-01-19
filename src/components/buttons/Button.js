import React from "react";
import "./button.css";

const Button = ({ buttonText, handleClick, classBtn }) => {
  return (
    <div className={`btn button--${classBtn}`} onClick={() => handleClick()}>
      <span>{buttonText}</span>
    </div>
  );
};

export default Button;
