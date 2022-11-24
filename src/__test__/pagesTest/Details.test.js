import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../redux/configureStore';

import Details from '../../pages/Details';

test('renders correctly Header component', () => {
  const det = renderer.create(
    <BrowserRouter>
      <Provider store={store}>
        <Details />
      </Provider>
    </BrowserRouter>
  ).toJSON();
  expect(det).toMatchSnapshot();
});