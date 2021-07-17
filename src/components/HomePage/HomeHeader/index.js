import { React, useState } from "react";
import "./styles.css";
import moment from "moment";
import { Drawer, Avatar, Button } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import HomeDrawer from "../../HomeDrawer";
const HomeHeader = () => {
  const date = moment().format("dddd Do MMMM YYYY");
  const [drawer, setDrawer] = useState(false);
  const handleClick = () => {
    setDrawer(true);
  };
  const handleClose = () => {
    setDrawer(false);
  };
  return (
    <>
      <div className="home-header">
        <button className="home-menu-icon-container" onClick={handleClick}>
          <Menu className="home-menu-icon" />
        </button>
        <h1 className="home-header-text">{date}</h1>
        <div className="profile-button-container">
          <Button className="profile-button">
            <Avatar className="profile-avatar">HF</Avatar>
          </Button>
        </div>
      </div>
      <div className="drawer-container">
        <Drawer open={drawer} onClose={handleClose} anchor="left">
          <div className="drawer-content">
            <HomeDrawer closeDrawer={handleClose} />
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default HomeHeader;
