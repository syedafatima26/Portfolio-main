import React from 'react';
import Portfolios from "../components/Portfolio.js";
import Footer from "../components/Footer";
import "./Home.css";
const Portfolio = () => {
  return (
   <div>
    <div id="portfolio">
        <div className="project-cards">
    <Portfolios/>
    </div> </div>
    <Footer/>
   </div> 
  );
}

export default Portfolio;
