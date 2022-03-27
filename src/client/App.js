import {BrowserRouter as Router, Route} from 'react-router-dom';
import React from "react";
import './vars.css';
import {
  NavBar,
  LandingPage,
  Footer,
  Recipes
} from "./components/index.js";

function App() {
  return (
      <Router>
        <div id='app'>
          <Route path='/' component={NavBar}/>
          <Route exact path='/' component={LandingPage}/>
          <Route exact path='/recipes' component={Recipes} />
          <Route path='/' component={Footer}/>
        </div>
      </Router>
  )
}

export default App;