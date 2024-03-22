import React from "react";
import "./CubertoDesign.css";
import gsap from "gsap";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const CubertoDesignListItem = ({ item }) => {
  const [isBackdropOpen, setIsBackdropOpen] = React.useState(false);
  const backdropRef = React.useRef(null);

  const handleMouseLeave = (e) => {
    gsap.killTweensOf(backdropRef.current);
    gsap.to(backdropRef.current, { height: "0", top: "50%", duration: 0.1 });
    setIsBackdropOpen(false);
  };

  const handleMouseEnter = (e) => {
    if (window.innerWidth < 500) return;
    gsap.to(backdropRef.current, {
      height: "100%",
      top: 0,
      duration: 0.4,
      ease: "power2.easeInOut",
    });
    setIsBackdropOpen(true);
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="cbl-item-wrap"
    >
      <div className="cbl-backdrop-wrap" ref={backdropRef}>
        {Array(15)
          .fill()
          .map((idx) => {
            return (
              <div key={idx} className="cbl-backdrop-span">
                <h2 className="cbl-backdrop-title">{item.title}</h2>
                <ArrowOutwardIcon fontSize={"large"} />
              </div>
            );
          })}

        {Array(15)
          .fill()
          .map((idx) => {
            return (
              <div key={idx} className="cbl-backdrop-span">
                <h2 className="cbl-backdrop-title">{item.title}</h2>
                <ArrowOutwardIcon fontSize={"large"} />
              </div>
            );
          })}
      </div>
      <h2>{item.title}</h2>
      <ArrowOutwardIcon fontSize={"large"} />
    </div>
  );
};

const CubertoList = ({ data }) => {
  console.log(data);
  return (
    <div className="cbl-wrap">
      {data.map((listItem, index) => {
        return <CubertoDesignListItem key={index} item={listItem} />;
      })}
    </div>
  );
};

export default CubertoList;
