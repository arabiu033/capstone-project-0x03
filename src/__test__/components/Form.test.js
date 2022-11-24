import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../redux/configureStore';

import Form from '../../components/Form';

test('renders correctly Form component', () => {
  const form = renderer.create(
    <BrowserRouter>
      <Provider store={store}>
        <Form />
      </Provider>
    </BrowserRouter>
  ).toJSON();
  expect(form).toMatchSnapshot();
});