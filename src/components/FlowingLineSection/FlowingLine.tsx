

import React from "react";

import "./FlowingLine.scss";

type FlowingLineProps = {
    delay: string,
    rotation: string,
    flip?: boolean
}

const FlowingLine: React.FC<FlowingLineProps> = (props) => {

    return (
        <div className="FlowingLine" style={{ "--delay": props.delay, "--rotation": props.rotation, "--flip": ((props.flip) ? "180deg" : "0deg") } as React.CSSProperties}>

            <div className="regular">
                <svg width="273" height="139" viewBox="0 0 273 139" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1H72L145 138H273" stroke="#32323266"/>
                </svg>
            </div>

            <div className="highlight">

            <svg width="273" height="139" viewBox="0 0 273 139" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="gradient">
                        <stop offset="0.5" stop-color="white" stop-opacity="0" />
                        <stop offset="1" stop-color="white" stop-opacity="1" />
                    </linearGradient>

                    <mask id="gradient-mask">
                        <rect className="mask-rect" x="0%" y="0" width="100%" height="100%" fill="url(#gradient)" />
                    </mask>
                </defs>
                <path d="M0 1H72L145 138H273" stroke="#00B7FF" strokeWidth="2" mask="url(#gradient-mask)"/>
            </svg>


                {/* <svg width="400" height="174" viewBox="0 0 400 174" fill="none" xmlns="http://www.w3.org/2000/svg">

                   

                    <mask id="mask0_19_998" style={{ "maskType": "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="275" height="139">
                        <path d="M274.5 138.254H202L129.5 1.25391H0.5" stroke="#003043" mask="url(#gradient-mask)" />
                    </mask>
                    <g mask="url(#mask0_19_998)">
                        <rect width="468" height="207" transform="matrix(-1 0 0 1 379.5 -32.7461)" fill="#33b5e8" fill-opacity="0.75" mask="url(#gradient-mask)" />
                    </g>
                </svg> */}
            </div>


        </div>
    )
}


export default FlowingLine;