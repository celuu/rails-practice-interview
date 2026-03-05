import { createRoot } from "react-dom/client";
import React from "react";
import TaskToggle from "./components/TaskToggle";

document.addEventListener("turbo:load", () => {
  const tasksDataElement = document.getElementById("tasks-data");
  if (tasksDataElement) {
    const task = JSON.parse(tasksDataElement.dataset.task);
    const root = createRoot(tasksDataElement);
    root.render(<TaskToggle taskId={task.id} initialCompleted={task.completed} />);
  }
});