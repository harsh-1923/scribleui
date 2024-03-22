import React from "react";
import "./DesktopWarning.css";
import Alert from "@mui/material/Alert";

const DesktopWarning = () => {
  return (
    <Alert className="desktop-only-warning" severity="warning" variant="filled">
      This component includes interactions that are best experienced on
      desktops.
    </Alert>
  );
};

export default DesktopWarning;
