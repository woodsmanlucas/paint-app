import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar } from './components/Navbar'
import { Login } from './components/Login'

function App() {
  return (
    <Router>
        <Navbar />

        <Switch>
        <Route path="/Login">
          <Login />
        </Route>
        </Switch>
    </Router>
  );
}

export default App;