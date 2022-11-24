import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../redux/configureStore';

import Header from '../../components/Header';

test('renders correctly Form component', () => {
  const header = renderer.create(
    <BrowserRouter>
      <Provider store={store}>
        <Header title={[]}/>
      </Provider>
    </BrowserRouter>
  ).toJSON();
  expect(header).toMatchSnapshot();
});