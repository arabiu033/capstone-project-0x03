import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../redux/configureStore';
import Homepage from '../../pages/Hompage';

test('renders correctly Header component', () => {
  const home = renderer.create(
    <BrowserRouter>
      <Provider store={store}>
        <Homepage setTitle={() => 'func'} />
      </Provider>
    </BrowserRouter>,
  ).toJSON();
  expect(home).toMatchSnapshot();
});
