import {BrowserRouter as Router, Route} from 'react-router-dom';
import React from "react";
import './vars.css';
import {
  NavBar,
  LandingPage,
  Footer,
  Recipes,
  RecipeDetail,
  Login,
  Register,
  Home
} from "./components/index.js";

function App() {
  return (
      <Router>
        <Route path='/' component={NavBar}/>
        <section id='app'>
          <Route exact path='/' component={LandingPage}/>
          <Route exact path='/recipes' component={Recipes} />
          <Route exact path='/recipes/:id' component={RecipeDetail} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/home' component={Home} />
        </section>
        <Route path='/' component={Footer}/>
      </Router>
  )
}

export default App;