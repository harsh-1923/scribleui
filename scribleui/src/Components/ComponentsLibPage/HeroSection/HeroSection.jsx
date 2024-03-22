import React from "react";
import gsap from "gsap";
import "./HeroSection.css";
import RevealText from "../../ui/RevealText/RevealText";

const HeroSection = () => {
  return (
    <div className="comp-hero-wrap">
      <RevealText>
        <h1 className="header-main">New components</h1>
        <h1 className="header-main">every week</h1>
      </RevealText>
    </div>
  );
};

export default HeroSection;
