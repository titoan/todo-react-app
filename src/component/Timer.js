import React from "react";

export class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: 0,
      min: 0,
      sec: 0,
      stopTimeTrac: `00:00:00`,
    };

    this.timerStrart = this.timerStrart.bind(this);
  }

  timerStrart() {
    this.timerID = setInterval(() => this.increment(), 100);
  }

  timerStop = () => {
    clearInterval(this.timerID);    
   
    this.props.updateData(this.state.stopTimeTrac)
  };

  timerClear = () => {
    this.setState({ min: 0, sec: 0, hour: 0 });
  };

  increment() {
    this.setState({
      sec: this.state.sec + 1,
    });

    if (this.state.sec === 59) {
      this.setState({ min: this.state.min + 1 });
      this.setState({ sec: 0 });
    }

    if (this.state.min === 60) {
      this.setState({ hour: this.state.hour + 1 });
      this.setState({ min: 0 });
    }

    this.setState({ stopTimeTrac: `${this.state.hour}:${this.state.min}:${this.state.sec}`});
  }

  render() {
    return (
      <div className="container d_flex fd_column jc_center timer_1">
        <Time
          sec={this.state.sec}
          min={this.state.min}
          hour={this.state.hour}
        />
        <div className="container">
          <button onClick={this.timerStrart}>Start</button>
          <button onClick={this.timerStop}>Stop</button>
          <button onClick={this.timerClear}>Clear</button>
        </div>
      </div>
    );
  }
}

class Time extends React.Component {
  render() {
    if (this.props.min <= 9 && this.props.sec <= 9) {
      return (
        <div className="container d_flex jc_center time-container">
          <div className="timer-box">0{this.props.hour}</div>
          <div className="delimitre">:</div>
          <div className="timer-box">0{this.props.min}</div>
          <div className="delimitre">:</div>
          <div className="timer-box">0{this.props.sec}</div>
        </div>
      );
    } else if (this.props.min <= 9) {
      return (
        <div className="container d_flex jc_center time-container">
          <div className="timer-box">0{this.props.hour}</div>
          <div className="delimitre">:</div>
          <div className="timer-box">0{this.props.min}</div>
          <div className="delimitre">:</div>
          <div className="timer-box">{this.props.sec}</div>
        </div>
      );
    } else if (this.props.min > 9 && this.props.sec <= 9) {
      return (
        <div className="container d_flex jc_center time-container">
          <div className="timer-box">0{this.props.hour}</div>
          <div className="delimitre">:</div>
          <div className="timer-box">{this.props.min}</div>
          <div className="delimitre">:</div>
          <div className="timer-box">0{this.props.sec}</div>
        </div>
      );
    } else {
      return (
        <div className="container d_flex jc_center time-container">
          <div className="timer-box">0{this.props.hour}</div>
          <div className="delimitre">:</div>
          <div className="timer-box">{this.props.min}</div>
          <div className="delimitre">:</div>
          <div className="timer-box">{this.props.sec}</div>
        </div>
      );
    }
  }
}
