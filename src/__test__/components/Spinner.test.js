import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import Spinner from '../../components/Spinner';

test('renders correctly Header component', () => {
  const header = renderer.create(
    <MemoryRouter>
      <Spinner />
    </MemoryRouter>,

  ).toJSON();
  expect(header).toMatchSnapshot();
});