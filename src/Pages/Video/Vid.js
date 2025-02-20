import React from "react";
import "./Vid.scss";
import Video from "../../component/Video.tsx";
import v1 from "../../img/Video1.png";
import v2 from "../../img/Video2.png";
import v3 from "../../img/Video3.png";
import v4 from "../../img/Video4.jpg";
import v5 from "../../img/Video5.jpg";
const Vid = () => {
  // Carousel items with their unique content
  const items = [
    {
      image: v1,
      logo: "/path-to-company-logo.png",
      name: "John Doe",
      position: "CEO of Trustpay",
      feedback: "They delivered in best!",
      driveLink: "https://drive.google.com/file/d/your-drive-id/view",
    },
    {
      image: v2,
      logo: "/path-to-company-logo.png",
      name: "Jane Smith",
      position: "CTO of Finserv",
      feedback: "Amazing experience working",
      driveLink: "https://drive.google.com/file/d/your-drive-id/view",
    },
    {
      image: v3,
      logo: "/path-to-company-logo.png",
      name: "Alice Johnson",
      position: "Product Manager at InnovateTech",
      feedback: "Truly innovative solutions",
      driveLink: "https://drive.google.com/file/d/your-drive-id/view",
    },
    {
      image: v4,
      logo: "/path-to-company-logo.png",
      name: "Bob Brown",
      position: "Founder of StartX",
      feedback: "Highly recommend their services!",
      driveLink: "https://drive.google.com/file/d/your-drive-id/view",
    },
    {
      image: v5,
      logo: "/path-to-company-logo.png",
      name: "Eve Green",
      position: "Designer at PixelCraft",
      feedback: "Their designs blew us away!",
      driveLink: "https://drive.google.com/file/d/your-drive-id/view",
    },
  ];

  // Duplicate items for seamless looping
  const carouselItems = [...items, ...items, ...items];

  return (
    <>
      {/* Wrapping everything in a React fragment */}
      <div className='up'>
      <div className="top">
        <h1>Client Testinomial</h1>
        <h2>What our client <br />say about us!</h2>
        <p>Here directly from the startups and Buisness panterned with! </p>
      </div>
      </div>
      <div className="carousel">
        <div className="carousel-track">
          {carouselItems.map((item, index) => (
            <div className="carousel-item" key={index}>
              <Video
                image={item.image}
                logo={item.logo}
                name={item.name}
                position={item.position}
                feedback={item.feedback}
                driveLink={item.driveLink}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Vid;
