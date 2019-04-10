import React ,{Component }  from "react";
class Guide extends Component{

  state={
    
       name:"fasrin",
       number:4,
       companyName:"abc",
       Yearsofexperience: 4,
       noOfPlacesguided:4,
       noOftouristGuided:8
    }

    render() {
      return(
  <div> 
  <h4> Guide list </h4>

  <div> name : {this.state.name} </div>
  <div> phone number:{this.state.number } </div>
  <div> Company name : {this.state.companyName}</div>
  <div> Years of Experience : {this.state.Yearsofexperience}</div>
  <div> no of place guided : {this.state.noOfPlacesguided}</div>
  <div> no of tourist guided : {this.state.noOftouristGuided}</div>
    

  </div>


      );
    }
}

export default Guide;