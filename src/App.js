import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Registration from './views/registration/Registration';
import Login from './components/Login';
import UserHome from './views/user-home/UserHome';
import PlantAdd from './views/plant-add/PlantAdd';
import PlantEdit from './views/plant-edit/PlantEdit';
// import UserEdit from './views/user-edit/UserEdit';
import Navigation from './components/Navigation';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/sign-up" component={Registration} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/profile" component={UserHome} />
          <PrivateRoute exact path="/create-plant" component={PlantAdd} />
          <PrivateRoute path="/plants/:id" component={PlantEdit} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
