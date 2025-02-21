import React from "react";
import "./Sec.scss";
import Button from "../../components/Button";

import client1 from "../../assets/clients/1.png"
import client2 from "../../assets/clients/2.png"
import client3 from "../../assets/clients/3.png"

// import Call from "../../img/Call.png";
// import Mess from "../../img/Mess.png";
// import World from "../../img/World.png";
// import port from "../../img/port.png";
// import Man1 from "../../img/Man1.png";
// import Man2 from "../../img/Man2.png";
// import Man3 from "../../img/Man3.png";
import NavBar from "../../components/NavBar/NavBar"

const Sec: React.FC = () => {
  // const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container">

      <NavBar/>

      <main className="content">
        <h1 className="headline">We help Startups bring</h1>
        <h1 className="headline">their Ideas to Life</h1>
        <p className="subheadline">
          At Teckas Technologies, we turn your ideas into reality with smart solutions in<br></br>
          Blockchain, AI, Web, and Mobile apps. Let's make something awesome together!
        </p>

        <Button className="chat-button" text="Got an Idea? Let's Chat!" />

        <div className="bottom">
          <div className="clients">
            <img src={client1} alt="Client 1" className="client-img" />
            <img src={client2} alt="Client 2" className="client-img overlap" />
            <img src={client3} alt="Client 3" className="client-img overlap" />
          </div>
          <div className="bottom-label">
            Trusted by 15 amazing clients and counting. Read Testimonials
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sec;
