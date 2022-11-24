import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import Card from '../../components/Card';

test('renders correctly Header component', () => {
  const card = renderer.create(
    <MemoryRouter>
      <Card />
    </MemoryRouter>,

  ).toJSON();
  expect(card).toMatchSnapshot();
});
