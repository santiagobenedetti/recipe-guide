import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import React, {useEffect, useState} from "react";
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
import axios from "axios";

function App() {

  const [isLogged, setIsLogged] = useState(false);

  useEffect(async () => {
    await axios.post('http://localhost:3001/users/isLog', {token: sessionStorage.getItem("token")})
        // eslint-disable-next-line no-unused-expressions
        .then(res => {
          console.log("is logged:", res.data);
          if(res.data) {setIsLogged(true)}
        });
  },)

  console.log('renderize home');

  return (
      <Router>
        <Route path='/'>
          <NavBar isLogged={isLogged} setLogged={setIsLogged}/>
        </Route>
        <section id='app'>
          <Route exact path='/' component={LandingPage}/>
          <Route exact path='/recipes' component={Recipes} />
          <Route exact path='/recipes/:id' component={RecipeDetail} />
          <Route exact path='/login'>
            {isLogged ? <Redirect to={'/home'}/> : <Login />}
          </Route>
          <Route exact path='/register' component={Register} />
          <Route exact path='/home' component={Home} /> {/* TODO -> seguramente eliminar home y hacer otra cosa*/}
          <Route exact path='/favorites'>
            {isLogged ? <div>componente favorites</div> : <Redirect to={'/login'}/>}
          </Route>
        </section>
        <Route path='/' component={Footer}/>
      </Router>
  )
}

export default App;