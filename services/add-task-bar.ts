import { TaskStatus } from 'types/task'
import { v4 as uuid } from 'uuid'

const parseTaskString = (str: string) => {
  const parsedName = (str.match(/.*?((?=[!@#$%^&*])|$)/) || [''])[0].trim()
  const parsedDue = (str.match(/\$.*?(?=\s|$)/i) || [''])[0].trim().slice(1)

  const dueDate = new Date(parsedDue)

  const name = parsedName
  const due = dueDate.toString() === 'Invalid Date'
    ? new Date()
    : dueDate

  return {
      _key: uuid(),
      name,
      due,
      status: TaskStatus.open,
    }
}

export {
  parseTaskString,
}
