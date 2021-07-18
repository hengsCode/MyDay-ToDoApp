import { React, useState, forwardRef } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  Avatar,
  Divider,
  Fab,
  Dialog,
  DialogTitle,
  TextField,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";
import { Home, Today, Menu, Add, LibraryAdd } from "@material-ui/icons";
import "./styles.css";
import Slide from "@material-ui/core/Slide";
import CategoryListItem from "./CategoryListItem";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../../redux/slices/category.slice";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TodayIcon = <Today className="menu-list-item-icon" />;
const AllIcon = <Home className="menu-list-item-icon" />;

const HomeDrawer = (props) => {
  const { closeDrawer } = props;
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newFocus, setNewFocus] = useState(false);
  const { categoryList } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  let history = useHistory();

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

  const handleClick = (category) => {
    closeDrawer();
    history.push({
      pathname: "/category/" + category.toLowerCase(),
    });
    {
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    dispatch(
      setCategory({
        categoryList: [
          ...categoryList,
          { label: newTitle, taskList: [], completedList: [] },
        ],
      })
    );
    handleClose();
    setNewTitle("");
    setNewFocus(true);
  };

  const handleChange = (e) => {
    setNewTitle(e.target.value);
  };

  return (
    <>
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
        <div
          id="home-drawer-footer-content"
          className="home-drawer-footer-content"
        >
          <List className="menu-category-list">
            {categoryList.map((category) => {
              if (category.label !== "Today") {
                return (
                  <CategoryListItem
                    category={category.label}
                    handleClick={handleClick}
                    newFocus={newFocus}
                  />
                );
              }
            })}
          </List>
        </div>
        <div className="home-drawer-fab-both-container">
          <div className="home-drawer-fab-container">
            <Fab className="home-drawer-fab" onClick={handleClickOpen}>
              <LibraryAdd className="drawer-fab-icon" />
            </Fab>
          </div>
          <div className="home-drawer-fab-container">
            <Fab className="home-drawer-fab" onClick={handleClickOpen}>
              <Add className="drawer-fab-icon" />
            </Fab>
          </div>
        </div>
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogContent>
          <TextField
            className="dialog-new-list-title"
            placeholder="Add a new title..."
            onChange={handleChange}
            value={newTitle}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAdd} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default HomeDrawer;
