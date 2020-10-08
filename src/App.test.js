import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/index';


afterEach(cleanup);

it('App component renders correctly', () => {
  const storeData = {

  }
  const app = renderer
      .create(<Provider store={store}>
        <App />
      </Provider>)
      .toJSON();
  expect(app).toMatchSnapshot();
});
