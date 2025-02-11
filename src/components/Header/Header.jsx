import React from "react";
import logoSpotify from "../../assets/logo/spotify-logo.png";

import "./style.css";

export const Header = () => {
  return (
    <div className="header">
      <img src={logoSpotify} alt="logoSpotify"/>
      <a className="header-link" href="/">
        <h1>spotify</h1>
      </a>
    </div>
  );
};
