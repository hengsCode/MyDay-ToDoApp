import { React, useState } from "react";
import "./styles.css";
import { ExpandMore, ExpandLess } from "@material-ui/icons";
import ToDoComponent from "./ToDoComponent";
import CompletedComponent from "./CompletedComponent";
import { useSelector, useDispatch } from "react-redux";
import {
  setTaskList,
  setCompletedList,
} from "../../redux/slices/category.slice";

const expandMore = <ExpandMore style={{ fontSize: 30 }} />;
const expandLess = <ExpandLess style={{ fontSize: 30 }} />;

const TaskList = (props) => {
  const { index } = props;
  const [completeBool, setCompleteBool] = useState(false);
  const [todoBool, setToDoBool] = useState(true);
  const [completeOpen, setCompleteOpen] = useState(expandMore);
  const [todoOpen, setToDoOpen] = useState(expandLess);
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
    <div>
      <div className="task-dropdown" onClick={handleToDoOpen}>
        <div className="task-list-text">
          Tasks [{categoryList[index].taskList.length}]
        </div>
        {todoOpen}
      </div>
      <div className="todo-dropdown-content">
        <ToDoComponent
          open={todoBool}
          list={categoryList[index].taskList}
          handleRadioChange={handleToDoRadio}
          handleDelete={handleToDoDelete}
        />
      </div>
      <div className="task-dropdown" onClick={handleCompleteOpen}>
        <div className="task-list-text">
          Completed [{categoryList[index].completedList.length}]
        </div>
        {completeOpen}
      </div>
      {completeBool && (
        <CompletedComponent
          open={completeBool}
          list={categoryList[index].completedList}
          handleRadioChange={handleCompletedRadio}
          handleDelete={handleCompletedDelete}
        />
      )}
    </div>
  );
};
export default TaskList;
