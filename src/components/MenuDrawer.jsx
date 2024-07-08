import React from "react";
import styles from "./MenuDrawer.module.scss";
import { NavLink } from "react-router-dom";

function MenuDrawer() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    null
  );
}

export default MenuDrawer;
