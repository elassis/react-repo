import React from 'react';
import renderer from 'react-test-renderer';
import Number from '../components/number';

it('renders correctly', () => {
  const tree = renderer
    .create(<Number />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
