import React from "react";
import gsap from "gsap";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./KemariWork.css";

const data = [
  {
    tag: "Next-generation broadcasting software",
    description:
      "Pioneering in marketing, Marc offers beer wisdom mixed with humor through Google Home or Alexa, making Grolsch a leader in innovative, engaging digital experiences.",
    title: "Grolsch",
    image: "https://source.unsplash.com/Kcna6XWDY7w",
    linkPath: "/",
  },
  {
    tag: "Next-generation broadcasting software",
    description:
      "Pioneering in marketing, Marc offers beer wisdom mixed with humor through Google Home or Alexa, making Grolsch a leader in innovative, engaging digital experiences.",
    title: "Grolsch",
    image: "https://source.unsplash.com/Kcna6XWDY7w",
    linkPath: "/",
  },
  {
    tag: "Next-generation broadcasting software",
    description:
      "Pioneering in marketing, Marc offers beer wisdom mixed with humor through Google Home or Alexa, making Grolsch a leader in innovative, engaging digital experiences.",
    title: "Grolsch",
    image: "https://source.unsplash.com/Kcna6XWDY7w",
    linkPath: "/",
  },
  {
    tag: "Next-generation broadcasting software",
    description:
      "Pioneering in marketing, Marc offers beer wisdom mixed with humor through Google Home or Alexa, making Grolsch a leader in innovative, engaging digital experiences.",
    title: "Grolsch",
    image: "https://source.unsplash.com/Kcna6XWDY7w",
    linkPath: "/",
  },
  {
    tag: "Next-generation broadcasting software",
    description:
      "Pioneering in marketing, Marc offers beer wisdom mixed with humor through Google Home or Alexa, making Grolsch a leader in innovative, engaging digital experiences.",
    title: "Grolsch",
    image: "https://source.unsplash.com/Kcna6XWDY7w",
    linkPath: "/",
  },
  {
    tag: "Next-generation broadcasting software",
    description:
      "Pioneering in marketing, Marc offers beer wisdom mixed with humor through Google Home or Alexa, making Grolsch a leader in innovative, engaging digital experiences.",
    title: "Grolsch",
    image: "https://source.unsplash.com/Kcna6XWDY7w",
    linkPath: "/",
  },
];

const KemariListItem = ({ item }) => {
  const itemRef = React.useRef(null);
  const imgRef = React.useRef(null);
  const handleMouseEnter = (e) => {
    if (window.innerWidth < 768) return;
    if (itemRef == null) return;
    gsap.to(itemRef.current, {
      height: "70dvh",
      duration: 1,
      delay: 1,
      ease: "power1.out",
    });

    gsap.to(imgRef.current, {
      opacity: 1,
      duration: 1,
      delay: 1,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = (e) => {
    if (window.innerWidth < 768) return;
    if (itemRef == null) return;
    gsap.killTweensOf(itemRef.current);
    gsap.killTweensOf(imgRef.current);
    gsap.to(itemRef.current, {
      height: "40dvh",
      duration: 1,
      ease: "power2.out",
    });

    gsap.to(imgRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  };
  return (
    <div
      onMouseEnter={(e) => handleMouseEnter(e)}
      onMouseLeave={(e) => handleMouseLeave(e)}
      ref={itemRef}
      className="kemari-work-item"
    >
      <div className="kwi-title-info-mobile mobile-tablet">
        <img src={item.image} className="kwi-img" />
        <h1 className="kwi-title">{item.title}</h1>
      </div>
      <div className="kemari-item-info">
        <h2 className="kwi-tag">{item.tag}</h2>
        <h2 className="kwi-description">{item.description}</h2>
      </div>
      <img ref={imgRef} src={item.image} className="kwi-img desktop tablet" />
      <div className="kwi-title-info">
        <h1 className="kwi-title desktop">{item.title}</h1>
        <button className="kwi-button">
          <div className="kwi-button-left">See our case</div>
          <div className="kwi-button-right">
            <ArrowForwardIcon />
          </div>
        </button>
      </div>
    </div>
  );
};

const KemariWork = () => {
  return (
    <div className="kemari-work-wrap">
      {data &&
        data.map((item, index) => {
          return <KemariListItem key={index} item={item} />;
        })}
    </div>
  );
};

export default KemariWork;
