import React from "react";
import {
  Header,
  TrainingFeature,
  SectionMcb,
  ChoseSection,
  SubscribeSection,
} from "../../components";
import { homeData, trainingFeatures } from "../../constants/data";
import "./Home.css";
import {useNavigate} from 'react-router-dom';

const Home = React.memo(() => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="app__home-heading section__padding">
        <Header data={homeData} />
        <div>
        <button className="custom__button" onClick={() => {navigate('/about'); window.scrollTo(0, 0)}}>Read more</button>
        <button className="custom__button app__home-button_primary" onClick={() => {navigate('/training'); window.scrollTo(0, 0)}} >
          Course Details
        </button>
        </div>
      </div>
      <div className="app__home-content lg__padding">
        <TrainingFeature data={trainingFeatures.html} />
        <TrainingFeature data={trainingFeatures.sql} />
      </div>
      <SectionMcb />
      <ChoseSection />
      <SubscribeSection />
    </div>
  );
})

export default Home;
