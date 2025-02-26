import React from "react";
import "./Video.scss";
import pause from "../img/Pause.png";
import Symbol from "../img/Symbol.png";

interface TestimonialCardProps {
  image: string;
  logo: string;
  name: string;
  position: string;
  feedback: string;
  drivelink: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  image,
  // logo,
  name,
  position,
  feedback,
  drivelink,
}) => {
  return (
    <div className="testimonial-card">
      <div className="video-section">
        <div className="video-image-container">
          <img src={image} alt="Testimonial" className="video-image" />
        </div>
       <div className="details">
       <h4 className="name">{name}</h4>
       <p className="position">{position}</p>
       </div>
        {/* <button className="play-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="play-icon"
          >
            <path d="M8 5v14l11-7L8 5z" />
          </svg>
        </button> */}
         <img src={Symbol} alt="Testimonial" className="symbol" />
         <img
          src={pause} // Replace with your pause icon path
          alt="Play Button"
          className="play-button"
          onClick={() => window.open(drivelink, "_blank")} // Redirect to Google Drive link
        />         

      </div>
      <div className="info-section">
        {/* <img src={logo} alt="Company Logo" className="company-logo" /> */}
       
        <blockquote className="feedback">“{feedback}”</blockquote>
      </div>
    </div>
  );
};

export default TestimonialCard;
