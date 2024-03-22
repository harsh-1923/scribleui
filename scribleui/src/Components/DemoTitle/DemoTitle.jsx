import React from "react";
import "./DemoTitle.css";

const DemoTitle = ({ title, description, date }) => {
  return (
    <div className="demo-title">
      <div className="info-wrap">
        <h1 aria-label={title} className="title">
          {title}
        </h1>
        <small aria-label={date}>{date}</small>
      </div>
      <p className="description">{description}</p>
    </div>
  );
};

export default DemoTitle;
