import React ,{Component }  from "react";

class BeaGuide extends Component{
    render() {
      return(
  <div> 
  <h4> Submit your details</h4>
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
   

      );
    }
}

export default BeaGuide;