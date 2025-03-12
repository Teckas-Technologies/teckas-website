import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Button.css";

type ButtonProps = {
  text?: string
  className?: string
  path?: string
  siteUrl?: string
}

const Button: React.FC<ButtonProps> = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (props.siteUrl) {
      window.open(`${props.siteUrl}`, "_blank"); // Opens in new tab
    } else {
      navigate(`/${props.path}`); // Navigates inside
    }
  };

  return (
    <div className="buttonContainer" onClick={handleClick}>
      <button className={"gradient-button " + props.className}>{props.text ?? "Success needs your wish"}</button>
    </div>
  );
};

export default Button;
