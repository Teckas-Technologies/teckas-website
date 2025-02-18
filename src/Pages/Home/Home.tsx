import "./Home.scss";
import React from "react";

import GlowingText from "../../components/GlowingText/GlowingText";
import TeckasLogo from "../../components/TeckasLogo/TeckasLogo";
import CollaborationLogo from "../../components/CollaborationLogo/CollaborationLogo";

// collaboration logos
import gfxvs from "../../assets/collaborations/gfxvs.png";
import mintbase from "../../assets/collaborations/mintbase.png";
import bitte from "../../assets/collaborations/bitte.png";
import near from "../../assets/collaborations/near.png";
import aurora from "../../assets/collaborations/aurora.png";
import sin from "../../assets/collaborations/sin.png";


const Home: React.FC = () => {
    return (
        <div className="Home">
            Home Page
            <TeckasLogo showBackgroundBlur />
            <GlowingText text={[
                "Plan",
                "Design",
                "Develop",
                "Support",
                "Grow"
            ]} />

            <CollaborationLogo
                logo={gfxvs}
                name={"GFXvs"}
            />
            <CollaborationLogo
                logo={mintbase}
                name={"Mintbase"}
            />
            <CollaborationLogo
                logo={bitte}
                name={"Bitte"}
            />
            <CollaborationLogo
                logo={near}
                name={"NEAR"}
            />
            <CollaborationLogo
                logo={aurora}
                name={"Aurora"}
            />
            <CollaborationLogo
                logo={sin}
                name={"SIN"}
            />



        </div>
    );
}

export default Home;