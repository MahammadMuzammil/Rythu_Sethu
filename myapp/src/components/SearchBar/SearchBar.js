import React from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";
import leftImage from "../../assets/left-image.jpg";
import rightImage from "../../assets/right-image.jpg";

function SearchBar() {
  return (
    <div className="search-section">
      <div className="image-left">
        <img src={leftImage} alt="Farmers" />
      </div>
      <div className="center-content">
        <h1 className="brand-name">RythuSetu</h1>
        <p className="tagline">Cultivating Connections, Harvesting Success</p>
        <div className="search-bar">
          <input type="text" placeholder="Find something..." />
          <button className="search-button">
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="image-right">
        <img src={rightImage} alt="Users" />
      </div>
    </div>
  );
}

export default SearchBar;
