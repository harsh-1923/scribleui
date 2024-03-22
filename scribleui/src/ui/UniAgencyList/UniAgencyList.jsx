import React from "react";
import "./UniAgencyList.css";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import gsap from "gsap";

const dummyListData = [
  {
    tag: "Bussiness",
    title: "WHAT IS AUGMENTED REALITY: EVERYTHING YOU NEED TO KNOW",
    readTime: "13 min read",
    date: "Feb 28, 2023",
    link: "",
  },
  {
    tag: "Bussiness",
    title: "WHAT IS AUGMENTED REALITY: EVERYTHING YOU NEED TO KNOW",
    readTime: "13 min read",
    date: "Feb 28, 2023",
    link: "",
  },
  {
    tag: "Bussiness",
    title: "WHAT IS AUGMENTED REALITY: EVERYTHING YOU NEED TO KNOW",
    readTime: "13 min read",
    date: "Feb 28, 2023",
    link: "",
  },
];

const ListItem = ({ item }) => {
  const bgRef = React.useRef(null);
  const handleHover = () => {
    gsap.to(bgRef.current, {
      scale: 1000,
      duration: 6,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.killTweensOf(bgRef.current);
    gsap.to(bgRef.current, {
      scale: 1,
      duration: 1,
      ease: "power2.out",
    });
  };
  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      className="uniagency-list-item-wrap"
    >
      <div className="uni-item-tag">{item.tag}</div>
      <div className="uni-item-title">{item.title}</div>
      <div className="uni-item-details">
        <p>{item.readTime}</p>
        <p>{item.date}</p>
      </div>
      <div className="uni-item-link-arrow">
        <ArrowOutwardIcon />
        <div ref={bgRef} className="arrow-background"></div>
      </div>
    </div>
  );
};
const UniAgencyList = () => {
  return (
    <div className="uniagency-list-wrap">
      {dummyListData &&
        dummyListData.map((listItem, index) => {
          return <ListItem key={index} item={listItem} />;
        })}
    </div>
  );
};

export default UniAgencyList;
