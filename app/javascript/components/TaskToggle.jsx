import React, { useState } from "react";

export default function TaskToggle({ taskId, initialCompleted }) {
  const [completed, setCompleted] = useState(initialCompleted);

  const toggle = async () => {
    const res = await fetch(`/tasks/${taskId}`, {
      method: "PATCH",
      headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]')?.content
       },
      body: JSON.stringify({ task: { completed: !completed } }),
    });

    const data = await res.json();
    setCompleted(data.completed);
  };

  return (
    <button onClick={toggle}>
      {completed ? "Completed" : "Mark Complete"}
    </button>
  );
}