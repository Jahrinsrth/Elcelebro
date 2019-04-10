import React ,{Component }  from "react";
import {Link,Route,BrowserRouter,Switch} from "react-router-dom"

class Profile extends Component{
    render() {
         
      return(
  <BrowserRouter> 
  <div> 
      <Switch>
      <Route path="/home/profile" component={Profile}  />
     </Switch>
   

  <h5> profile </h5>
  </div>
  </BrowserRouter>

      );
    }
}

export default Profile;