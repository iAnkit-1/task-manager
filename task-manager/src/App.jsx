import React, { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import './App.css';  
function App() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks)); 
    }
  }, []); 

  // Save tasks to localStorage whenever the tasks list changes
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks)); 
    }
  }, [tasks]); 

  // Filter tasks based on the search query
  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>Task Manager</h1>
      <input
        type="text"
        placeholder="Search tasks..."
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <TaskInput setTasks={setTasks} />
      <TaskList tasks={filteredTasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
