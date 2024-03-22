import React from "react";
import "./PixelImage.css";

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const PixelImage = ({ data }) => {
  return (
    <div className="pixel-img-wrap">
      {data.map((row, rowIndex) => {
        return (
          <div key={rowIndex} className="row">
            {row.map((pixel, pixelIndex) => {
              const randomDelay = getRandomInt(0, 5000); // Random delay between 0ms and 1000ms
              const randomDuration = getRandomInt(2000, 3000); // Random duration between 500ms and 2000ms

              return (
                <div
                  data-state={`${pixel === 0 ? "hide" : "show"}`}
                  key={pixelIndex}
                  className="pixel"
                  style={{
                    animationDelay: `${randomDelay}ms`,
                    animationDuration: `${randomDuration}ms`,
                  }}
                ></div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default PixelImage;
