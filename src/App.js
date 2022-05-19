import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import userEvent from '@testing-library/user-event';
import {ClickCounter} from './component/ClickCounter';
import {TextList} from './component/TextList';
import { Clock } from './component/Clock';
// import {StateExamp} from './component/States'
import {Timer_1} from './component/Timer_1';
import {Forms} from './component/Forms';
import {TodoApp} from './component/TodoApp';


// const textItems = ['deah','to','all', 'of', 'us'];
// const elems = textItems.map(((item)=><li>{item}</li>))
let val = 1;
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      textItems: ['deah','to','all', 'of', 'us'],
      val: 1
    }    
  }
  render(){
    return(
      <div className="App">
      <header className="App-header">
         {/* <ClickCounter increment={this.state.val}/> */}
         {/* <ul>{elems}</ul> */}
        {/* <TextList items={this.state.textItems}/> */}
        <Clock/>
        <Timer_1/>
        <Forms />
        {/* <TodoApp /> */}
        
      </header>
    </div>
    )
  }
}

export default App;
