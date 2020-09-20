import { State } from 'store/types/state'
import { ActionTypes, ADD_TASK } from 'store/types/action'
import taskReducer from 'store/tasks/reducer'

const initalState: State = {
  tasks: [],
}

const rootReducer = (state: State|undefined, action: ActionTypes): State => {
  if (state === undefined) {
    return initalState
  }

  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: taskReducer(state.tasks, action),
      }
    default:
      return state
  }
}

export default rootReducer
