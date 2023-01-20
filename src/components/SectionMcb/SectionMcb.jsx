import React from "react";
import "./SectionMcb.css";
import { wrapBg } from "../../constants/images";
import {useNavigate} from 'react-router-dom'

const SectionMcb = React.memo(() => {
  const navigate = useNavigate()
  return (
    <div className="app__section-mcb_container section__padding">
        <div className="app__section-mcb__image-container">
          <img src={wrapBg} alt="app wrapBg" />
        </div>
        <div className="app__section-mcb__text-container">
          <h2 className="headtext__roboto">Special training for a school</h2>
          <p className="p__space-mono">
            Curabitur sed iaculis dolor, non congue ligula. Maecenas imperdiet
            ante eget hendrerit posuere. Nunc urna libero, congue porta nibh a,
            semper feugiat sem.
          </p>
          <button className="custom__button" onClick={() => {navigate('/about'); window.scrollTo(0, 0)}}>Learn More</button>
        </div>
    </div>
  );
})

export default SectionMcb;
