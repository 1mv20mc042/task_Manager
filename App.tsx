import React from "react";
import TaskInput from "./Components/TaskInput";
import TaskList from "./Components/TaskList";

const App: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Task Manager</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;

