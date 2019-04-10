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

      <Route  path="/home/guide" component={Guide}  />
      <Route path="/home/beaguide" component={BeaGuide}  />
      </Switch>

      <p></p>

 



      </div>
      </BrowserRouter>
    );
  }
}

export default App;
