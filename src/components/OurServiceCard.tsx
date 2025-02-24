import React from "react";
import "./OurServiceCard.css";

interface CardProps {
  title?: string;
  text?: string;
  imageSrc?: string[];
}

const Card: React.FC<CardProps> = ({ title, text, imageSrc }) => {
  return (
    <div className="card">
      <div className="card-header">{title || "Title"}</div>
      <p className="card-text">{text || "Some text"}</p>
      <div className="card-icons">
        {
          (imageSrc || []).map((src, index) => (
            <img
              key={index} 
              src={src}
              alt="Card Image" 
              className="icon" 
            />
          ))
        }
      </div>
    </div>
  );
};

export default Card;
