import { FunctionComponent } from 'react'
import AppLayout from 'layouts/app-layout'
import AllTaskView from 'components/all-task-view'
import MockTasks from 'mock-data/tasks'

const Home: FunctionComponent = () => {
  return (
    <AppLayout>
      <div className="cell auto cell-block-container">
        <AllTaskView tasks={MockTasks}></AllTaskView>
      </div>
    </AppLayout>
  )
}

export default Home
