import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Finder } from './components/finder';
import { Counter } from './components/counter';
import { Sequencer } from './components/sequencer';
import { Nav } from './components/nav';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <Pages />
      </Router>
    </Provider>
  );
}

export default App;

const Pages = () => (
  <div>
    <Switch>
      <Route path="/sequencer">
        <Sequencer />
      </Route>
      <Route path="/users">
        <Finder />
      </Route>
      <Route path="/">
        <Counter />
      </Route>
    </Switch>
  </div>
);
