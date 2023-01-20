import React from "react";
import { ContactBox, OpeningHours, InfoBox } from "../index";
import "./SubscribeSection.css";
import {useNavigate} from 'react-router-dom'

const SubscribeSection = React.memo(() => {
  const navigate = useNavigate()

  return (
    <div className="app__subscribe-section__container">
      <div className=" app__subscribe-section__cards-container section__padding">
        <ContactBox />
        <OpeningHours />
        <InfoBox />
      </div>
      <div className="app__subscribe-section__form-container section__padding">
        <h2 className="headtext__roboto">Subscribe to</h2>
        <p>our newsletter</p>
        <form className="app__subscribe-section__form" action="tomail">
          <input type="email" placeholder="Your e-mail" />
          <button className="custom__button" type="button" onClick={() => {navigate('/'); window.scrollTo(0, 0)}}>
            Sign up
          </button>
        </form>
      </div>
      <div className="line"></div>
      <div className="app__subscribe-section_footer">
        <p>
          © 2023 Betheme by
          <a href="https://muffingroup.com" target="blank">
            Muffin group
          </a>
          | All Rights Reserved | Powered by
          <a href="https://wordpress.org" target="blank">
            WordPress
          </a>
        </p>
      </div>
    </div>
  );
})

export default SubscribeSection;
