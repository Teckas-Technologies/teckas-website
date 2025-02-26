import React from 'react';

import logo from "../../assets/teckas-logo.png";

import "./TeckasLogo.scss";

type TeckasLogoProps = {
    showBackgroundBlur?: boolean;
}

const TeckasLogo: React.FC<TeckasLogoProps> = ({ showBackgroundBlur }) => {
    return (
        <div className={`teckasLogo ${showBackgroundBlur ? 'blur': ''}`}>
            <img src={logo} alt="Teckas Logo" />
        </div>
    );
}

export default TeckasLogo;