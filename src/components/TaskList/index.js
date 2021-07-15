import { React, useState } from "react";
import "./styles.css";
import { Card, CardActionArea, CardContent } from "@material-ui/core";
import { ExpandMore, ExpandLess } from "@material-ui/icons";
import ListComponent from "./ListComponent";

const expandMore = <ExpandMore className="task-list-icon" />;
const expandLess = <ExpandLess className="task-list-icon" />;

const TaskList = (props) => {
  const { taskList, completedList, setTaskList, setCompletedList } = props;
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

  const handleToDoRadio = (label) => {
    setCompletedList([...completedList, { label: label, checked: true }]);
  };

  const handleToDoDelete = (task) => {
    taskList.splice(
      taskList.findIndex((x) => x.label === task),
      1
    );
    setTaskList([...taskList]);
  };

  const handleCompletedRadio = (label) => {
    setTaskList([...taskList, { label: label, checked: false }]);
  };

  const handleCompletedDelete = (task) => {
    completedList.splice(
      completedList.findIndex((x) => x.label === task),
      1
    );
    setCompletedList([...completedList]);
  };

  return (
    <>
      <Card className="task-list-container">
        <CardActionArea onClick={handleToDoOpen}>
          <CardContent className="task-list-content">
            <div className="task-list-text">Tasks [{taskList.length}]</div>
            {todoOpen}
          </CardContent>
        </CardActionArea>
      </Card>
      <ListComponent
        open={todoBool}
        list={taskList}
        handleRadioChange={handleToDoRadio}
        handleDelete={handleToDoDelete}
        taskCardContent="to-do-card-content"
      />
      <Card className="task-list-container">
        <CardActionArea onClick={handleCompleteOpen}>
          <CardContent className="task-list-content">
            <div className="task-list-text">
              Completed [{completedList.length}]
            </div>
            {completeOpen}
          </CardContent>
        </CardActionArea>
      </Card>
      <ListComponent
        open={completeBool}
        list={completedList}
        handleRadioChange={handleCompletedRadio}
        handleDelete={handleCompletedDelete}
        taskCardContent="completed-card-content"
      />
    </>
  );
};
export default TaskList;
