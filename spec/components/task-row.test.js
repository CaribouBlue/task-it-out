import React from 'react';
import renderer from 'react-test-renderer';
import TaskRow from 'src/components/task-row';
import MockTasks from 'mock-data/tasks';

let consoleErrorSpy = null
beforeEach(() => {
  consoleErrorSpy = jest.spyOn(global.console, 'error')
})

afterEach(() => {
  expect(consoleErrorSpy).not.toHaveBeenCalled();
})

test('TaskRow component matches snapshot', () => {
  const component = renderer.create(
    <TaskRow task={MockTasks[0]}></TaskRow>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
