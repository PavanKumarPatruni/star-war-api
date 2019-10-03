import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './app.scss';

import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import NotFound from './components/not_found/NotFound';

const App = () => {

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
