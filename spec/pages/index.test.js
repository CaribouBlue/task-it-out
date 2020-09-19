import React from 'react';
import renderer from 'react-test-renderer';
import IndexPage from '../../pages/index';

let consoleErrorSpy = null
beforeEach(() => {
  consoleErrorSpy = jest.spyOn(global.console, 'error')
})

afterEach(() => {
  expect(consoleErrorSpy).not.toHaveBeenCalled();
})

test('Index page matches snapshot', () => {
  const component = renderer.create(
    <IndexPage></IndexPage>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
