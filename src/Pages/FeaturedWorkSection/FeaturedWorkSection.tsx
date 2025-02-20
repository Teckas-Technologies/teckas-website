import React from 'react';

import CollaborationLogo from '../../components/CollaborationLogo/CollaborationLogo';
import Button from "../../components/Button"
import FeaturedWorkCard from "../../components/FeaturedWorkCard/FeaturedWorkCard";

import "./FeaturedWorkSection.scss";


// collaboration logos
import gfxvs from "../../assets/collaborations/gfxvs.png";
import ncr from "../../assets/collaborations/ncr.png";
import clarus from "../../assets/collaborations/clarus.png";
import cgm from "../../assets/collaborations/cgm.png";
import sin from "../../assets/collaborations/sin.png";

// featured work images
import gfxvsWork from "../../assets/featured-work/gfxvs.png";
import cgmWork from "../../assets/featured-work/cgm.png";
import ciarusWork from "../../assets/featured-work/ciarus.png";
import ncrWork from "../../assets/featured-work/ncr.png";
import sinWork from "../../assets/featured-work/sin.png";

type FeaturedWorkType = {
    name: string,
    logo: string,
    image: string,
    text: string,
}

const featuredWork: FeaturedWorkType[] = [
    {
        name: "GFXvs",
        logo: gfxvs,
        image: gfxvsWork,
        text: "A gamified art battle platform leveraging blockchain technology and Web3 integrations."
    },
    {
        name: "SIN Staking Platform",
        logo: sin,
        image: sinWork,
        text: "A gamified art battle platform leveraging blockchain technology and Web3 integrations."
    },
    {
        name: "NCR Course",
        logo: ncr,
        image: ncrWork,
        text: "A gamified art battle platform leveraging blockchain technology and Web3 integrations."
    },
    {
        name: "Clarus Blockchain & Wallet",
        logo: clarus,
        image: ciarusWork,
        text: "A gamified art battle platform leveraging blockchain technology and Web3 integrations."
    },
    {
        name: "CGM Assistant",
        logo: cgm,
        image: cgmWork,
        text: "A gamified art battle platform leveraging blockchain technology and Web3 integrations."
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
    );
};

export default FeaturedWorkSection;