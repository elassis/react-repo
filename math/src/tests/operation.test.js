import React from 'react';
import renderer from 'react-test-renderer';
import Operation from '../components/operation'

it('renders correctly', () => {
  const tree = renderer
    .create(<Operation />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});