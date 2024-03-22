import React from "react";
import "./CTAButton.css";

const CTAButton = ({ text, onClick }) => {
  return (
    <button aria-label={text} className="cta-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default CTAButton;
