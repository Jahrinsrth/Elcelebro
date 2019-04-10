import React ,{Component }  from "react";
import {Link,Route,BrowserRouter,Switch} from "react-router-dom"

class Profile extends Component{
    render() {
         
      return(
  <BrowserRouter> 
  <div> 
     <h4> Create profile </h4>
  <form>
    <label> Enter the name </label>
     <input type="text" />

    <label> Enter the  Mobile number</label>
     <input type="text" />
  
     <label> Comapnay name </label>
     <input type="text" />

     <label> Years of experience </label>
     <input type="text" />

     <label> Number of places guided  </label>
     <input type="text" />

     <label> No of tourist guided </label>
     <input type="text" />

     <a class="waves-effect waves-light btn">submit</a>
  </form>

 
  </div>
  </BrowserRouter>

      );
    }
}

export default Profile;