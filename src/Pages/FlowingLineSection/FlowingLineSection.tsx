
import React from "react";

import "./FlowingLineSection.scss";

import FlowingLine from "../../components/FlowingLineSection/FlowingLine";
import TeckasLogo from "../../components/TeckasLogo/TeckasLogo";
import OurServiceCard from "../../components/OurServiceCard";

import react from "../../assets/our-services/react.png";
import next from "../../assets/our-services/next.png";
import js from "../../assets/our-services/js.png";

import py from "../../assets/our-services/py.png";
import gpt from "../../assets/our-services/gpt.png";
import ollama from "../../assets/our-services/ollama.png";

import eth from "../../assets/our-services/eth.png";
import polka from "../../assets/our-services/polka.png";
import near from "../../assets/our-services/near.png";
import sol from "../../assets/our-services/sol.png";
import rust from "../../assets/our-services/rust.png";


const FlowingLineSection: React.FC = () => {

    return (
        <div className="FlowingLineSection">
            <div className="toppy">
                <div className="gradientText">
                    Our Services
                </div>

                <div className="title">
                    Tailored Services to
                </div>
                <div className="title">
                    Turn Your Ideas Into Reality
                </div>

                <div className="subtitle">
                   From blockchain to AI, we delivered customized solutions to help buisiness grow and innovate.
                </div>

            </div>
            <div className="downny">
                
                <div className="flowingLineGridContainer">

                    <div className="flowingLineGrid">
                        <FlowingLine delay="1s" rotation="180deg" />
                        <FlowingLine delay="2s" rotation="180deg" flip />

                        <FlowingLine delay="3s" rotation="0" flip />
                        <FlowingLine delay="4s" rotation="0" />
                    </div>

                    <div className="logoContainer">
                        <TeckasLogo showBackgroundBlur />
                    </div>

                </div>

                <div className="cardsGrid">
                    <div className="lt">
                        <OurServiceCard

                        title="Mobile App Development"
                        text="We design and build scalable, secure blockchain solutions tailored to your needs—whether it's dApps, smart contracts, or custom blockchain networks"
                        imageSrc={[react]}/>
                    </div>

                    <div className="ld">
                    <OurServiceCard
                        title="Web Development"
                        text="From interactive websites to enterprise-grade applications, we craft high-performance web solutions using modern frameworks."
                        imageSrc={[react, next, js]}
                    />
                    </div>
                    <div className="rt">
                    <OurServiceCard
                        title="AI & ML Solutions"
                        text="Unlock the power of AI with predictive analytics, automation, and intelligent applications to enhance your business operations"
                        imageSrc={[py, gpt, ollama]}
                    />
                    </div>

                    <div className="rd">
                    <OurServiceCard
                        title="Blockchain Development"
                        text="We design and build scalable, secure blockchain solutions tailored to your needs—whether it's dApps, smart contracts, or custom blockchain networks"
                        imageSrc={[eth, polka, near, sol, rust]}
                    />
                    </div>
                </div>
            </div>

        </div>
    )

}


export default FlowingLineSection;