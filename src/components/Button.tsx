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
  const handleClick = () => {
    if (props.path === "forum") {
      window.open(`/${props.path}`, "_blank"); // Opens in new tab
    } else if (props.path === "GFXvs") {
      window.open("https://www.gfxvs.com/", "_blank");
    } else if (props.path === "SIN Staking Platform") {
      window.open("https://sin-staking.vercel.app/", "_blank");
    } else if (props.path === "NCR Course") {
      window.open("https://ncrcourse.vercel.app/", "_blank");
    } else if (props.path === "Clarus Blockchain & Wallet") {
      window.open("https://www.myidcoinsale.com/", "_blank");
    } else if (props.path === "CGM Assistant") {
      window.open("https://cgm-assistant-fe.vercel.app/", "_blank");
    } else {
      navigate(`/${props.path}`); // Navigates normally
    }
  };

  return (
    <div className="buttonContainer" onClick={handleClick}>
      <button className={"gradient-button " + props.className}>{props.text ?? "Success needs your wish"}</button>
    </div>
  );
};

export default Button;
