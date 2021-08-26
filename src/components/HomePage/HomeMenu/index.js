import { React } from "react";
import "./styles.css";
import Clock from "react-live-clock";
import Calendar from "react-calendar";

const HomeMenu = () => {
  return (
    <div className="home-menu-container">
      <div className="live-clock-text">Current Time</div>
      <Clock className="live-clock" format={"HH:mm:ss"} ticking={true} />
      <Calendar className="home-calendar" tileClassName="home-calendar-tile" />
    </div>
  );
};

export default HomeMenu;
