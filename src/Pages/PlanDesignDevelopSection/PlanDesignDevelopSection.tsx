import React from 'react';

import GlowingText from '../../components/GlowingText/GlowingText';
import TeckasLogo from '../../components/TeckasLogo/TeckasLogo';

import "./PlanDesignDevelopSection.scss";

const workflows = {
    "Plan": "Got a concept but need direction? We help you strategize, enhance your idea, and provide the resources to turn it into a reality.",
    "Design": "Create intuitive and visually stunning interfaces that elevate user experiences while meeting critical business objectives.",
    "Develop": "Build robust, scalable, and efficient applications tailored to your unique goals. From backend to frontend, we've got you covered.",
    "Support": "We're here around the clock to ensure everything runs smoothly. From updates to bug fixes, your system is always in capable hands.",
    "Grow": "Expand your reach and capabilities with confidence. Our solutions are built to scale seamlessly as your business evolves.",
}

const PlanDesignDevelopSection: React.FC = () => {

    const [activeWorkflow, setActiveWorkflow] = React.useState(0);

    return (
        <div className='PlanDesignDevelopSection'>
            <GlowingText text={[
                ...Object.keys(workflows)
            ]} 
                onHover={(index) => setActiveWorkflow(index)}
            />

            <div className="detailedInfo">

                <div className="content">
                    <div className="title">
                        <TeckasLogo showBackgroundBlur />
                    </div>

                    <div className="workflowExplanation">
                    
                        {
                            Object.values(workflows).map((explanationText, index) => {
                                return (
                                    <div key={index} className={`text ${(activeWorkflow === index) ? "active" : ""}`}>
                                        {explanationText}
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PlanDesignDevelopSection;