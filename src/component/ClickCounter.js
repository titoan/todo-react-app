import React from "react";

export class ClickCounter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            fetchData1: [1,2,3],
            fetchData2:{
                value: "string",
                data: [4,5,6]
            }
        }
        // Привязка this к методу/обработчику событий
        // this.handleClick = this.handleClick.bind(this);
    }

    // Синтаксис общедоступных полей классов
    // Для обращения к this метода написанны таким образом не требуется привзяка this через bind в теле constructor
    // handleClick = (e)=>{        
    //     console.log(this);
    // }


    // Передача данных при вызове события
    handleClick = (data) =>(e) =>  {      
        this.setState({ count: this.state.count + this.props.increment })

        // Тоже самое, что и запись выше. Но если в метод setState передать в качестве аргумента кол-бэк функцию, которая принимает аргументы state и props при обращении к этим аргументам this не требуется
        // this.setState(function(state,props){            
        //     return {count:state.count + props.increment}
        // })

        this.setState((state, props) =>({fetchData1:[7,8,9]}))
        this.setState((state, props) =>({fetchData2:{
            value: state.fetchData2.value,
            data:[7,8,9]
            }
        }))

        console.log(this.state.fetchData2)
    }

    handleClickUp = (e)=>{
        this.setState({
            count: this.state.count - 1
        })
    }
    
    render(){
        return(
            <div className="container">
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick('data text')}>Increment</button>
                <button onClick={this.handleClickUp}>Discrement</button>
            </div>
        )
    }
}
