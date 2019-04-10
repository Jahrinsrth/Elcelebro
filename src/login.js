import React ,{Component }  from "react";
import {Link,Route,BrowserRouter,Switch} from "react-router-dom"

class Login extends Component{
    render() {
         
      return(
  <BrowserRouter> 
  <div> 
     <h4> log in </h4>
  <form>
    <label> Enter the user name </label>
     <input type="text" />

    <label> Enter the  password</label>
     <input type="password" />

     <a class="waves-effect waves-light btn">log in</a>
  </form>

 
  </div>
  </BrowserRouter>

      );
    }
}

export default Login;