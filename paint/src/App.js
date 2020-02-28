import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar } from './components/Navbar'
import { Login } from './components/Login'
import { Register } from './components/Register'


function App() {
  return (
    <Router>
        <Navbar />

        <Switch>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        </Switch>
    </Router>
  );
}

export default App;