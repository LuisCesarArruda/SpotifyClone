import React from "react";
import logoSpotify from "../../assets/logo/spotify-logo.png";

import "./style.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logoSpotify} alt="logoSpotify"/>
      </Link>
      <Link className="header-link" to="/">
        <h1>spotify</h1>
      </Link>
    </div>
  );
};
