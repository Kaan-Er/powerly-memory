import React from "react";
import iconGithub from "../assets/icons/github.png";
import iconLinkedin from "../assets/icons/linkedin.png";

const Navbar = () => {
  return (
    <div className="navbar-section">
      <div className="title">
        <p className="title-text">Powerly Memory</p>
        <div className="icons">
          <a href="https://github.com/Kaan-Er" target="_blank">
            <img src={iconGithub} alt="" width="30" />
          </a>
          <a href="https://www.linkedin.com/in/kaan--er/" target="_blank">
            <img src={iconLinkedin} alt="" width="30" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
