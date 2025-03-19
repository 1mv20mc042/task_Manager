import { Task } from "../types";
import { TaskActionTypes, ADD_TASK, DELETE_TASK, TOGGLE_TASK, SET_TASKS } from "../actions/TaskActions";

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
};

export const taskReducer = (state = initialState, action: TaskActionTypes): TaskState => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case DELETE_TASK:
      return { ...state, tasks: state.tasks.filter((task) => task.id !== action.payload) };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
    case SET_TASKS:
      return { ...state, tasks: action.payload };
    default:
      return state;
  }
};
