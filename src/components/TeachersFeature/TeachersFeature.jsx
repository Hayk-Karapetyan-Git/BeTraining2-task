import React from "react";
import "./TeachersFeature.css";
import { FaTwitter, FaFacebookF, FaSkype } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TeachersFeature = React.memo(({ data, style }) => {
  const navigate = useNavigate();
  const { profession, name, bgName } = data;
  const description =
    "Vivamus in diam turpis. In condimentum maximus tristique. Maecenas non laoreet odio. Fusce lobortis porttitor purus, vel vestibulum libero pharetra vel.";
  return (
    <div
      className={`app__teachers-feature_container ${
        style % 2 === 0 ? null : "reverse"
      }`}
    >
      <div className={`app__teachers-feature__image-container ${bgName} `}>
        {/* <img src={image} alt={name} /> */}
      </div>
      <div className="app__teachers-feature__text-container">
        <h3>{profession}</h3>
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="app__teachers-feature__text-container_social-links">
          <i
            onClick={() => {
              navigate("/teachers");
              window.scrollTo(0, 0);
            }}
          >
            <FaTwitter />
          </i>
          <i
            onClick={() => {
              navigate("/teachers");
              window.scrollTo(0, 0);
            }}
          >
            <FaFacebookF />
          </i>
          <i
            onClick={() => {
              navigate("/teachers");
              window.scrollTo(0, 0);
            }}
          >
            <FaSkype />
          </i>
        </div>
      </div>
    </div>
  );
});

export default TeachersFeature;
