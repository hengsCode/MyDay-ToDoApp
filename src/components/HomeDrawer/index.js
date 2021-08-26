import { React, useState } from "react";
import { Link, useHistory } from "react-router-dom";
<<<<<<< HEAD
import { List, ListItem, ListItemIcon, Divider, Fab } from "@material-ui/core";
import ProfileAvatar from "../ProfileAvatar";
import { Home, Today, Add, LibraryAdd, Timer } from "@material-ui/icons";
=======
import {
  List,
  ListItem,
  ListItemIcon,
  Avatar,
  Divider,
} from "@material-ui/core";
import { Home, Today, ListAlt } from "@material-ui/icons";
>>>>>>> feat/group-lists
import "./styles.css";
import CategoryListItem from "./CategoryListItem";
import AddCategory from "./AddCategory";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setGroup } from "../../redux/slices/group.slice";
import DialogAdd from "./DialogAdd";
import DrawerFabs from "./DrawerFabs";

const TodayIcon = <Today className="menu-list-item-icon" />;
const AllIcon = <Home className="menu-list-item-icon" />;
<<<<<<< HEAD
const TimerIcon = <Timer className="menu-list-item-icon" />;

=======
const ListAltIcon = <ListAlt className="menu-list-item-icon" />;
>>>>>>> feat/group-lists
const HomeDrawer = (props) => {
  const { closeDrawer } = props;
  const [groupOpen, setGroupOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newFocus, setNewFocus] = useState(false);
  const { groupList } = useSelector((state) => state.group);
  const dispatch = useDispatch();

  const groups = groupList.filter(
    (obj) => obj.isGroup === true && obj.label.toLowerCase() !== "today"
  );
  const unassigned = groupList.find((obj) => obj.isGroup === false);
  const { categoryList, _groupId } = unassigned;

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
      pathname: "/category/" + category.label.toLowerCase(),
      state: { _groupId: _groupId, _categoryId: category._categoryId },
    });
    {
    }
  };

  const handleCategoryClose = () => {
    setNewTitle("");
    setCategoryOpen(false);
  };

  const handleCategoryAdd = () => {
    dispatch(
      setCategory({
        _groupId: 1,
        categoryList: [
          ...categoryList,
          {
            _categoryId:
              categoryList.length === 0 ? 0 : categoryList.length + 1,
            label: newTitle,
            taskList: [],
            completedList: [],
          },
        ],
      })
    );
    setNewTitle("");
    handleCategoryClose();
    setNewFocus(true);
  };

  const handleGroupAdd = () => {
    dispatch(
      setGroup({
        groupList: [
          ...groupList,
          {
            _groupId: groupList.length + 1,
            isGroup: true,
            label: newTitle,
            categoryList: [{ _categoryId: 0, taskList: [], completedList: [] }],
          },
        ],
      })
    );
    setNewTitle("");
    handleGroupClose();
    setNewFocus(true);
  };

  const handleCategoryOpen = () => {
    setCategoryOpen(true);
  };

  const handleGroupOpen = () => {
    setGroupOpen(true);
  };

  const handleGroupClose = () => {
    setNewTitle("");
    setGroupOpen(false);
  };

  const handleChange = (e) => {
    if (open) {
      setNewTitle(e.target.value);
    }
  };

  return (
    <>
      <div className="home-drawer-content">
        <div className="home-drawer-header">
          <div className="home-drawer-header-content">
            <div className="home-drawer-header-text">Your To-Do's</div>
            <ProfileAvatar initial="HF" />
          </div>
        </div>
        <div className="home-drawer-body">
          <List className="menu-list">
            <LinkItem link="/" label="Today" icon={TodayIcon} />
<<<<<<< HEAD
            <LinkItem link="/all" label="All tasks" icon={AllIcon} />
            <LinkItem link="/timer" label="Timer" icon={TimerIcon} />
=======
            {/* <LinkItem link="/all" label="All tasks" icon={AllIcon} /> */}
            {groups.map((group) => (
              <LinkItem
                link={{
                  pathname: `/group/${group.label}`,
                  state: { _groupId: group._groupId },
                }}
                label={group.label}
                icon={ListAltIcon}
              />
            ))}
>>>>>>> feat/group-lists
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
          <List>
            {categoryList.map((category) => {
              return (
                <CategoryListItem
                  category={category}
                  handleClick={handleClick}
                  newFocus={newFocus}
                />
              );
            })}
          </List>
        </div>
        <DrawerFabs
          handleCategoryOpen={handleCategoryOpen}
          handleGroupOpen={handleGroupOpen}
        />
      </div>
<<<<<<< HEAD
      <AddCategory
        open={open}
        handleClose={handleClose}
        handleChange={handleChange}
        handleClose={handleClose}
        handleAdd={handleAdd}
=======
      <DialogAdd
        open={categoryOpen}
        handleClose={handleCategoryClose}
        Transition={Transition}
        handleAdd={handleCategoryAdd}
        handleChange={handleChange}
        newTitle={newTitle}
      />
      <DialogAdd
        open={groupOpen}
        handleClose={handleGroupClose}
        Transition={Transition}
        handleAdd={handleGroupAdd}
        handleChange={handleChange}
>>>>>>> feat/group-lists
        newTitle={newTitle}
      />
    </>
  );
};

export default HomeDrawer;
