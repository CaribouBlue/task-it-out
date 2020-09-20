import { parseTaskString } from 'src/services/add-task-bar'

test('parseTaskString should parse task name', () => {
  let taskStr = 'this is my task string'
  let name = parseTaskString(taskStr).name
  expect(taskStr).toEqual(name)

  name = parseTaskString(taskStr + ' $12/12/12').name
  expect(taskStr).toEqual(name)
})

test('parseTaskString should parse due date', () => {
  let taskStr = 'this is my task string $12/12/12'
  let due = parseTaskString(taskStr).due
  expect(due.toString()).toEqual(new Date('12/12/12').toString())

  due = parseTaskString(taskStr + ' hahaha more test').due
  expect(due.toString()).toEqual(new Date('12/12/12').toString())
})
