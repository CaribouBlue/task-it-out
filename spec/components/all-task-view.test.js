import React from 'react';
import renderer from 'react-test-renderer';
import AllTaskView from 'src/components/all-task-view';
import MockTasks from 'mock-data/tasks';

let consoleErrorSpy = null
beforeEach(() => {
  consoleErrorSpy = jest.spyOn(global.console, 'error')
})

afterEach(() => {
  expect(consoleErrorSpy).not.toHaveBeenCalled();
})

test('AllTaskView component matches snapshot', () => {
  const component = renderer.create(
    <AllTaskView tasks={MockTasks}></AllTaskView>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
