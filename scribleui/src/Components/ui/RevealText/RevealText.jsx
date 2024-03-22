import React, { useRef } from "react";
import "./RevealText.css";

import gsap from "gsap";

const RevealText = ({ children }) => {
  React.useEffect(() => {
    gsap.fromTo(
      ".cont",
      {
        y: "100%",
      },
      {
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.easeInOut",
      }
    );
  }, []);
  return (
    <div className="container">
      <div className="text-container">
        <div className="cont">{children[0]}</div>
      </div>
      <div className="text-container">
        <div className="cont">{children[1]}</div>
      </div>
    </div>
  );
};

export default RevealText;
