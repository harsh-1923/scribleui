import React from "react";
import DemoTitle from "../../../Components/DemoTitle/DemoTitle";
import KemariWork from "../../../ui/KemariWork/KemariWork.jsx";

const KemariWorkDemo = () => {
  return (
    <div>
      <DemoTitle
        title={"Kemari Work"}
        date={"22nd March, 2024 | Banglore"}
        description={
          "Ideal for work, feature or product showcase. \n Kemari uses this as a list to showcase their work with images that appear on hover in the desktop view."
        }
      />
      <div className="demo-area">
        <KemariWork />
      </div>
    </div>
  );
};

export default KemariWorkDemo;
