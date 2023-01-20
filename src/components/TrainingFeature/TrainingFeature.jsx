import React from "react";
import "./TrainingFeature.css";
import {useNavigate} from 'react-router-dom'

const TrainingFeature = React.memo(({ data }) => {
  const navigate = useNavigate();
  const { image, title, description, btn } = data;
  return (
    <div className="app__training-feature__container">
      <img src={image} alt={`${title}`} />
      <h1 className="headtext__roboto">{title}</h1>
      <p className="p__space-mono">{description}</p>
      <button className="custom__button" onClick={() => {navigate('/training'); window.scrollTo(0, 0)}}>{btn}</button>
    </div>
  );
})

export default TrainingFeature;
