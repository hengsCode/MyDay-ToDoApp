import { React, useState } from "react";
import "./styles.css";
import { ExpandMore, ExpandLess } from "@material-ui/icons";
import ToDoComponent from "./ToDoComponent";
import CompletedComponent from "./CompletedComponent";
import { useSelector, useDispatch } from "react-redux";
import { setTaskList, setCompletedList } from "../../redux/slices/group.slice";

const expandMore = <ExpandMore style={{ fontSize: 30 }} />;
const expandLess = <ExpandLess style={{ fontSize: 30 }} />;

const TaskList = (props) => {
<<<<<<< HEAD
  const { index } = props;
=======
  const { categoryId, groupId } = props;
  const { groupList } = useSelector((state) => state.group);
  const dispatch = useDispatch();

  const group = groupList.find((group) => {
    return group._groupId === groupId;
  });

  const category = group.categoryList.find((category) => {
    return category._categoryId === categoryId;
  });

>>>>>>> feat/group-lists
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
<<<<<<< HEAD
    <div>
      <div className="task-dropdown" onClick={handleToDoOpen}>
        <div className="task-list-text">
          Tasks [{categoryList[index].taskList.length}]
        </div>
        {todoOpen}
      </div>
      <ToDoComponent
=======
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
>>>>>>> feat/group-lists
        open={todoBool}
        list={category.taskList}
        handleRadioChange={handleToDoRadio}
        handleDelete={handleToDoDelete}
<<<<<<< HEAD
=======
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
>>>>>>> feat/group-lists
      />
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
