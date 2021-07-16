import { React, useState } from "react";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  Collapse,
  Button,
  Avatar,
  Divider,
} from "@material-ui/core";
import {
  ExpandLess,
  ExpandMore,
  Home,
  Today,
  Menu,
  ListAlt,
} from "@material-ui/icons";
import "./styles.css";

const taskCategories = [
  "University",
  "Work",
  "Shopping",
  "Home",
  "Volunteering",
];

const TodayIcon = <Today className="menu-list-item-icon" />;
const AllIcon = <Home className="menu-list-item-icon" />;
const LinkItem = (props) => {
  const { link, label, icon } = props;
  return (
    <Link to={link} className="link-text">
      <ListItem button className="menu-list-item">
        <ListItemIcon>{icon}</ListItemIcon>
        <div className="menu-list-item-text">{label}</div>
      </ListItem>
    </Link>
  );
};

const HomeMenu = (props) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="home-drawer-content">
      <div className="home-drawer-header">
        <div className="home-drawer-header-content">
          <div className="home-drawer-header-text">Your To-Do's</div>
          <Avatar className="home-drawer-avatar">HF</Avatar>
        </div>
      </div>
      <div className="home-drawer-body">
        <List className="menu-list">
          <LinkItem link="/" label="Today" icon={TodayIcon} />
          <LinkItem link="/all" label="All tasks" icon={AllIcon} />
        </List>
      </div>
      <Divider
        className="home-drawer-divider"
        orientation="horizontal"
        variant="middle"
      />
      <div className="home-drawer-footer-content">
        <List className="menu-list">
          {taskCategories.map((category) => {
            return (
              <ListItem button onClick={handleClick} className="menu-list-item">
                <ListItemIcon>
                  <ListAlt className="menu-list-item-icon" />
                </ListItemIcon>
                <div className="menu-list-item-text">{category}</div>
                <Button className="menu-list-item-drop-down-button">
                  {open ? (
                    <ExpandLess className="menu-list-item-drop-down-icon" />
                  ) : (
                    <ExpandMore className="menu-list-item-drop-down-icon" />
                  )}
                </Button>
              </ListItem>
            );
          })}
        </List>
      </div>
    </div>
  );
};

export default HomeMenu;
