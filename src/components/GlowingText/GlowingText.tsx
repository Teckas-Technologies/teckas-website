

import { FC, useEffect, useState } from "react";

import "./GlowingText.scss";

const GlowingText: FC = () => {

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
                <span className="glowingText">{"Plan"}</span>
                <span className="glowingText">{"Design"}</span>
                <span className="glowingText">{"Develop"}</span>
                <span className="glowingText">{"Support"}</span>
                <span className="glowingText">{"Grow"}</span>

            <div className="light" style={{
                        "--x": x,
                        "--y": y
                    } as React.CSSProperties}></div>

            </div>
        </>
    );
}

export default GlowingText;