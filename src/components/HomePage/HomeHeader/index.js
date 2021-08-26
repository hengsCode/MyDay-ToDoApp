import { React, useState } from "react";
import { Drawer } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import HomeDrawer from "../../HomeDrawer";
import ProfileAvatar from "../../ProfileAvatar";
import "./styles.css";
// import moment from "moment";
const HomeHeader = () => {
  // const date = moment().format("dddd Do MMMM YYYY");
  const [drawer, setDrawer] = useState(false);
  const handleClick = () => {
    setDrawer(true);
  };
  const handleClose = () => {
    setDrawer(false);
  };
  return (
    <>
      <div className="home-header-container">
        <div className="home-header">
          <Menu className="home-menu-icon" onClick={handleClick} />
        </div>
        <ProfileAvatar initial="HF" />
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
