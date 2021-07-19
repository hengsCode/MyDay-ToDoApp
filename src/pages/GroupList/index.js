import { React } from "react";
import HomeHeader from "../../components/HomePage/HomeHeader";
import { Paper, Grid, GridList, GridListTile } from "@material-ui/core";
import TaskList from "../../components/TaskList";
import "./styles.css";
import { useSelector } from "react-redux";

const GroupList = (props) => {
  const { _groupId } = props.location.state;
  const { groupList } = useSelector((state) => state.group);

  const { categoryList } = groupList.find(
    (group) => group._groupId === _groupId
  );

  return (
    <div className="category-list-container">
      <HomeHeader />
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
                  groupId={_groupId}
                  categoryId={category._categoryId}
                />
              </div>
            </Paper>
          );
        })}
      </div>
    </div>
  );
};

export default GroupList;
