import React from 'react';
import project3 from "./images/project3.png";
import project4 from "./images/project4.png";
import Zamin from "./images/Zamin.mp4";
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="project-card">
        <div className="video-container">
          <video autoPlay muted loop id="video-background-zamin">
            <source src={Zamin} type="video/mp4" />
          </video>
          <div className="play-button" id="play-button-zamin">
            <i className="fas fa-play"></i>
          </div>
        </div>
        <h3>Zamin Women Safety App</h3>
        <p>
          I'm thrilled to showcase my recent semester project of the Android app Zamin, a women safety app that I've developed. Zamin goes beyond emergency situations and serves as a proactive safety measure. With just one click, users can establish immediate communication, preventing mistreatment and providing assistance.
        </p>
      </div>
      <div className="project-card">
        <img src={project3} alt="Project 3" />
        <h3>Mehman Web Prototype</h3>
        <p>
          Introducing Mehmaan, an updated virtual hotel management system. Streamlined bookings, improved communication, and advanced features like Virtual Room Tours and a Refer & Earn program enhance the user experience. Mehmaan aims to regain business success by providing a reliable, user-friendly platform that maximizes efficiency and customer satisfaction.
        </p>
      </div>
      <div className="project-card">
        <img src={project4} alt="Project 3" />
        <h3>Mehman Mobile App Prototype</h3>
        <p>
          Introducing Mehmaan, an updated virtual hotel management system. Streamlined bookings, improved communication, and advanced features like Virtual Room Tours and a Refer & Earn program enhance the user experience. Mehmaan aims to regain business success by providing a reliable, user-friendly platform that maximizes efficiency and customer satisfaction.
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
