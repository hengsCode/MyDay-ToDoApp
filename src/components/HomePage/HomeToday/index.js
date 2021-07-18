import { React, useState } from "react";
import "./styles.css";
import { Paper, TextField, Button } from "@material-ui/core";
import { ExpandMore, ExpandLess } from "@material-ui/icons";
import TaskList from "../../TaskList";
import { useSelector, useDispatch } from "react-redux";
import {
  setTaskList,
  setCompletedList,
} from "../../../redux/slices/category.slice";

// const completed = [];

const HomeToday = (props) => {
  const { today } = props;
  const [newTask, setNewTask] = useState("");
  const { categoryList } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  let result = categoryList.findIndex((obj) => {
    return obj.label.toLowerCase() === "today";
  });

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleClick = () => {
    dispatch(
      setTaskList({
        index: result,
        taskList: [
          ...categoryList[result].taskList,
          { label: newTask, checked: false },
        ],
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
          <TaskList index={result} />
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
