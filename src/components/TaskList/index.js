import { React, useState } from "react";
import "./styles.css";
import { Card, CardActionArea, CardContent } from "@material-ui/core";
import { ExpandMore, ExpandLess } from "@material-ui/icons";
import ListComponent from "./ListComponent";
import { useSelector, useDispatch } from "react-redux";
import {
  setTaskList,
  setCompletedList,
} from "../../redux/slices/category.slice";

const expandMore = <ExpandMore className="task-list-icon" />;
const expandLess = <ExpandLess className="task-list-icon" />;

const TaskList = (props) => {
  const { index } = props;
  const [completeBool, setCompleteBool] = useState(false);
  const [todoBool, setToDoBool] = useState(false);
  const [completeOpen, setCompleteOpen] = useState(expandMore);
  const [todoOpen, setToDoOpen] = useState(expandMore);
  const { categoryList } = useSelector((state) => state.category);
  const dispatch = useDispatch();

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

  const handleToDoRadio = (label) => {
    dispatch(
      setCompletedList({
        index: index,
        completedList: [
          ...categoryList[index].completedList,
          { label: label, checked: true },
        ],
      })
    );
    handleToDoDelete(label);
  };

  const handleToDoDelete = (label) => {
    dispatch(
      setTaskList({
        index: index,
        taskList: categoryList[index].taskList.filter((task) => {
          if (task.label !== label) {
            return task;
          }
        }),
      })
    );
  };

  const handleCompletedRadio = (label) => {
    dispatch(
      setTaskList({
        index: index,
        taskList: [
          ...categoryList[index].taskList,
          { label: label, checked: false },
        ],
      })
    );
    handleCompletedDelete(label);
  };

  const handleCompletedDelete = (label) => {
    dispatch(
      setCompletedList({
        index: index,
        completedList: categoryList[index].completedList.filter((task) => {
          if (task.label !== label) {
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
              Tasks [{categoryList[index].taskList.length}]
            </div>
            {todoOpen}
          </CardContent>
        </CardActionArea>
      </Card>
      <ListComponent
        open={todoBool}
        list={categoryList[index].taskList}
        handleRadioChange={handleToDoRadio}
        handleDelete={handleToDoDelete}
        taskCardContent="to-do-card-content"
      />
      <Card className="task-list-container">
        <CardActionArea onClick={handleCompleteOpen}>
          <CardContent className="task-list-content">
            <div className="task-list-text">
              Completed [{categoryList[index].completedList.length}]
            </div>
            {completeOpen}
          </CardContent>
        </CardActionArea>
      </Card>
      <ListComponent
        open={completeBool}
        list={categoryList[index].completedList}
        handleRadioChange={handleCompletedRadio}
        handleDelete={handleCompletedDelete}
        taskCardContent="completed-card-content"
      />
    </>
  );
};
export default TaskList;
