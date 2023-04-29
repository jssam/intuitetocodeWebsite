import { Router, Switch,Route } from "react-router-dom";
import Main from "./components/layout/Main";
// import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import { BrowserRouter } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import GetingStarted from "./pages/GetingStarted";
import Loops from "./pages/Loops";
import FuncArray from "./pages/FuncArray";
import Recursion from "./pages/Recursion";
import StackAQues from "./pages/StackAQues";
import Oops from "./pages/Oops";
import LinkedList from "./pages/LinkedList";
import Tree from "./pages/Tree";
import Graph from "./pages/Graph";
import HashMap from "./pages/HashMap";
import Dp from "./pages/Dp";

function App() {
  return (
  
    <div className="App">
    <BrowserRouter>
      <Switch>
        
        <Main>
        <Route exact path="/intuitetocodeWebsite/" component={DashBoard} />
          {/* <Route exact path="/" component={()=>PilotDetails} /> */}
          <Route exact path="/getting-started" component={GetingStarted} /> 
          <Route exact path="/loops-patterns" component={Loops} /> 
          <Route exact path="/functions-arrays-strings" component={FuncArray} /> 
          <Route exact path="/recursion" component={Recursion} /> 
          <Route exact path="/stack-ques" component={StackAQues} /> 
          <Route exact path="/oops" component={Oops} /> 
          <Route exact path="/linkedlist" component={LinkedList} /> 
          <Route exact path="/tree" component={Tree} /> 
          <Route exact path="/bst" component={Bst} /> 
          <Route exact path="/graph" component={Graph} /> 
          <Route exact path="/hashmap-heap" component={HashMap} /> 
          <Route exact path="/dynamic-programming" component={Dp} /> 

        </Main>
      </Switch>
    </BrowserRouter>
  </div>
  );
}

export default App;

