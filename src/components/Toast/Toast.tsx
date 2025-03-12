import React, {useEffect } from "react";
import "./Toast.css";

type ToastType = "success" | "danger";

import success from "../../assets/check-svg.svg";
import danger from "../../assets/exclamation.svg";

interface ToastProps {
    message: string;
    type: ToastType;
    duration?: number;
    onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, duration = 5000, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <div className={`toast toast-${type}`}>
            <div className="toast-content-wrapper">
                <div className="toast-icon">
                    {type === "success" && <div className="toast-icon-holder"><img src={success} alt="check" className="toast-icon" /></div>}
                    {type === "danger" && <div className="toast-icon-holder"><img src={danger} alt="danger" className="toast-icon" /></div>}
                </div>
                <div className="toast-message">{message}</div>
                <div className="toast-progress"></div>
            </div>
        </div>
    );
};

export default Toast;
