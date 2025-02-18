import "./Home.scss";
import React from "react";

import GlowingText from "../../components/GlowingText/GlowingText";
import TeckasLogo from "../../components/TeckasLogo/TeckasLogo";

const Home: React.FC = () => {
    return (
        <div className="Home">
            Home Page
            <TeckasLogo showBackgroundBlur />
            <GlowingText />
        </div>
    );
}

export default Home;