import { React } from "react";
import {
  Card,
  CardContent,
  CardActionArea,
  Button,
  Radio,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import "./styles.css";

const Task = (props) => {
  const { task, handleDelete, handleRadioChange, taskCardContent } = props;

  const handleRadio = () => {
    handleRadioChange(task._taskId);
    handleDelete(task._taskId);
  };

  return (
    <div className="task-container">
      <Card className="task-card">
        <Radio
          className="task-radio"
          checked={task.checked}
          onClick={handleRadio}
          disableRipple
          disableTouchRipple
        />
        <CardActionArea>
          <CardContent className={taskCardContent}>{task.label}</CardContent>
        </CardActionArea>
        <Button
          onClick={() => {
            handleDelete(task._taskId);
          }}
        >
          <Delete className="task-delete-icon" />
        </Button>
      </Card>
    </div>
  );
};

export default Task;
