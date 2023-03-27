
import './App.css';



import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";

const App = ()=> {
  const apiKey = '81088c91ea8e483a85d05a5f89a3ec5c'

  const [progress , setProgress] = useState(0)
  

  
    return (
      <div>
        <Router >
        <Navbar/>
       
        
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize = {6}  category = "general" /></Route>
          <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" pageSize = {6}  category = "business" /></Route>
          <Route exact path="/Sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize = {6}  category = "sports" /></Route>
          <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize = {6}  category = "entertainment" /></Route>
          <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" pageSize = {6}  category = "health" /></Route>
          <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" pageSize = {6}  category = "science" /></Route>
          <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize = {6}  category = "technology" /></Route>
          <Route exact path="/general"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize = {6}  category = "general" /></Route>
        </Switch>
        </Router>
      </div>
  );

    
    }

    export default App;
