import { React } from "react";
import Task from "../../Task";
import "./styles.css";
const ListComponent = (props) => {
  const { open, list, handleRadioChange, handleDelete, taskCardContent } =
    props;

  if (open) {
    return (
      <div className="complete-list-container">
        {list.map((task) => {
          return (
            <Task
              task={task}
              handleRadioChange={handleRadioChange}
              handleDelete={handleDelete}
              taskCardContent={taskCardContent}
            />
          );
        })}
      </div>
    );
  } else {
    return <br />;
  }
};

export default ListComponent;
