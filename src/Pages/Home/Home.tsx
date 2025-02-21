import "./Home.scss";
import React from "react";

import Sec from "../Sec/Sec";
import CollaborationSection from "../CollaborationSection/CollaborationSection";
import FeaturedWorkSection from "../FeaturedWorkSection/FeaturedWorkSection";
import VideoSection from "../Video/VideoSection";
import Video from "../../components/Video";
import v1 from "../../img/Video1.png";
import v2 from "../../img/Video2.png";
import v3 from "../../img/Video3.png";
import v4 from "../../img/Video4.jpg";
import v5 from "../../img/Video5.jpg";

const items = [
    {
      image: v1,
      logo: "/path-to-company-logo.png",
      name: "John Doe",
      position: "CEO of Trustpay",
      feedback: "They delivered in best!",
      driveLink: "https://drive.google.com/file/d/your-drive-id/view",
    },
    {
      image: v2,
      logo: "/path-to-company-logo.png",
      name: "Jane Smith",
      position: "CTO of Finserv",
      feedback: "Amazing experience working",
      driveLink: "https://drive.google.com/file/d/your-drive-id/view",
    },
    {
      image: v3,
      logo: "/path-to-company-logo.png",
      name: "Alice Johnson",
      position: "Product Manager at InnovateTech",
      feedback: "Truly innovative solutions",
      driveLink: "https://drive.google.com/file/d/your-drive-id/view",
    },
    {
      image: v4,
      logo: "/path-to-company-logo.png",
      name: "Bob Brown",
      position: "Founder of StartX",
      feedback: "Highly recommend their services!",
      driveLink: "https://drive.google.com/file/d/your-drive-id/view",
    },
    {
      image: v5,
      logo: "/path-to-company-logo.png",
      name: "Eve Green",
      position: "Designer at PixelCraft",
      feedback: "Their designs blew us away!",
      driveLink: "https://drive.google.com/file/d/your-drive-id/view",
    },
  ];

  // Duplicate items for seamless looping
  const carouselItems = [...items, ...items, ...items];

const Home: React.FC = () => {
    return (
        <div className="Home">
            <Sec />
            <CollaborationSection />
            <FeaturedWorkSection />
            <VideoSection />
            
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
