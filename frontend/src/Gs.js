import React,{Component} from "react";
import axios from "axios"

class Gs extends Component{
  constructor(){
    super()
    this.state={
    first:"",
    second:"",
    third:"",
    fourth:"",
    fifth:"",
    
    name:""
           
    }

         
  }
  handlesubmit= ()=>{
    var count=0
  if(this.state.first==="NIGHT"){
   count=count+1
    }
      
         if(this.state.second==="NEW DELHI"){
            count=count+1
       }
      
       if(this.state.third==="HOCKEY"){
        count=count+1
         }
        if(this.state.fourth==="TIGER"){
          count=count+1
           }
          if(this.state.fifth==="PEACOCK"){
            count=count+1
             }
        
    
   document.getElementById("a").innerHTML=count

   axios.post("http://127.0.0.1:8085/process_post", {
    score:count,
    name:`${this.state.name}`
  });
 
}
      handlefirst= event =>{
        this.setState({
          first:event.target.value
                 
        })
      }
      handlesecond= event =>{
        this.setState({
      second:event.target.value,
       })
      }
      handlethird= event =>{
        this.setState({
      third:event.target.value,
       })
      }
      handlefourth= event =>{
        this.setState({
      fourth:event.target.value,
       })
      }
      handlefifth= event =>{
        this.setState({
      fifth:event.target.value,
       })
      }
      handlename= event =>{
        this.setState({
      name:event.target.value,
       })
      }
  
render(){
  return(
    <div>
      <div>
      NAME:<input type="text" onChange={this.handlename} />
    
      
    </div>
 <p>Q1-Opposite of day?</p>
 Ans<input type="text" name="first" onChange={this.handlefirst} />
 <p>Q2-Capital of india?</p>
 Ans<input type="text" name="second" onChange={this.handlesecond}/>
 <p>Q3-India's National Game?</p>
 Ans<input type="text" name="third" onChange={this.handlethird}/>
 <p>Q4-India's National Animal?</p>
 Ans<input type="text" name="fourth" onChange={this.handlefourth}/>
 <p>Q5-India's National bird?</p>
 Ans<input type="text" name="fifth" onChange={this.handlefifth}/><br/><br/>
 <button type="button"  onClick={() =>this.handlesubmit()} >Submit</button>
    <br/>
       COUNT:  <p id="a"> </p>
       
    
    </div>
  )
}

}
export default Gs;