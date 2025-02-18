import React from "react";
import "./Button.css";

type ButtonProps = {
  text?: string
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <div className="app">
      <button className="gradient-button">{props.text ?? "Success needs your wish"}</button>
    </div>
  );
};

export default Button;
