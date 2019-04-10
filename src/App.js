import React, { Component } from 'react';
import Navbar from "./Navbar";
import {BrowserRouter ,Route,Switch,Link }  from "react-router-dom"
//import './App.css';

import Aboutus from "./Aboutus"
import  Home from "./Home"
import  Tourism from "./Tourism"
import  Destination from "./Destination"

import Guide from "./Guide"
import BeaGuide from "./BeaGuide"
import Profile from "./profile"
import Login from "./login"
import Signup  from "./signup"
class App extends Component {




  render() {
    return (
         <BrowserRouter>  
      <div className="App">
      <Navbar />
 
      <Switch>
       
      <Route exact path="/" component={Home}  />
      <Route path="/about" component={Aboutus}  />
      <Route path="/tourism" component={Tourism}  />
      <Route path="/destination" component={Destination}  />

      <Route  path="/guide" component={Guide}  />
      <Route path="/beaguide" component={BeaGuide}  />
      <Route path="/profile" component={Profile}  />
      <Route path="/login" component={Login}  />
      <Route path="/signup" component={Signup}  />
      </Switch>

      <p></p>


       


      </div>
      </BrowserRouter>
    );
  }
}

export default App;
