import { React } from "react";
import { Radio } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import "../styles.css";

const Task = (props) => {
  const { task, handleDelete, handleRadioChange } = props;

  const handleRadio = () => {
    handleRadioChange(task.label);
    handleDelete(task.label);
  };
  return (
    <div className="draggable" draggable={!task.checked}>
      <div className="task-card">
        <div className="task-left">
          <Radio
            className="task-radio"
            checked={task.checked}
            onClick={handleRadio}
            disableRipple
            disableTouchRipple
          />
          <div className="todo-card-content">{task.label}</div>
        </div>
        <Delete
          className="task-delete-icon"
          onClick={() => {
            handleDelete(task.label);
          }}
        />
      </div>
    </div>
  );
};

export default Task;
