import React from "react";
import "./Contact.css";
import { Header, LessonFeature, SubscribeSection } from "../../components";
import { contactData, contactFeatures } from "../../constants/data";
import {useNavigate} from 'react-router-dom'

const Contact = React.memo(() => {
  const navigate = useNavigate()
  return (
    <div className="app__contact_container">
      <div className="app__about-us__heading app__contact_container__heading section__padding">
        <Header data={contactData} />
      </div>
      <div className="app__lesson-features__container app__contact-features_container lg__padding flex__center">
        {contactFeatures.map((item, index) => {
          return <LessonFeature key={`${item.title}__${index}`} data={item} />;
        })}
      </div>
      <div className="app__contact_map-container">
        <iframe
          title="Evento location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.3327928650565!2d144.96011341514827!3d-37.805673279753755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sru!2s!4v1674237951298!5m2!1sru!2s"
          width="100%"
          height="100%"
          style={{ border: "0px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <form action="tomail" className="app__contact-form lg__padding">
        <h2 className="headtext__roboto">Feel free to contact <br/> if you have any questions</h2>
        <div className="app__contact-form_name">
            <input type="text" placeholder="Your name"/>
            <input type="email" placeholder="Your e-mail"/>
        </div>
        <input type="text" placeholder="Subject"/>
        <textarea name="message" id="5" cols="30" rows="10" placeholder="Message"></textarea>
        <button className="custom__button" onClick={() => {navigate('/'); window.scrollTo(0, 0)}}>Send a message</button>
      </form>
      <SubscribeSection/>
    </div>
  );
})

export default Contact;
