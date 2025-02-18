

import { FC, useEffect, useState } from "react";

import "./GlowingText.scss";

type GlowingTextProps = {
    text: string[]
}

const GlowingText: FC<GlowingTextProps> = ({ text }) => {

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
            }    }

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        }

    }, []);

    return (
        <>
            <div className="glowingTextContainer">
                {
                    text.map((word, index) => {
                        return <span key={index} className="glowingText">{word}</span>
                    })
                }

            <div className="light" style={{
                        "--x": x,
                        "--y": y
                    } as React.CSSProperties}></div>

            </div>
        </>
    );
}

export default GlowingText;