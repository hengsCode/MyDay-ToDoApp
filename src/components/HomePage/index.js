import React from "react";
import Clock from "react-live-clock";
import "./styles.css";
import HomeMenu from "./HomeMenu";
import HomeHeader from "./HomeHeader";
import HomeToday from "./HomeToday";

const HomePage = () => {
  const currentDate = new Date().toString().substring(0, 15);

  return (
    <div id="home-page" className="home-page-container">
      <HomeHeader />
      <div className="home-page-contents">
        <div className="home-menu-container">
          <HomeMenu />
        </div>
        <div className="home-today-container">
          <HomeToday today={currentDate} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
