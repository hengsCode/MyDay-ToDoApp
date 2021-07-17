import { React } from "react";
import { ListItem, ListItemIcon } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import "./styles.css";

const CategoryListItem = (props) => {
  const { category, handleClick, newFocus } = props;
  return (
    <ListItem
      autoFocus={newFocus}
      button
      onClick={() => {
        handleClick(category);
      }}
      className="menu-category-item"
    >
      <ListItemIcon>
        <Menu className="menu-category-item-icon" />
      </ListItemIcon>
      <div className="menu-category-item-text">{category}</div>
    </ListItem>
  );
};

export default CategoryListItem;
