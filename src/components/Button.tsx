import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Button.css";

type ButtonProps = {
  text?: string
  className?: string
  path?: string
}

const Button: React.FC<ButtonProps> = (props) => {
  const navigate = useNavigate();
  return (
    <div className="buttonContainer" onClick={() => navigate(`/${props.path}`)}>
      <button className={"gradient-button " + props.className}>{props.text ?? "Success needs your wish"}</button>
    </div>
  );
};

export default Button;
