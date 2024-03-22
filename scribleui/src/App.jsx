import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

//pages
import HomePage from "./Pages/HomePage/HomePage";
import Components from "./Pages/Components/Components";
import Navbar from "./Components/Navbar/Navbar";
import UniAgencyList from "./ui/UniAgencyList/UniAgencyList.jsx";
import KemariWorkDemo from "./Pages/DemoPages/KemariWorkDemo/KemariWorkDemo.jsx";
import PixelImage from "./ui/PixelImage/PixelImage.jsx";
import PixelImageDemo from "./Pages/DemoPages/PixelImageDemo/PixelImageDemo.jsx";
import CubertoDesignListDemo from "./Pages/DemoPages/CubertoDesignListDemo/CubertoDesignListDemo.jsx";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        {/* <Route path={"/"} element={<HomePage />} /> */}
        <Route path={"/"} element={<Components />} />
        <Route
          path={"/components/uniagency-list"}
          element={<UniAgencyList />}
        />
        <Route path={"/components/kemari-work"} element={<KemariWorkDemo />} />
        <Route path={"/components/pixel-image"} element={<PixelImageDemo />} />
        <Route
          path={"/components/cuberto-design-list"}
          element={<CubertoDesignListDemo />}
        />
      </Routes>
    </div>
  );
};

export default App;
