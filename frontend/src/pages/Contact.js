import React from 'react';
import './ContactUs.css'; // Or use module CSS if you prefer
import contactimg from '../assets/contact.jpg';

const ContactUs = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">CONTACT <span>US</span></h2>
      <div className="contact-container">
        <div className="contact-image">
          <img src={contactimg} alt="Doctor with patient" />
        </div>
        <div className="contact-info">
          <div className="office-details">
            <h3>OUR OFFICE</h3>
            <p>00000 Willms Station<br />Suite 000, Washington, USA</p>
            <p>Tel: (000) 000-0000</p>
            <p>Email: greatstackdev@gmail.com</p>
          </div>
          <div className="career-details">
            <h3>CAREERS AT PRESCRIPTO</h3>
            <p>Learn more about our teams and job openings.</p>
            <button className="explore-btn">Explore Jobs</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

