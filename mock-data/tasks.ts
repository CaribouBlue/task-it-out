import { Task, TaskStatus} from 'types/task'

const tasks: Task[] = [
  {
    name: 'task1',
    status: TaskStatus.open,
    due: new Date(),
  },
  {
    name: 'task2',
    status: TaskStatus.open,
    due: new Date(),
  },
  {
    name: 'task3',
    status: TaskStatus.open,
    due: new Date(),
  },
]

export default tasks
