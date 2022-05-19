import React from "react";

export class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
      num: 1,
    };
  }


  //Методы жизненного цикла [lifecycle methods] и [Состояния жизннеого цикла]
  componentDidMount(){
    // Когда компонент будет смонтирован будет исполнтятся следущее выражение
    this.timerID = setInterval(()=>this.tick(), 1000);    
  }

  componentWillUnmount(){
      // Когда компонент будет отмонтирован будет исполнтятся следущее выражение
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({
      date: new Date(),
    });    
  }  

  render() {
    return (      
        <div className="container">
          <h1>death to all of us</h1>
          <h2>This is death time {this.state.date.toLocaleTimeString()}</h2>              
        </div>             
    );
  }
}