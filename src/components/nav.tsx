import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/sequencer">Sequencer</Link>
    <Link to="/users">Users</Link>
  </nav>
);
