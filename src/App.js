import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Clock } from './component/Clock';
import {Timer_1} from './component/Timer_1';
import {ToDo} from './component/Forms'

class App extends React.Component{
  constructor(props){
    super(props)   
  }
  render(){
    return(
      <div className="App">
      <header className="App-header">     
        <Clock/>
        <Timer_1/>
        <ToDo/>        
      </header>
    </div>
    ) 
  }
}

export default App;
