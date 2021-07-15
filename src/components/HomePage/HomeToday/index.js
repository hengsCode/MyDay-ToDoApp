import { React, useState } from "react";
import "./styles.css";
import { Paper, TextField, Button } from "@material-ui/core";
import { ExpandMore, ExpandLess } from "@material-ui/icons";
import TaskList from "../../TaskList";

const tasks = [
  {
    label: "Do the laundry",
    checked: false,
  },
  {
    label: "Clean the dishes",
    checked: false,
  },
  {
    label: "Make food",
    checked: false,
  },
  {
    label: "Clean room",
    checked: false,
  },
  {
    label: "Feed pet",
    checked: false,
  },
  {
    label: "Feed fish",
    checked: false,
  },
  {
    label: "Walk pet",
    checked: false,
  },
  {
    label: "Clean pet",
    checked: false,
  },
  {
    label: "Feed pet",
    checked: false,
  },
];

const HomeToday = (props) => {
  const { today } = props;
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState(tasks);
  const [completedList, setCompletedList] = useState([]);

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleClick = () => {
    setTaskList([...taskList, { label: newTask }]);
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
            taskList={taskList}
            completedList={completedList}
            setTaskList={setTaskList}
            setCompletedList={setCompletedList}
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
