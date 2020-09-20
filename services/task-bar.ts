import { TaskStatus } from 'types/task'
import { v4 as uuid } from 'uuid'

const parseTaskString = (str: string) => {
  let name = (str.match(/.*?((?=[!@#$%^&*])|$)/) || [''])[0].trim()
  let due = (str.match(/\$.*?(?=\s|$)/i) || [''])[0].trim().slice(1)
  return {
      _key: uuid(),
      name,
      due: new Date(due),
      status: TaskStatus.open,
    }
}

export {
  parseTaskString,
}
