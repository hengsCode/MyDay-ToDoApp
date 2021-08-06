import { React } from "react";
import { Radio } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import "../styles.css";

const CompletedTask = (props) => {
  const { task, handleDelete, handleRadioChange } = props;

  const handleRadio = () => {
    handleRadioChange(task.label);
    handleDelete(task.label);
  };
  return (
    <div className="completedTask">
      <div className="task-card">
        <div className="task-left">
          <Radio
            className="task-radio"
            checked={task.checked}
            onClick={handleRadio}
            disableRipple
            disableTouchRipple
          />
          <div className="completed-card-content">{task.label}</div>
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

export default CompletedTask;
