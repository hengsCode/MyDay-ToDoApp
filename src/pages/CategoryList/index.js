import { React, useState } from "react";
import { useParams } from "react-router-dom";
import HomeHeader from "../../components/HomePage/HomeHeader";
import { TextField, Button } from "@material-ui/core";
import TaskList from "../../components/TaskList";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import {
  setCategory,
  setTaskList,
  setCompletedList,
} from "../../redux/slices/category.slice";

const CategoryList = (props) => {
  const { category } = useParams();
  const { categoryList } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");

  let result = categoryList.findIndex((obj) => {
    return obj.label.toLowerCase() === category;
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
    <div className="category-list-container">
      <HomeHeader />
      <div className="category-list-content">
        <div className="category-task-view-container">
          <div className="category-task-view-header-container">
            <div className="category-task-view-header">{category}</div>
            <div className="category-task-view-sub-header">
              {categoryList[result].completedList.length} completed tasks
            </div>
          </div>
          <div className="category-task-list-container">
            <TaskList index={result} />
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
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
