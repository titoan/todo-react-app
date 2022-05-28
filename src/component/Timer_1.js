import React from "react";

export class Timer_1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 0,
      sec: 0,      
    };

    this.timerStrart = this.timerStrart.bind(this);
  }

  timerStrart() {    
    this.timerID = setInterval(() => this.increment(), 1000);
  }

  timerStop = () => {
    clearInterval(this.timerID);
  };

  timerClear = () => {
    this.setState({ min: 0, sec: 0 });
  };

  increment() {
    this.setState({
      sec: this.state.sec + 1,
    });

    if (this.state.sec === 59) {
      this.setState( {min: this.state.min + 1});
      this.setState({ sec: 0 });
    }
  }
  

  render() {
    return (
      <div className="container d_flex fd_column jc_center timer_1">
        <Time sec={this.state.sec} min={this.state.min} />
        <div className="container">
          <button onClick={this.timerStrart}>Start</button>
          <button onClick={this.timerStop}>Stop</button>
          <button onClick={this.timerClear}>Clear</button>
        </div>
        {/* <TimerButtons timerStart={this.timerStrart}/> */}
      </div>
    );
  }
}

// class TimerButtons extends React.Component{
//   constructor(props){
//     super(props)
//   }
//   render(){
//     return(
//       <div className="container">
//           <button onClick={this.props.timerStrart}>Start</button>
//           <button onClick={this.timerStop}>Stop</button>
//           <button onClick={this.timerClear}>Clear</button>
//         </div>
//     )
//   }
// }

class Time extends React.Component {
  render() {
    if(this.props.min <= 9 && this.props.sec <= 9){
        return(
            <div className="container d_flex jc_center time-container">
                    <div className="timer-box">0{this.props.min}</div>
                    <div className="delimitre">:</div>
                    <div className="timer-box">0{this.props.sec}</div>
                </div>
        )
    }
    else if (this.props.min <= 9){
        return(
            <div className="container d_flex jc_center time-container">
                    <div className="timer-box">0{this.props.min}</div>
                    <div className="delimitre">:</div>
                    <div className="timer-box">{this.props.sec}</div>
                </div>
        )
    }else if(this.props.min > 9 && this.props.sec <= 9){
        return(
            <div className="container d_flex jc_center time-container">
                    <div className="timer-box">{this.props.min}</div>
                    <div className="delimitre">:</div>
                    <div className="timer-box">0{this.props.sec}</div>
                </div>
        )
    }else{
        return(
            <div className="container d_flex jc_center time-container">
                    <div className="timer-box">{this.props.min}</div>
                    <div className="delimitre">:</div>
                    <div className="timer-box">{this.props.sec}</div>
                </div>
        )
     }
  }
}
