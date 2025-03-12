import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./Pages/Home/Home.tsx";
import BlogPage from "./Pages/BlogPage/BlogPage.tsx";
import CaseStudy from "./Pages/CaseStudy/CaseStudy.tsx";
import ForumPage from "./Pages/ForumPage/ForumPage.tsx";
import ScrollToTop from "./ScrollToTop.tsx";
import SingleBlogPage from "./Pages/SingleBlogPage/SingleBlogPage.tsx";
// import Footer from "./Pages/Footer/Footer";

const App: React.FC = () => {
  return (

    <Router>
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogs/:blogid" element={<SingleBlogPage />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/case-study" element={<CaseStudy />} />
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

