import { React, useState } from "react";
import { useParams } from "react-router-dom";
import HomeHeader from "../../components/HomePage/HomeHeader";
import { Paper, TextField, Button } from "@material-ui/core";
import TaskList from "../../components/TaskList";
import "./styles.css";

const tasks = [];
const completed = [];
const CategoryList = (props) => {
  const { category } = useParams();

  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState(tasks);
  const [completedList, setCompletedList] = useState(completed);

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleClick = () => {
    setTaskList([...taskList, { label: newTask }]);
    setNewTask("");
  };

  console.log(category);
  return (
    <div className="category-list-container">
      <HomeHeader />
      <div className="category-list-content">
        <Paper className="category-task-view-container" elevation={20}>
          <div className="category-task-view-header-container">
            <div className="category-task-view-header">{category}</div>
            <div className="category-task-view-sub-header">
              {completedList.length} completed tasks
            </div>
          </div>
          <div className="category-task-list-container">
            <TaskList
              taskList={taskList}
              completedList={completedList}
              setTaskList={setTaskList}
              setCompletedList={setCompletedList}
            />
          </div>
          <div className="category-task-view-new-task">
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
        </Paper>
      </div>
    </div>
  );
};

export default CategoryList;
