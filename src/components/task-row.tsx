import { FunctionComponent } from 'react'
import { Task, TaskStatus } from 'types/task'
import { DayOfWeekAbbrv, MonthAbbrv } from 'types/date'

type PropType = {
  task: Task
}

const dateToString = (date: Date) => {
  const day = date.getDate()
  const month = MonthAbbrv[date.getMonth()]
  const year = date.getFullYear()
  const dayOfWeek = DayOfWeekAbbrv[date.getDay()]
  return `${dayOfWeek} ${month} ${day} ${year}`
}

const TaskRow: FunctionComponent<PropType> = ({ task }) => {
  return (
    <>
      <tr>
        <td>{task.name}</td>
        <td>{dateToString(task.due)}</td>
        <td>{TaskStatus[task.status]}</td>
      </tr>
    </>
  )
}

export default TaskRow
