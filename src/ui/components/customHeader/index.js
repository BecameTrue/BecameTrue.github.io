import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

import useScrolledUp from "../useScrolledUp";
import LogoImageSource from "../../../assets/logo.png";
import SearchImageSource from "../../../assets/search-button.png";
import "./index.css";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const CustomHeader = () => {
  const scollChecker = useScrolledUp();
  const query = useQuery();
  const history = useHistory();
  const [showHeader, setShowHeader] = useState("false");
  const [searchInput, setSearchInput] = useState("");

  const search = () => {
    if (searchInput !== "") {
      query.set("search", searchInput);
      history.push("/?" + query.toString());
    } else history.push("/");
  };

  const onEnter = event => {
    if (event.key === "Enter") search();
  };

  useEffect(() => {
    setShowHeader(scollChecker.scrolledToUp);
  }, [scollChecker.scrolledToUp]);

  return (
    <div
      className="header-wrapper"
      style={showHeader ? { top: "0" } : { top: "-56px" }}
    >
      <img
        className="header-logo"
        src={LogoImageSource}
        alt="logo"
        onClick={() => history.push("/")}
      />
      <div className="header-search-wrapper">
        <div className="header-search-container">
          <input
            type="text"
            className="header-search-input"
            placeholder="Search.."
            value={searchInput}
            onChange={event => setSearchInput(event.target.value)}
            onKeyDown={event => onEnter(event)}
          />
          <img
            className="header-search-button"
            src={SearchImageSource}
            alt="search button"
            onClick={() => search()}
          />
        </div>
      </div>
      {/* <HeaderEditorButton onClick={() => console.log("editor")} /> */}
    </div>
  );
};

const HeaderEditorButton = ({ onClick }) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 56.000000 57.000000"
      preserveAspectRatio="xMidYMid meet"
      className="header-editor-button"
      onClick={onClick}
    >
      <g
        transform="translate(0.000000,57.000000) scale(0.100000,-0.100000)"
        stroke="none"
      >
        <path
          d="M0 285 l0 -285 280 0 280 0 0 190 c0 162 -2 190 -15 190 -13 0 -15
-26 -15 -175 l0 -175 -250 0 -250 0 0 255 0 255 175 0 c149 0 175 2 175 15 0
13 -28 15 -190 15 l-190 0 0 -285z"
        />
        <path
          d="M362 426 l-137 -135 30 -31 29 -31 138 138 c145 144 150 155 97 184
-19 10 -35 -3 -157 -125z"
        />
        <path
          d="M185 220 c-14 -29 -25 -53 -23 -55 2 -2 27 9 56 24 l53 27 -30 28
-29 28 -27 -52z"
        />
      </g>
    </svg>
  );
};

export default CustomHeader;
