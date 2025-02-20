import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./Pages/Home/Home";
// import Footer from "./Pages/Footer/Footer";

const App: React.FC = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/*" element={<Footer />} /> */}
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

