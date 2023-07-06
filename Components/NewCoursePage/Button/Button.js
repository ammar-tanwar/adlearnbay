import React from "react";

const Button = ({ text, passIcon, outline, invert }) => {
  return (
    <button
      className={outline ? "outLineBtn" : "button"}
      style={invert ? { flexFlow: "row-reverse" } : { flexFlow: "row" }}
    >
      {text}
      {passIcon}
    </button>
  );
};

export default Button;
