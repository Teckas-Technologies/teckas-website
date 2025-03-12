import React from 'react';

import FeaturedWorkCard from "../../components/FeaturedWorkCard/FeaturedWorkCard";

import "./FeaturedWorkSection.scss";


// collaboration logos
import gfxvs from "../../assets/collaborations/gfxvs.png";
import ncr from "../../assets/collaborations/ncr.png";
import clarus from "../../assets/collaborations/clarus.png";
import cgm from "../../assets/collaborations/cgm.png";
import sin from "../../assets/collaborations/sin.png";
import myid from "../../assets/collaborations/myid.png";

// featured work images
import gfxvsWork from "../../assets/featured-work/gfxvs.png";
import cgmWork from "../../assets/featured-work/cgm.png";
import ciarusWork from "../../assets/featured-work/ciarus.png";
import ncrWork from "../../assets/featured-work/ncr.png";
import myidWork from "../../assets/featured-work/myid.png";
import sinWork from "../../assets/featured-work/sin.png";
import near from "../../assets/featured-work/near.png";
import eth from "../../assets/our-services/eth.png";
import i2 from "../../assets/featured-work/22.png";
import openai from "../../assets/featured-work/openai.png";
import next from "../../assets/featured-work/next.png";

type FeaturedWorkCardIconType = {
    name: string,
    icon: string,
}

type FeaturedWorkType = {
    name: string,
    logo: string,
    image: string,
    text: string,
    icon: FeaturedWorkCardIconType[],
    siteUrl: string;
}

const featuredWork: FeaturedWorkType[] = [
    {
        name: "GFXvs",
        logo: gfxvs,
        image: gfxvsWork,
        text: "A gamified art battle platform leveraging blockchain technology and Web3 integrations.",
        icon : [
            { name: "Next.js", icon: next },
            { name: "Mintbase", icon: i2 },
            { name: "NEAR Blockchain", icon: near },
        ],
        siteUrl: "https://www.gfxvs.com/"
    },
    {
        name: "SIN Staking Platform",
        logo: sin,
        image: sinWork,
        text: "A staking NFT platform leveraging NEAR Protocol to enable seamless NFT-based staking and rewards.",
        icon : [
            { name: "Next.js", icon: next },
            { name: "NEAR Blockchain", icon: near },
        ],
        siteUrl: "https://sin-staking.vercel.app/"
    },
    {
        name: "NCR Course",
        logo: ncr,
        image: ncrWork,
        text: "An educational platform dedicated to learning and upskilling developers on the NEAR Protocol ecosystem.",
        icon : [
            { name: "Next.js", icon: next },
            { name: "Mintbase", icon: i2 },
            { name: "NEAR Blockchain", icon: near },
        ],
        siteUrl: "https://ncrcourse.vercel.app/"
    },
    {
        name: "Clarus Blockchain & Wallet",
        logo: clarus,
        image: ciarusWork,
        text: "A mobile wallet application integrating Clarus AI assistant powered by Llama Index for enhanced user interactions and financial management.",
        icon : [
            { name: "Next.js", icon: next },
            { name: "Open AI Integration", icon: openai },
        ],
        siteUrl: "https://qrco.de/bezx38"
    },
    {
        name: "CGM Assistant",
        logo: cgm,
        image: cgmWork,
        text: "An AI-powered assistant designed to support the Commissioner of Geology and Mining with automation and data-driven insights.",
        icon : [
            { name: "Next.js", icon: next },
            { name: "Open AI Integration", icon: openai },
        ],
        siteUrl: "https://cgm-assistant-fe.vercel.app/"
    },
    {
        name: "MYID Token Presale",
        logo: myid,
        image: myidWork,
        text: "A token presale platform designed to facilitate the launch and distribution of MYID tokens, ensuring secure and transparent participation for investors.",
        icon : [
            { name: "Next.js", icon: next },
            { name: "Ethereum Blockchain", icon: eth },
        ],
        siteUrl: "https://www.myidcoinsale.com/"
    },
]


const FeaturedWorkSection: React.FC = () => {
    return (
        <div className='FeaturedWorkSection'>
            <div className="gradientText">
                Featured Work
            </div>

            <div className="title">
                Bringing Ideas to Life
            </div>
            <div className="title">
                Out Featured Work
            </div>

            <div className="subtitle">
                Here's a glimpse of the projects we've delivered, combining cutting-edge technology with innovative ideas.
            </div>
            <div className='wrapper'>
                <div className="featuredWorkContainer">
                    {
                        featuredWork.map((work) => {
                            return (
                                <FeaturedWorkCard 
                                    {...work}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default FeaturedWorkSection;