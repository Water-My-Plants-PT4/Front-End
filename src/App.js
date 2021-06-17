import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './components/Login';
import Navigation from './components/Navigation';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />

      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
