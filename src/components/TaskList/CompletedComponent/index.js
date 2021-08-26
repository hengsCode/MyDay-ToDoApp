import { React } from "react";
import CompletedTask from "../Task/CompletedTask";
import "./styles.css";

const CompletedComponent = (props) => {
  const { list, handleRadioChange, handleDelete } = props;

  return (
    <div className="completed-list-container">
      {list.map((task) => {
        return (
          <CompletedTask
            task={task}
            handleRadioChange={handleRadioChange}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
};

export default CompletedComponent;
