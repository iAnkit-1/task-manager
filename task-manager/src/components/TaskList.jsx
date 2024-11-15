import React from "react";

const TaskList = ({ tasks, setTasks }) => {
  const handleDelete = (id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(prevTasks => 
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const changePriority = (id, priority) => {
    setTasks(prevTasks => 
      prevTasks.map(task =>
        task.id === id ? { ...task, priority } : task
      )
    );
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
          <input 
            type="checkbox" 
            checked={task.completed} 
            onChange={() => toggleComplete(task.id)} 
            className="task-checkbox"
          />
          <span className="task-title">{task.title}</span>
          <span className="task-priority">
            <select
              value={task.priority}
              onChange={(e) => changePriority(task.id, e.target.value)}
              className="priority-select"
            >
              <option value="low">Low</option>
              <option value="normal">Normal</option>
              <option value="high">High</option>
            </select>
          </span>
          <button onClick={() => handleDelete(task.id)} className="delete-btn">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
