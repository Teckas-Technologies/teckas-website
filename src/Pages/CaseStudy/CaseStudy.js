import React from "react";
import "./CaseStudy.scss";
import sym from "../../img/CaseStudy/sym.png";
import page from "../../img/CaseStudy/page.png";

const DesignJourney = () => {
  const links = Array(5).fill("https://your-link-here.com");

  return (
    <div className="Full">
      <div className="design-container">
        {/* Left Section - Contains title, date, and description */}
        <div className="left-section">
          <p className="category">
            UI/UX Design <span className="dot">&#8226;</span> Nov 06 2022
          </p>
          <h1 className="title">Design Journey Printer</h1>
          <p className="description">
            An IT company which builds solutions for clients' problems. They
            provide all the information and images available on the website.
          </p>
        </div>

        {/* Right Section - Task details, strategy, and techniques used */}
        <div className="right-section">
          <div className="task">
            <h3>Task</h3>
            <p>
              Design a website to attract users and increase website visits with
              a digitalized theme.
            </p>

            {/* Strategy and Technique Section */}
            <div className="two">
              {/* Strategy Used */}
              <div className="strategy">
                <hr />
                <h3>Strategy Used</h3>
                <p>UX Strategy</p>
              </div>
              {/* Technique Applied */}
              <div className="technique">
                <hr />
                <h3>Technique</h3>
                <p>
                  UI/UX Design<br />
                  <br />Website Redesign
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Section - Project name and external link */}
      <div className="down">
        <p className="p">
          <img src={sym} alt="Symbol" className="sym" /> &nbsp; Project Name
        </p>
        {links.map((link, index) => (
          <a key={index} href={link} target="_blank" rel="noopener noreferrer">
            <img src={page} alt="Page" className="page" />
          </a>
        ))}
      </div> 
    </div>
  );
};

export default DesignJourney;