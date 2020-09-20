import {Task} from 'types/task'

export interface State {
  tasks: TasksState
}

export type TasksState = Task[]
