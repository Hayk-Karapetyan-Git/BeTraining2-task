import React from "react";
import "./OpeningHours.css";

const OpeningHours = React.memo(() => {
  return (
    <div className="app__component_opening-hours__container app__component__subscribe-card__container">
      <h2>Opening hours</h2>
      <p className="p__space-mono">Lorem ipsum dolor sit amet enimullamcorper pellen tesque:</p>
      <h6 className="p__space-mono">Monday - Friday</h6>
      <p className="p__space-mono">  06:00 AM - 10:00 PM</p>
      <h6 className="p__space-mono">Saturday - Sunday</h6>
      <p className="p__space-mono"> 08:00 AM - 08:00 PM</p>
    </div>
  );
});

export default OpeningHours;
