import React ,{Component }  from "react";
import {Link,Route,BrowserRouter,Switch} from "react-router-dom"

class Signup extends Component{
    render() {
         
      return(
  <BrowserRouter> 
  <div> 
     <h4> Sign up</h4>
  <form>
    <label> Enter the Full name </label>
     <input type="text" />
     
     <label> Enter the user name</label>
     <input type="text" />
   
    <label> Enter the  password</label>
     <input type="password" />

     <label> Re-enter the  password</label>
     <input type="password" />

     <a class="waves-effect waves-light btn">Sign up</a>
  </form>

 
  </div>
  </BrowserRouter>

      );
    }
}

export default Signup;