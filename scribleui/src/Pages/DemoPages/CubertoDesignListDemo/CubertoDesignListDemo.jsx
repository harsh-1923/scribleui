import React from "react";
import DemoTitle from "../../../Components/DemoTitle/DemoTitle";
import "./CubertoDesignList.css";
import CubertoList from "../../../ui/CubertoList/CubertoList";
import DesktopWarning from "../../../Components/DesktopWarning/DesktopWarning";

const data = [
  { title: "Instagram", link: "www.google.com" },
  { title: "LinkedIn", link: "www.google.com" },
  { title: "Dribbble", link: "www.google.com" },
  { title: "GitHub", link: "www.google.com" },
  { title: "Youtube", link: "www.google.com" },
  { title: "Behance", link: "www.google.com" },
  { title: "Twitter", link: "www.google.com" },
];

const CubertoDesignListDemo = () => {
  return (
    <div className="cdl-wrap">
      <DemoTitle
        title={"Cuberto Design List"}
        date={"23rd March, 2024 | Banglore"}
        description={
          "Ideal for work, feature or product showcase. \n Kemari uses this as a list to showcase their work with images that appear on hover in the desktop view."
        }
      />
      <DesktopWarning />
      <div className="demo-area">
        <CubertoList data={data} />
      </div>
    </div>
  );
};

export default CubertoDesignListDemo;
