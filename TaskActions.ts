import { Task } from "../types";

//types
export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const SET_TASKS = "SET_TASKS";

// Action
export interface AddTaskAction {
  type: typeof ADD_TASK;
  payload: Task;
}

export interface DeleteTaskAction {
  type: typeof DELETE_TASK;
  payload: number;
}

export interface ToggleTaskAction {
  type: typeof TOGGLE_TASK;
  payload: number;
}

export interface SetTasksAction {
  type: typeof SET_TASKS;
  payload: Task[];
}

export const addTask = (task: Task): AddTaskAction => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (id: number): DeleteTaskAction => ({
  type: DELETE_TASK,
  payload: id,
});

export const toggleTask = (id: number): ToggleTaskAction => ({
  type: TOGGLE_TASK,
  payload: id,
});

export const setTasks = (tasks: Task[]): SetTasksAction => ({
  type: SET_TASKS,
  payload: tasks,
});

export type TaskActionTypes =
  | AddTaskAction
  | DeleteTaskAction
  | ToggleTaskAction
  | SetTasksAction;
