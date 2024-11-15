import React, { useState } from "react";

const TaskInput = ({ setTasks }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleAddTask = () => {
    if (taskTitle.trim() !== "") {
      setTasks(prevTasks => [
        ...prevTasks,
        { id: Date.now(), title: taskTitle, completed: false, priority: "normal" }
      ]);
      setTaskTitle("");
    }
  };

  return (
    <div className="task-input-container">
      <input
        type="text"
        placeholder="Enter task title"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        className="task-input"
      />
      <button onClick={handleAddTask} className="add-task-btn">
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
