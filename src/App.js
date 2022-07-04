// import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import { Clock } from "./component/Clock";
import { Timer } from "./component/Timer";
import { ToDo } from "./component/ToDo";
// import {Radio} from './component/Radio'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }

  updateData = (value) => {
    this.setState({ data: value })
 }

 componentDidUpdate(){
  console.log(this.state.data)
 }

  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <Clock />
        <Timer updateData={this.updateData}/>
        <ToDo currentTime={this.state.data}/>
      </div>
    );
  }
}

export default App;
