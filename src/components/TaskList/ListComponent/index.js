import { React, useEffect, useState } from "react";
import Task from "../../Task";
import "./styles.css";

const getElementAfter = (container, y) => {
  const draggableElements = [
    ...container.querySelectorAll(".draggable:not(.dragging"),
  ];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
};

const addDragListener = () => {
  const draggables = document.querySelectorAll(".draggable");
  const container = document.querySelector(".list-container");

  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", () => {
      draggable.classList.add("dragging");
    });

    draggable.addEventListener("dragend", () => {
      draggable.classList.remove("dragging");
    });
  });
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    const elementAfter = getElementAfter(container, e.clientY);
    const draggable = container.querySelector(".dragging");
    if (elementAfter == null) {
      container.appendChild(draggable);
    } else {
      container.insertBefore(draggable, elementAfter);
    }
  });
};

const ListComponent = (props) => {
  const { open, list, handleRadioChange, handleDelete, taskCardContent } =
    props;

  const [loading, isLoading] = useState(false);

  useEffect(() => {
    if (open) {
      addDragListener();
    }
    isLoading(true);
  }, [open]);

  if (open) {
    return (
      loading && (
        <div className="list-container">
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
      )
    );
  } else {
    return <br />;
  }
};

export default ListComponent;
