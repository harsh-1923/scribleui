import React from "react";
import "./Navbar.css";
import CTAButton from "../ui/CTAButton/CTAButton";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav aria-label="Navbar" className="navbar">
      <div className="nav-logo">
        <h3 className="logo-text">ScribleUI</h3>
      </div>
      <CTAButton onClick={() => navigate("/")} text={"Components"} />
    </nav>
  );
};

export default Navbar;
