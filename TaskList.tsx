import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Task } from "../types";
import { setTasks } from "../actions/TaskActions";
import TaskItem from "./TaskItem";
import axios from "axios";

const TaskList: React.FC = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: any) => state.tasks);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get<Task[]>("https://jsonplaceholder.typicode.com/todos");
        dispatch(setTasks(response.data));
      } catch (error) {
        console.error("Failed to fetch tasks", error);
      }
    };
    fetchTasks();
  }, [dispatch]);

  return (
    <div>
      <h2>Task List</h2>
      {tasks.map((task: Task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
