import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../redux/configureStore';

import Field from '../../components/Field';

test('renders correctly Header component', () => {
  const fie = renderer.create(
    <BrowserRouter>
      <Provider store={store}>
        <Field field={{id: 'title', name:'', count: 0}} setTitle={() => 'g'}/>
      </Provider>
    </BrowserRouter>
  ).toJSON();
  expect(fie).toMatchSnapshot();
});