import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Nav } from './components/nav';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Pages } from './components/pages';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Pages />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
