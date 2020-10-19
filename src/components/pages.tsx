import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Counter } from './counter';
import { Finder } from './finder';
import { Sequencer } from './sequencer';

export const Pages = () => (
  <div>
    <Switch>
      <Route path="/sequencer" component={Sequencer} />
      <Route path="/users" component={Finder} />
      <Route path="/" render={() => <Counter />} />
    </Switch>
  </div>
);
