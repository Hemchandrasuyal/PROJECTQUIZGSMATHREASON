import React,{Component} from "react";
import axios from 'axios'
const api=axios.create({
    baseURL:"http://127.0.0.1:8085/readGs"
  })
  const apim=axios.create({
    baseURL:"http://127.0.0.1:8085/readmaths"
  })
  const apir=axios.create({
    baseURL:"http://127.0.0.1:8085/readr"
  })
class Score extends Component{
  constructor(){
    super()
    this.state = {
  box:[],
  boxm:[],
  boxr:[]

    }
    api.get('/').then(res=>{
        console.log(res.data)
        this.setState({
          box:res.data
        })
      })
      apim.get('/').then(res=>{
        console.log(res.data)
        this.setState({
          boxm:res.data
        })
      })
      apir.get('/').then(res=>{
        console.log(res.data)
        this.setState({
          boxr:res.data
        })
      })
  }


  
render(){
  return(
    <div>

  <i> GS:</i>
{this.state.box.map(box=><p key={box.id}><b>NAME:</b>{box.name}<br/><b>SCORE</b>{box.score}</p>)}
<i>REASONING:</i>
{this.state.boxr.map(boxr=><p key={boxr.id}><b>NAME:</b>{boxr.namer}<br/><b>SCORE:</b>{boxr.scorer}</p>)}
<i>MATHS:</i>
{this.state.boxm.map(boxm=><p key={boxm.id}><b>NAME:</b>{boxm.namem}<br/><b>SCORE:</b>{boxm.scorem}</p>)}
    </div>
  )
}

}
export default Score