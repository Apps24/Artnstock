import React, { useEffect, useState } from "react";
import "./topbar.css";
import newarrivalImg from "../../assets/header/Text - New Arrivals.svg";
import visitArt from "../../assets/header/Visit Artnstock Collectibles.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TopBar = () => {
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

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 780) {
      setShowMob(true);
    } else {
      setShowMob(false);
    }
  });

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
  };

  return (
    <div className="main">
      <div className="container-fluid">
        {showMob ? (
          <Slider {...settings}>
            {/* <div
              className="left"
            >
              <p className="leftp">SELL YOUR PAINTINGS AND OTHER ART ONLINE</p>
              <button className="leftBtn">Learn more</button>
            </div> */}
            <div className="mid ">
              <img src={newarrivalImg} alt="New Arrivals" />
            </div>
            <div className="right">
              <img src={visitArt} alt="visit Artnstock" />
            </div>
          </Slider>
        ) : (
          <div className="test">
            <div className="left">
              <p className="leftp">SELL YOUR PAINTINGS AND OTHER ART ONLINE</p>
              <button className="leftBtn">Learn more</button>
            </div>
            <div className="mid ">
              <img src={newarrivalImg} alt="New Arrivals" />
            </div>
            <div className="right">
              <img src={visitArt} alt="visit Artnstock" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
