import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Offers from './components/pages/Offers';
import SignUp from './components/pages/SignUp';
import LogIn from './components/pages/LogIn';
import Info from './components/pages/Info';
import Intro from './components/pages/Intro';

function App() {
  return (
    <>
    
    <Router>
      <Switch>
      <Route path="/travel-agency" exact component={Intro} />
        <Route path="/home" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/offers" exact component={Offers} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/log-in" exact component={LogIn} />
        <Route path="/info" exact component={Info} />
      </Switch>
      </Router>

    </>
  );
}

export default App;

