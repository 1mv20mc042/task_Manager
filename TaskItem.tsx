import React from "react";
import { useDispatch } from "react-redux";
import { Task } from "../types";
import { deleteTask, toggleTask } from "../actions/TaskActions";

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div style={{ marginBottom: "10px" }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
      />
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          marginRight: "10px",
        }}
      >
        {task.title}
      </span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
