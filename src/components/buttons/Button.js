import React from "react";
import "./button.css";

const Button = ({ buttonText, handleClick, classBtn }) => {
  return (
    <div className={`btn btn--${classBtn}`} onClick={() => handleClick()}>
      {buttonText}
    </div>
  );
};

export default Button;
