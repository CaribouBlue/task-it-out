import { Task } from 'types/task'

export const ADD_TASK = 'ADD_TASK'
export interface AddTaskAction {
  type: typeof ADD_TASK,
  payload: Task
}

export type TaskActionTypes = AddTaskAction

export type ActionTypes = TaskActionTypes
