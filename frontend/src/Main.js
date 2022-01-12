import App from './App'
import './Main.css'

import Score from './Score'
import React,{Component} from "react";
import  {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'
class Main extends Component {
  constructor(){
    super()
  this.state={
  
    
  }
  

  }
  

  render(){
  return (
    <div >
      <div >
      <Router >
        <div id="route">
        <Link to="/d">HOME</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/k">SCORE</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/f">MOCKTEST</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/g">CONTACT</Link>
      </div>
      <Switch >
        <div id="main">
        
        <Route exact path="/f" component={App}></Route>
        <Route exact path="/k" component={Score}></Route>
        
        </div>
      </Switch>
      </Router>
    </div>
    
    </div>
  );
}
}
export default Main;