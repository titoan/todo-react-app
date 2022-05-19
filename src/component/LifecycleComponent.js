// import React from "react";
import { Component } from "react";

class LifecycleComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            val:'some val'
        }
    }

    // Срабатывает сразу после монтирования. То есть после вставки компонента в DOM. В этом методе должны происходить действия, который требуют наличие DOM - узщлов. Хорошее место для создания сетевых запросов и настроки подписок.
    componentDidMount(){}

    componentDidUpdate(){
        
    }
    
    render(){
        return 
    }
}

