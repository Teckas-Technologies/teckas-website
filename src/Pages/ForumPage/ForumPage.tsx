import React, { useEffect } from 'react';

const ForumPage: React.FC = () => {
    useEffect(() => {
        // Create script element
        const script = document.createElement('script');
        script.src = "https://server.fillout.com/embed/v1/";
        script.async = true;

        // Append script to the document
        document.body.appendChild(script);

        // Cleanup script on component unmount
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="forum" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
            <div 
                data-fillout-id="mwMjUmXLSVus" 
                data-fillout-embed-type="fullscreen" 
                style={{ width: '100%', height: '100%' }} 
                data-fillout-inherit-parameters
            ></div>
        </div>
    );
}

export default ForumPage;
