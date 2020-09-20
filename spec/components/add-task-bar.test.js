import React from 'react';
import renderer from 'react-test-renderer';
import AddTaskBar from 'src/components/add-task-bar';
import MockTasks from 'mock-data/tasks';

let consoleErrorSpy = null
beforeEach(() => {
  consoleErrorSpy = jest.spyOn(global.console, 'error')
})

afterEach(() => {
  expect(consoleErrorSpy).not.toHaveBeenCalled();
})

test('AddTaskBar component matches snapshot', () => {
  const component = renderer.create(
    <AddTaskBar></AddTaskBar>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
