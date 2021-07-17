import { React } from "react";
import "./styles.css";

const CategoryListGroup = (props) => {
  return (
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
  );
};

export default CategoryListGroup;
