import React from "react";
import "./Button.css";

type ButtonProps = {
  text?: string
  className?: string
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <div className="buttonContainer">
      <button className={"gradient-button " + props.className}>{props.text ?? "Success needs your wish"}</button>
    </div>
  );
};

export default Button;
