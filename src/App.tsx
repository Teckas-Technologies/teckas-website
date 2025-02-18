import React, { useState } from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";


import Home from "./Pages/Home/Home";
import Button from "./components/Button";
import OurServiceCard from "./components/OurServiceCard";
import Grid from "./components/Grid";
import Footer from "./Pages/Footer";
// import Sec from "./Pages/Sec/Sec";

const App: React.FC = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Footer />} />
      </Routes>
    </Router>

   
    //   <div>
    // <Grid/>
    //    <Button />
    //     <OurServiceCard /> 
    //     {/* <Sec/> */}
    //    <Footer /> 
    //   </div>
      
  );
};

export default App;

