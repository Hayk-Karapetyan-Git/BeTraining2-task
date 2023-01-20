import React from "react";
import "./ContactBox.css";
import {FaPhone, FaEnvelope} from 'react-icons/fa';

const ContactBox = React.memo(() => {
  return (
    <div className="app__component_contact-box__container app__component__subscribe-card__container">
      <h2>Contact box</h2>
      <p className="p__space-mono">Level 13, 2 Elizabeth St, Melbourne, Victoria 3000, Australia</p>
      <p className="p__space-mono">Help Desk 24h/7</p>
      <p className="p__space-mono"><FaPhone fontSize={27} color='#ed5f43' />  +61 (0) 383 766 284</p>
      <p className="p__space-mono"><FaEnvelope fontSize={27} color='#ed5f43' /> noreply@envato.com</p>
    </div>
  );
})

export default ContactBox;
