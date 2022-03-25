import {BrowserRouter as Router, Route} from 'react-router-dom';
import {NavBar, LandingPage} from "./components/index.js";
import React from "react";
import './vars.css';

function App() {
  return (
      <Router>
        <div id='app'>
          <Route path='/' component={NavBar}/>
          <Route exact path='/' component={LandingPage}/>
        </div>
      </Router>
  )
}

export default App;