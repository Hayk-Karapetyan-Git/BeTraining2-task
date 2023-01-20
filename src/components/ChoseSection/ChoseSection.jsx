import React from "react";
import "./ChoseSection.css";
import { lessonFeatures } from "../../constants/data";
import { LessonFeature } from "../../components";
import {useNavigate} from 'react-router-dom'

const ChoseSection = React.memo(() => {
  const navigate = useNavigate()
  return (
    <div className="app__chose-section__container flex__center lg__padding">
      <h2 className="headtext__roboto">
        Why you should <span>choose</span> our lessons?
      </h2>
      <div className="app__lesson-features__container flex__center">
        {lessonFeatures.map((item, index) => {
          return <LessonFeature key={`${item.title}__${index}`} data={item} />;
        })}
      </div>

      <button className="custom__button" onClick={() => {navigate('/training'); window.scrollTo(0, 0)}}>Read more</button>
    </div>
  );
})

export default ChoseSection;
