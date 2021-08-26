import { React, useEffect, useState } from "react";
import ToDoTask from "../Task/ToDoTask";
import addDragListener from "./script.js";
import "./styles.css";

const ToDoComponent = (props) => {
  const { open, list, handleRadioChange, handleDelete } = props;

  const [loading, isLoading] = useState(false);

  useEffect(() => {
    addDragListener();
    isLoading(true);
  }, [loading]);

  if (open) {
    return (
      loading && (
        <div className="todo-list-container">
          {list.map((task) => {
            return (
              <ToDoTask
                task={task}
                handleRadioChange={handleRadioChange}
                handleDelete={handleDelete}
              />
            );
          })}
        </div>
      )
    );
  } else {
    return <br />;
  }
};

export default ToDoComponent;
