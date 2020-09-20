import React from 'react';
import renderer from 'react-test-renderer';
import IndexPage from 'pages/index';

import { Provider } from 'react-redux'
import configureStore from 'store'
import MockTasks from 'mock-data/tasks'

const store = configureStore({
  tasks: MockTasks,
})

let consoleErrorSpy = null
beforeEach(() => {
  consoleErrorSpy = jest.spyOn(global.console, 'error')
})

afterEach(() => {
  expect(consoleErrorSpy).not.toHaveBeenCalled();
})

test('Index page matches snapshot', () => {
  const component = renderer.create(
    <Provider store={store}>
      <IndexPage></IndexPage>
    </Provider>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
