import React from "react";

export class Timer_1 extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            min:0,
            sec:0,           
        }
        
        this.timerStrart = this.timerStrart.bind(this);
    }


    timerStrart(){
        this.timerID = setInterval(()=>this.increment(), 1000);
    }

    timerStop = ()=>{
        clearInterval(this.timerID)
    }

    timerClear = ()=>{
        this.setState({min: 0, sec: 0});
        
    }

    increment(){
        this.setState(
            {                
                sec: this.state.sec + 1
            }
        )

        if(this.state.sec === 60){
            this.setState({min: this.state.min + 1})
            this.setState({sec:0})
        }
    }
    
    render(){
        return (
            <div className="container d_flex fd_column jc_center timer_1">
                
                <Time sec={this.state.sec} min={this.state.min}/>
                <div className="container">
                    <button onClick={this.timerStrart}>Start</button>
                    <button onClick={this.timerStop}>Stop</button>
                    <button onClick={this.timerClear}>Clear</button>                               
                </div>
               
            </div>
        )
    }
}

class Time extends React.Component{
    render(){
        return(
            <div className="container d_flex jc_center">
                    <div>{this.props.min}</div>
                    <div className="margin_10">:</div>
                    <div>{this.props.sec}</div>
                </div>
        )
    }
}