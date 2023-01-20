import React from "react";
import "./LessonFeature.css";

const LessonFeature = React.memo(({ data }) => {
  const { title, image, description } = data;
  return (
    <div className="app__lesson-features__item flex__center">
      <div className="app__lesson-features__item-image">
        <img src={image} alt="title" />
      </div>
      <h2 className="headtext__roboto">{title}</h2>
      <p className="p__space-mono">{description}</p>
    </div>
  );
})

export default LessonFeature;
