import React from "react";
import "./message.css";

const Message = ({ customClass, children }) => {
  return <div className={`bar bar--${customClass}`}>{children}</div>;
};

export default Message;
