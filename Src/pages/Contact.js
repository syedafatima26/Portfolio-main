import React from 'react'
import ContactForm from '../components/ContactForm'
import "./Home.css";
import Footer from "../components/Footer";
const Contact = () => {
  return (
    <div>
        <div id="contact">
          <div className="contact">
      <ContactForm/>
      </div></div>
      <Footer/>
    </div>
  )
}

export default Contact
