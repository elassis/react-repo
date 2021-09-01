import React from 'react';
import renderer from 'react-test-renderer';
import Screen from '../components/screen'

it('renders correctly', () => {
  const tree = renderer
    .create(<Screen />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});