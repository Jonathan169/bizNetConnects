import React from 'react';
import './assets/App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LandingPage from './components/landing';
import Projects from './components/projects';
import Messages from './components/messages';

function App() {
  return (
    <Router>
       <Switch>
        <Route exact path="/" render={props=><LandingPage {...props} />} />
        <Route exact path="/projects" render={props=><Projects {...props} />} />
        <Route exact path="/messages" render={props=><Messages {...props} />} />
       </Switch>
     </Router>
  );
}

export default App;