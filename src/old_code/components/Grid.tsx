import Button from "./Button";
import "./Grid.css";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="content-wrapper">
        <p className="subtitle">The best tech isn't built by chance. It's built by choice.</p>
        <h1 className="title">Choose Teckas Technologies.</h1>
        
      </div>
      <Button/>
    </section>
  );
};

export default HeroSection;
