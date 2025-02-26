

import { FC } from "react";

import "./GlowingText.scss";

type GlowingTextProps = {
    text: string[],
    onHover?: (index: number) => void
}

const GlowingText: FC<GlowingTextProps> = ({ text, onHover }) => {

    return (
        <>
            <div className="glowingTextContainer">
                {
                    text.map((word, index) => {
                        return (
                            <span 
                                key={index} 
                                className="glowingText"
                                onMouseEnter={() => {
                                    if (onHover) {
                                        onHover(index);
                                    }
                                }}
                            >
                                {word}
                            </span>
                        );
                    })
                }
            </div>
        </>
    );
}

export default GlowingText;