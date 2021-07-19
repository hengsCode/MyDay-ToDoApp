import { React, useState } from "react";
import "./styles.css";
import { Card, CardActionArea, CardContent } from "@material-ui/core";
import { ExpandMore, ExpandLess } from "@material-ui/icons";
import ListComponent from "./ListComponent";
import { useSelector, useDispatch } from "react-redux";
import { setTaskList, setCompletedList } from "../../redux/slices/group.slice";

const expandMore = <ExpandMore className="task-list-icon" />;
const expandLess = <ExpandLess className="task-list-icon" />;

const TaskList = (props) => {
  const { categoryId, groupId } = props;
  const { groupList } = useSelector((state) => state.group);
  const dispatch = useDispatch();

  const group = groupList.find((group) => {
    return group._groupId === groupId;
  });

  const category = group.categoryList.find((category) => {
    return category._categoryId === categoryId;
  });

  const [completeBool, setCompleteBool] = useState(false);
  const [todoBool, setToDoBool] = useState(false);
  const [completeOpen, setCompleteOpen] = useState(expandMore);
  const [todoOpen, setToDoOpen] = useState(expandMore);

  const handleCompleteOpen = () => {
    setCompleteBool(!completeBool);
    if (completeBool) {
      setCompleteOpen(expandMore);
    } else {
      setCompleteOpen(expandLess);
    }
  };

  const handleToDoOpen = () => {
    setToDoBool(!todoBool);
    if (todoBool) {
      setToDoOpen(expandMore);
    } else {
      setToDoOpen(expandLess);
    }
  };

  const handleToDoRadio = (_taskId) => {
    const task = category.taskList.find((obj) => obj._taskId == _taskId);
    dispatch(
      setCompletedList({
        _groupId: group._groupId,
        _categoryId: category._categoryId,
        completedList: [
          ...category.completedList,
          {
            _taskId: category.completedList.length + 1,
            label: task.label,
            checked: true,
          },
        ],
      })
    );
    handleToDoDelete(_taskId);
  };

  const handleToDoDelete = (_taskId) => {
    dispatch(
      setTaskList({
        _groupId: group._groupId,
        _categoryId: category._categoryId,
        taskList: category.taskList.filter((task) => {
          if (task._taskId !== _taskId) {
            return task;
          }
        }),
      })
    );
  };

  const handleCompletedRadio = (_taskId) => {
    const task = category.completedList.find((obj) => obj._taskId == _taskId);
    dispatch(
      setTaskList({
        _groupId: group._groupId,
        _categoryId: category._categoryId,
        taskList: [
          ...category.taskList,
          {
            _taskId: category.taskList.length + 1,
            label: task.label,
            checked: false,
          },
        ],
      })
    );
    handleCompletedDelete(_taskId);
  };

  const handleCompletedDelete = (_taskId) => {
    dispatch(
      setCompletedList({
        _groupId: group._groupId,
        _categoryId: category._categoryId,
        completedList: category.completedList.filter((task) => {
          if (task._taskId !== _taskId) {
            return task;
          }
        }),
      })
    );
  };

  return (
    <>
      <Card className="task-list-container">
        <CardActionArea onClick={handleToDoOpen}>
          <CardContent className="task-list-content">
            <div className="task-list-text">
              Tasks [{category.taskList.length}]
            </div>
            {todoOpen}
          </CardContent>
        </CardActionArea>
      </Card>
      <ListComponent
        open={todoBool}
        list={category.taskList}
        handleRadioChange={handleToDoRadio}
        handleDelete={handleToDoDelete}
        taskCardContent="to-do-card-content"
      />
      <Card className="task-list-container">
        <CardActionArea onClick={handleCompleteOpen}>
          <CardContent className="task-list-content">
            <div className="task-list-text">
              Completed [{category.completedList.length}]
            </div>
            {completeOpen}
          </CardContent>
        </CardActionArea>
      </Card>
      <ListComponent
        open={completeBool}
        list={category.completedList}
        handleRadioChange={handleCompletedRadio}
        handleDelete={handleCompletedDelete}
        taskCardContent="completed-card-content"
      />
    </>
  );
};
export default TaskList;
