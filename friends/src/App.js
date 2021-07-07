import React from 'react';
import Login from './components/Login'
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import FriendList from "./components/FriendList"
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
            <Link to="/protected"> Friends</Link>
          </li>
        </ul>
        <Switch>
        <PrivateRoute exact path="/protected" component={FriendList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
  );
}

export default App;
