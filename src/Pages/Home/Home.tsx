import "./Home.scss";
import React from "react";

import Sec from "../Sec/Sec";
import CollaborationSection from "../CollaborationSection/CollaborationSection";
import FeaturedWorkSection from "../FeaturedWorkSection/FeaturedWorkSection";
import VideoSection from "../Video/VideoSection";
import PlanDesignDevelopSection from "../PlanDesignDevelopSection/PlanDesignDevelopSection"; 
import CtaSection from "../CtaSection/CtaSection";

import Footer from "../Footer/Footer";
import NavBar from "../../components/NavBar/NavBar"

const Home: React.FC = () => {
    return (
        <div className="Home">
            <NavBar />

            <Sec />
            <CollaborationSection />
            <FeaturedWorkSection />
            <VideoSection />
            <PlanDesignDevelopSection />
            <CtaSection />
            <Footer />
            
            {/* <TeckasLogo showBackgroundBlur /> */}

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
