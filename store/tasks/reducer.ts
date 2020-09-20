import { TasksState } from 'store/types/state'
import { TaskActionTypes, ADD_TASK } from 'store/types/action'

const initalState: TasksState = []

const taskReducer = (state: TasksState|undefined, action: TaskActionTypes): TasksState => {
  if (state === undefined) {
    return initalState
  }

  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        action.payload
      ]
    default:
      return state
  }
}

export default taskReducer
