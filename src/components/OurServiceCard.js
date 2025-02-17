import React from "react";
import "./OurServiceCard.css";
import BCImage from '../img/OurServices/BC.png';
const Card = () => {
  return (
    <div className="card">
      <div className="card-header">BlockChain Development</div>
      <p className="card-text">
        We design and build scalable, secure blockchain solutions tailored to
        your needs—whether it's dApps, smart contracts, or custom blockchain
        networks.
      </p>
      <div className="card-icons">
        <img src={BCImage} alt="Ethereum" className="icon" />
      </div>
    </div>
  );
};

export default Card;
