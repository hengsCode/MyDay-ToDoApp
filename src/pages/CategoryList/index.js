import { React, useState } from "react";
import HomeHeader from "../../components/HomePage/HomeHeader";
import { TextField, Button } from "@material-ui/core";
import TaskList from "../../components/TaskList";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { setTaskList } from "../../redux/slices/group.slice";

const CategoryList = (props) => {
  const { _groupId, _categoryId } = props.location.state;
  const { groupList } = useSelector((state) => state.group);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");

  const { categoryList } = groupList.find(
    (group) => group._groupId === _groupId
  );
  const category = categoryList.find(
    (category) => category._categoryId === _categoryId
  );

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleClick = () => {
    dispatch(
      setTaskList({
        _groupId: _groupId,
        _categoryId: _categoryId,
        taskList: [
          ...category.taskList,
          {
            _taskId: category.taskList.length + 1,
            label: newTask,
            checked: false,
          },
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
            <div className="category-task-view-header">{category.label}</div>
            <div className="category-task-view-sub-header">
              {category.completedList.length} completed tasks
            </div>
          </div>
          <div className="category-task-list-container">
            <TaskList groupId={_groupId} categoryId={_categoryId} />
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
