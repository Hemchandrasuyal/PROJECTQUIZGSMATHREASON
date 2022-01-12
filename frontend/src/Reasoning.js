import React,{Component} from "react";
import axios from "axios"
class Reasoning extends Component{
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
    if(this.state.first==="5"){
   count=count+1
    }
      
          if(this.state.second==="6"){
            count=count+1
       }
      
       if(this.state.third==="7"){
        count=count+1
         }
         if(this.state.fourth==="8"){
          count=count+1
           }
          if(this.state.fifth==="9"){
            count=count+1
             }
        
    
   
   document.getElementById("a").innerHTML=count

  
   axios.post("http://127.0.0.1:8085/process_postr", {
    scoreR:count,
    namer:`${this.state.name}`
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
 <p>Q1-Comple the series 1,2,3,4..?</p>
 Ans<input type="text" name="first" onChange={this.handlefirst} />
 <p>Q2-Complete the series 2,3,4,5..?</p>
 Ans<input type="text" name="second" onChange={this.handlesecond}/>
 <p>Q3-Complete the series 3,4,5,6..?</p>
 Ans<input type="text" name="third" onChange={this.handlethird}/>
 <p>Q4-Complete the series 4,5,6,7..?</p>
 Ans<input type="text" name="fourth" onChange={this.handlefourth}/>
 <p>Q5-Complete the series 5,6,7,8..?</p>
 Ans<input type="text" name="fifth" onChange={this.handlefifth}/><br/><br/>
 <button type="button"  onClick={() =>this.handlesubmit()} >Submit</button>
    <br/>
       COUNT:  <p id="a"> </p>
       
    
    </div>
  )
}

}
export default Reasoning;