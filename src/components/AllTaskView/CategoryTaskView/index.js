import { React, useState } from "react";
import { TextField, Button } from "@material-ui/core";
import TaskList from "../../../components/TaskList";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { setTaskList } from "../../../redux/slices/category.slice";

const CategoryTaskView = (props) => {
  const { index } = props;
  const { categoryList } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");
  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleClick = () => {
    dispatch(
      setTaskList({
        index: index,
        taskList: [
          ...categoryList[index].taskList,
          { label: newTask, checked: false },
        ],
      })
    );
    setNewTask("");
  };

  return (
    <div className="category-list-container">
      <div className="category-list-content">
        <div className="category-task-view-container">
          <div className="category-task-view-header-container">
            <div className="category-task-view-header">
              {categoryList[index].label}
            </div>
            <div className="category-task-view-sub-header">
              {categoryList[index].completedList.length} completed tasks
            </div>
          </div>
          <div className="category-task-list-container">
            <TaskList index={index} />
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

export default CategoryTaskView;
