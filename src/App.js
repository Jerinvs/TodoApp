import React from 'react';
import Todo from './Components/Todo/Todo';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
      
      <Router>
        <Header/> 
        <Route path="/" exact component={Home}/>
        <Route path="/todo" component={Todo}/>
      </Router>
   
    
  );
}

export default App;



