import React, { useEffect, useState } from 'react';

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
    const [x, setX] = useState<string>("50%");
    const [y, setY] = useState<string>("50%");

    useEffect(() => {

        const handleMouseMove = (e: MouseEvent) => {
            const container = document.querySelector(".glowingTextContainer");
            if (container) {
                const rect = container.getBoundingClientRect();
                const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
                const yPercent = ((e.clientY - rect.top) / rect.height) * 100;
                setX(`${xPercent}%`);
                setY(`${yPercent}%`);
            }
        }

        window.addEventListener("mousemove", handleMouseMove);
        handleMouseMove({ clientX: window.innerWidth / 2, clientY: window.innerHeight / 2 } as unknown as MouseEvent);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        }

    }, []);

    return (
        <div className='PlanDesignDevelopSection'>

            <div className="doubleGlowText">

                <div className='glw glw1'>
                    <GlowingText text={[
                        ...Object.keys(workflows)
                    ]}
                        onHover={(index) => setActiveWorkflow(index)}
                    />
                </div>

                <div className='glw glw2' style={{
                    "--x": x, "--y": y} as React.CSSProperties}>
                    <GlowingText text={[
                        ...Object.keys(workflows)
                    ]}
                        onHover={(index) => setActiveWorkflow(index)}
                    />
                </div>

            </div>

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