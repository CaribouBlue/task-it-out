import { FunctionComponent } from 'react'
import { Task } from 'types/task'

import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { State, TasksState } from 'store/types/state'
import { addTask } from 'store/tasks/actions'

import AppLayout from 'layouts/app-layout'
import AllTaskView from 'components/all-task-view'
import AddTaskBar from 'components/add-task-bar'

type PropType = {
  tasks: TasksState,
  onAddTask(task: Task): any,
}

const Home: FunctionComponent<PropType> = (props: PropType) => {
  return (
    <AppLayout>
      <div className="cell auto cell-block-container">
        <AddTaskBar onAddTask={props.onAddTask}></AddTaskBar>
        <AllTaskView tasks={props.tasks}></AllTaskView>
      </div>
    </AppLayout>
  )
}

const mapState = (state: State) => {
  return {
    tasks: state.tasks
  }
}

const mapDispatch = (dispatch: Dispatch) => {
  return {
    onAddTask: (task: Task) => {
      dispatch(addTask(task))
    }
  }
}

export default connect(mapState, mapDispatch)(Home)
