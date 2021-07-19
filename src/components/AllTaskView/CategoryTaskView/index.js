import { React, useState } from "react";
import { Paper, TextField, Button } from "@material-ui/core";
import TaskList from "../../../components/TaskList";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { setTaskList } from "../../../redux/slices/category.slice";

const CategoryTaskView = (props) => {
  const { index } = props;
  const { _groupId, _categoryId } = index;
  const { groupList } = useSelector((state) => state.group);
  console.log(groupList);
  const { categoryList } = groupList.find(
    (group) => group._groupId == _groupId
  );

  const category = categoryList.find(
    (category) => category._categoryId == _categoryId
  );

  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");
  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleClick = () => {
    dispatch(
      setTaskList({
        _groupId: _groupId,
        _categoryId: _categoryId,
        taskList: [...category.taskList, { label: newTask, checked: false }],
      })
    );
    setNewTask("");
  };

  if (categoryList.length !== 0) {
    return (
      <div className="category-list-container">
        <div className="category-list-content">
          <Paper className="category-task-view-container" elevation={20}>
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
          </Paper>
        </div>
      </div>
    );
  } else {
    return <div>YOU HAVE NO</div>;
  }
};

export default CategoryTaskView;
