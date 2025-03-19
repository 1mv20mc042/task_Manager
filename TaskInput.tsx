import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../actions/TaskActions";
import { Task } from "../types";

const TaskInput: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (title.trim()) {
      const newTask: Task = {
        id: Date.now(), 
        title: title,
        completed: false,
      };
      dispatch(addTask(newTask));
      setTitle(""); 
    }
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
