import React from "react";
import { Helmet } from 'react-helmet';
import "./Home.css";
import hero from "../components/images/hero.mp4"
import ContactForm from "../components/ContactForm.js";
import Portfolio from "../components/Portfolio.js";
import Footer from "../components/Footer";
const Home = () => {
  
  return (
    <>
      <Helmet>
        <title>Syeda Fatima Mansoor</title>
        <meta
          name="Syeda Fatima Mansoor"
          content="I am Syeda Fatima Mansoor, a software engineering student with a strong background in Front-End development. 
          My passion for technology and problem-solving has driven me to acquire expertise in various areas of software development. 
          My skills span across web and mobile development, including expertise in Java, Spring Boot,Graphic Designer and Figma for UI/UX design. 
          I am passionate about creating intuitive user experiences and building reliable applications. 
          With a strong foundation in both front-end and back-end technologies, I aim to deliver high-quality solutions. 
          I am a quick learner, adaptable to new technologies, and thrive in collaborative team environments."
        />
      </Helmet>
    <div>
   
      <div id="home">
      <video autoPlay muted loop id="video-background">
          <source src={hero} type="video/mp4" />
        </video>
        <div id="portfolio">
        <div className="project-cards">
      <Portfolio/>
      </div>
        </div>
        <div id="contact">
          <div className="contact">
            <ContactForm />
          </div>
        </div>
        <div >
          <Footer/>
          </div>
          
        </div>
      </div>
    
    </>
  );
};

export default Home;
