import { ADD_TASK, REMOVE_TASK, GET_TODOS } from "../constants";

export const getTodos = () => ({
  type: GET_TODOS
})

export const addTask = (task) => ({
  type: ADD_TASK,
  task
})

export const removeTask = (id) => ({
  type: REMOVE_TASK,
  id
})