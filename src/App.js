import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './App.css';

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import NotFound from './components/NotFound';

function App() {

  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard}/>
          <Route component={NotFound} />
        </Switch>
    </Router>
  );
}

export default App;
