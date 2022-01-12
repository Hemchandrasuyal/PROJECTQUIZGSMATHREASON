import React,{Component} from "react";
import Gs from './Gs'
import Maths from './Maths'
import Reasoning from './Reasoning'
import './App.css';
import  {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'
class App extends Component {
  constructor(){
    super()
  this.state={}
   
  }
  
  
  render(){
  return (
    <div >
      <div >
      <Router >
        

        <div id="route1">
        <Link to="/a">Gs </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/b">Maths</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/c">Reasoning</Link>
      </div>
      <Switch >
        <div >
        <Route exact path="/a" component={Gs}></Route>
        <Route exact path="/b" component={Maths}></Route>
        <Route exact path="/c" component={Reasoning}></Route>
        </div>
      </Switch>
      </Router>
    </div>
    </div>
  );
}
}
export default App;
