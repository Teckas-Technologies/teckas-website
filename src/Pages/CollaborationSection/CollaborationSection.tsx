import React from 'react';

import CollaborationLogo from '../../components/CollaborationLogo/CollaborationLogo';
import Button from "../../components/Button"

import "./CollaborationSection.scss";


// collaboration logos
import gfxvs from "../../assets/collaborations/gfxvs.png";
import mintbase from "../../assets/collaborations/mintbase.png";
import bitte from "../../assets/collaborations/bitte.png";
import near from "../../assets/collaborations/near.png";
import aurora from "../../assets/collaborations/aurora.png";
import sin from "../../assets/collaborations/sin.png";


const CollaborationSection: React.FC = () => {
    return (
        <div className='CollaborationSection'>
            <div className="gradientText">
                Teckas Technologies
            </div>

            <div className="title">
                Trusted by Startups and Blockchain
            </div>
            <div className="title">
                Foundations Worldwide
            </div>

            <div className="subtitle">
                We're proud to have collaborated with innovative startups and leading blockchain foundations to build impactful products.
            </div>

            <div className="logosContainer">
                <CollaborationLogo className='hideInMobile' logo={gfxvs} name='GFXvs' />
                <CollaborationLogo className='hideInMobile' logo={mintbase} name='Mintbase' />
                <CollaborationLogo logo={bitte} name='Bitte' />
                <CollaborationLogo logo={near} name='NEAR' />
                <CollaborationLogo className='hideInMobile' logo={aurora} name='Aurora' />
                <CollaborationLogo className='hideInMobile' logo={sin} name='SIN' />
            </div>

            <Button text='Have a Project in mind?' />

        </div>
    );
};

export default CollaborationSection;