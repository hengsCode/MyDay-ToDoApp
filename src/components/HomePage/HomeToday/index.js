import { React, useState } from "react";
import { Paper, TextField, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import TaskList from "../../TaskList";
import { setTaskList } from "../../../redux/slices/group.slice";
import "./styles.css";

const HomeToday = (props) => {
  const { today } = props;
  const [newTask, setNewTask] = useState("");
  const { groupList } = useSelector((state) => state.group);
  const dispatch = useDispatch();
  const group = groupList.find((obj) => obj.label.toLowerCase() === "today");

  const category = group.categoryList.find(
    (obj) => obj.label.toLowerCase() === "today"
  );

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleClick = () => {
    dispatch(
      setTaskList({
        _groupId: group._groupId,
        _categoryId: category._categoryId,
        taskList: [...category.taskList, { label: newTask, checked: false }],
      })
    );
    setNewTask("");
  };

  return (
    <Paper elevation={20} className="home-today-container">
      <div className="home-today-content">
        <div className="today-header">
          My Day
          <div className="today-date-text">{today}</div>
        </div>
        <div className="today-task-container">
          <TaskList
            groupId={group._groupId}
            categoryId={category._categoryId}
          />
        </div>
        <div className="new-task-container">
          <TextField
            value={newTask}
            type="input"
            variant="outlined"
            label="New task"
            fullWidth
            onChange={handleChange}
          ></TextField>
          <div className="new-task-button-container">
            <Button
              className="new-task-button"
              variant="contained"
              onClick={handleClick}
            >
              Add
            </Button>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default HomeToday;
