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

const addDragListener = async () => {
  const draggables = document.querySelectorAll(".draggable");
  const container = document.querySelector(".todo-list-container");

  if (container) {
    draggables.forEach((draggable) => {
      draggable.addEventListener("dragstart", () => {
        draggable.classList.add("dragging");
      });

      draggable.addEventListener("dragend", () => {
        draggable.classList.remove("dragging");
      });
    });

    container.addEventListener("dragover", (e) => {
      const elementAfter = getElementAfter(container, e.clientY);
      const dragging = container.querySelector(".dragging");
      if (dragging) {
        e.preventDefault();
        if (elementAfter == null) {
          container.appendChild(dragging);
        } else {
          container.insertBefore(dragging, elementAfter);
        }
      }
    });
  }
};

export default addDragListener;
