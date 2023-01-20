import React from "react";
import "./Training.css";
import { Header, SectionMcb, SubscribeSection, TrainingFeature } from "../../components";
import {trainingData, trainingFeatures} from '../../constants/data'

const Training = React.memo(() => {
  return (
    <div>
      <div className="app__about-us__heading section__padding">
        <Header data={trainingData} />
      </div>
      <div className="section__padding app__training-section_features-container">
        <TrainingFeature data={trainingFeatures.html} key={`${trainingFeatures.html.title}`}/>
        <TrainingFeature data={trainingFeatures.sql} key={`${trainingFeatures.sql.title}`}/>
        <TrainingFeature data={trainingFeatures.css} key={`${trainingFeatures.css.title}`}/>
        <TrainingFeature data={trainingFeatures.js} key={`${trainingFeatures.js.title}`}/>
      </div>
      <SectionMcb/>
      <div className="space"></div>
      <SubscribeSection />
    </div>
  );
})

export default Training;
