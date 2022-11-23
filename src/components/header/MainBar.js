import React, { useEffect, useState } from "react";
import TopBar from "./TopBar";
import logo from "../../assets/Icons/logoSmall.svg";
import { Link } from "react-router-dom";
import "./mainBar.css";
import notficationIcon from "../../assets/Icons/notificationIcon.svg";
import wishlistIcon from "../../assets/Icons/wishlistIcon.svg";
import cartIcon from "../../assets/Icons/cartIcon.svg";
import searchIcon from "../../assets/Icons/searchDarkIcon.svg";
import imageIcon from "../../assets/Icons/pictureIcon.svg";
// Dropdown
import artIcon from "../../assets/Icons/artIcon.svg";
import photoIcon from "../../assets/Icons/photosIcon.svg";
import footageIcon from "../../assets/Icons/videoIcon.svg";
import musicIcon from "../../assets/Icons/musicIcon.svg";
import templatesIcon from "../../assets/Icons/templatesIcon.svg";
import productsIcon from "../../assets/Icons/productsIcon.svg";

const MainBar = () => {
  const [showMob, setShowMob] = useState();

  useEffect(() => {
    changeScreen();
  }, []);
  const changeScreen = () => {
    if (window.innerWidth <= 780) {
      setShowMob(true);
    } else {
      setShowMob(false);
    }
  };

  return (
    <>
      <TopBar />
      <div className="container-fluid mainBar bg-light">
        <nav className="navbar navbar-expand-lg p-0">
          <div className="container-fluid p-0">
            <Link to="/">
              <img style={{ width: "100%" }} src={logo} alt="" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link active p-0">Art</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link p-0">products</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link p-0">blogs</Link>
                </li>
                <div className="rightMenu">
                  <li className="nav-item">
                    <Link to="/" className="nav-link p-0">Plans & pricing</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link p-0">join</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link p-0">sign in</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link p-0">
                      <img src={notficationIcon} alt="" />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link p-0">
                      <img src={wishlistIcon} alt="" />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link p-0">
                      <img src={cartIcon} alt="" />
                    </Link>
                  </li>
                </div>
              </ul>
            </div>
            <button className="sellOnArtBtn">Sell on Artnstock</button>
          </div>
        </nav>
        <div className="searchDiv">
          <input
            placeholder="Find something great"
            type="text"
            className="searchBar"
          />
          <div className="rightSearch">
            {showMob ? (
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src={artIcon} alt="" />
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <img src={artIcon} alt="" />
                    Art
                  </li>
                  <li>
                    <img src={photoIcon} alt="" />
                    Photos
                  </li>
                  <li>
                    <img src={footageIcon} alt="" />
                    Footage
                  </li>
                  <li>
                    <img src={musicIcon} alt="" />
                    Music
                  </li>
                  <li>
                    <img src={templatesIcon} alt="" />
                    Templates
                  </li>
                  <li>
                    <img src={productsIcon} alt="" />
                    Products
                  </li>
                </ul>
              </div>
            ) : (
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  All Items
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <img src={artIcon} alt="" />
                    Art
                  </li>
                  <li>
                    <img src={photoIcon} alt="" />
                    Photos
                  </li>
                  <li>
                    <img src={footageIcon} alt="" />
                    Footage
                  </li>
                  <li>
                    <img src={musicIcon} alt="" />
                    Music
                  </li>
                  <li>
                    <img src={templatesIcon} alt="" />
                    Templates
                  </li>
                  <li>
                    <img src={productsIcon} alt="" />
                    Products
                  </li>
                </ul>
              </div>
            )}

            <button className="searchByImage">
              {" "}
              <img src={imageIcon} alt="" />
              Search by image
            </button>
            <button className="searchBtn">
              {" "}
              <img src={searchIcon} alt="" />
              <span className="search">Search</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBar;
