import {BrowserRouter as Router, Route} from 'react-router-dom';
import {NavBar, LandingPage, Footer} from "./components/index.js";
import React from "react";
import './vars.css';

function App() {
  return (
      <Router>
        <div id='app'>
          <Route path='/' component={NavBar}/>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/' component={Footer}/>
        </div>
      </Router>
  )
}

export default App;