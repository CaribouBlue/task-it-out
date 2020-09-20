import { FunctionComponent } from 'react'
import { Task } from 'types/task'
import TaskRow from 'components/task-row'

type PropType = {
  tasks: Task[]
}

const AllTaskView: FunctionComponent<PropType> = ({ tasks }) => {
  return (
    <>
      <table>
        <tbody>
          {tasks.map(task => <TaskRow task={task} key={task._key}/>)}
        </tbody>
      </table>
    </>
  )
}

export default AllTaskView
