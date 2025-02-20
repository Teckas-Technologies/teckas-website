import "./Home.scss";
import React from "react";

import GlowingText from "../../components/GlowingText/GlowingText";
import CollaborationLogo from "../../components/CollaborationLogo/CollaborationLogo";
import FeaturedWorkCard from "../../components/FeaturedWorkCard/FeaturedWorkCard";


import Sec from "../Sec/Sec";
import CollaborationSection from "../CollaborationSection/CollaborationSection";
import FeaturedWorkSection from "../FeaturedWorkSection/FeaturedWorkSection";

import TeckasLogo from "../..//assets/teckas-logo.png";

const Home: React.FC = () => {
    return (
        <div className="Home">
            <Sec />
            <CollaborationSection />
            <FeaturedWorkSection />
            {/* <TeckasLogo showBackgroundBlur /> */}
            {/* <GlowingText text={[
                "Plan",
                "Design",
                "Develop",
                "Support",
                "Grow"
            ]} /> */}

            {/* <div style={{
                display: "flex",
                flexDirection: "column",
                marginTop: ".5rem",
                gap: ".5rem"
            }}>
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
            </div> */}

            {/* <FeaturedWorkCard 
                imageURL={gfxvs}
                name="GFXvs"
            /> */}


        </div>
    );
}

export default Home;