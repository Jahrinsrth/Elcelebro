import React from "react";
 import {Link} from "react-router-dom"
 

const Navbar = () => {
  
    return(
        <nav className="nav-wrapper grey darken-3" > 
        <div className="container"> 
   
         <ul className="left">
       
         <li > <Link to="/"> Home </Link> </li>
          <li > <Link to="/about"> About us </Link> </li>
         <li> <Link to="/tourism"> Tourism </Link></li>
         <li>  <Link to="/destination"> Destinations  </Link></li>

        
         


       
              
         </ul>

           <ul className="right">
           <li> <Link to="/guide"> Guide </Link></li>
           <li>  <Link to="/beaguide"> Be a Guide  </Link></li>
           <li> <Link to="/profile"> Profile </Link></li>
           <li>  <Link to="/login" class="waves-effect waves-light btn">Login</Link> </li>
           <li>  <Link to="/signup" class="waves-effect waves-light btn">Sign up</Link> </li>
           
           </ul>
  
           <ul className="sidenav"  id="mobile-links">
           <li > <a> About us </a> </li>
           <li> <a> Tourism </a></li>
           <li>  <a> Destinations  </a></li>     
           <li>  <a class="waves-effect waves-light btn">Login</a> </li>
           <li>  <a class="waves-effect waves-light btn">Sign up</a> </li>   
           </ul>

        </div>
           
      </nav>
    )

}

export default Navbar;