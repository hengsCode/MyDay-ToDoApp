import { React, useState } from "react";
import { Paper, TextField, Button } from "@material-ui/core";
import TaskList from "../../../components/TaskList";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { setTaskList } from "../../../redux/slices/category.slice";

const GroupTaskView = (props) => {
  const { index } = props;
  const { _groupId } = index;
  const { groupList } = useSelector((state) => state.group);

  const group = groupList.find((group) => group._groupId == _groupId);

  const { categoryList } = group;

  if (categoryList.length !== 0) {
    return (
      <div className="category-list-container">
        <div className="category-list-content">
          {categoryList.map((category) => {
            return (
              <Paper className="category-task-view-container" elevation={20}>
                <div className="category-task-view-header-container">
                  <div className="category-task-view-header">
                    {category.label}
                  </div>
                  <div className="category-task-view-sub-header">
                    {category.completedList.length} completed tasks
                  </div>
                </div>
                <div className="category-task-list-container">
                  <TaskList
                    groupId={group._groupId}
                    categoryId={category._categoryId}
                  />
                  ;
                </div>
              </Paper>
            );
          })}
        </div>
        ;
      </div>
    );
  } else {
    return <div>YOU HAVE NO LISTS MATE</div>;
  }
};

export default GroupTaskView;
