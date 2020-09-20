import { Task } from 'types/task'
import { TaskActionTypes, ADD_TASK} from 'store/types/action'

export function addTask(newTask: Task): TaskActionTypes {
  return {
    type: ADD_TASK,
    payload: newTask
  }
}
