import "./WorkCardStyles.css";
import React from "react";
import { NavLink } from "react-router-dom";

const workCard = (props) => {
  return (
    <div className="project-card">
      <div>
        <img src={props.imgsrc} alt="image" />
      </div>

      {/* <h2 className="project-title">{props.title}</h2> */}
      <div className="pro-details">
        <h2 className="project-title">{props.title}</h2>
        <p>{props.text}</p>
        <div className="pro-btn">
          <a href={props.view} className="btn">
            View
          </a>
          <a href="url.com" className="btn">
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default workCard;
