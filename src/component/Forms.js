import React from "react";

export class Forms extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value: "",
            textItems: [],
        }        
        this.handleChange = this.handleChange.bind(this);        
        this.noteDown = this.noteDown.bind(this);        
        this.saveList = this.saveList.bind(this);        
    }

    componentDidUpdate(){
        this.saveList()
    }

    componentDidMount(){
        if(localStorage.getItem("list")){
            const list = JSON.parse(localStorage.getItem("list"))
            this.setState({textItems: list})
        }        
    }

    saveList(){        
        localStorage.setItem('list', JSON.stringify(this.state.textItems));        
    }

    handleChange(event){
        this.setState({value: event.target.value})    
    }

    noteDown(e){
        e.preventDefault();
        if (this.state.value.length === 0) {            
            return;
          }

          const newItem = {
            text: this.state.value,
            id: Date.now()
          };

          this.setState(state => ({
            textItems: state.textItems.concat(newItem),
            value: "",
                  
          }));
    }

    clearList(){
        localStorage.clear();
    }

    render(){
        return  (
            <form onSubmit={this.handleSubmit} className="add-list">                
                <MyNote text={this.state.textItems}/>
                <label>
                    Notes:
                    <input type="text" name="name" onChange={this.handleChange} value={this.state.value}/>
                </label>
                <input type="submit" value="Note down" onClick={this.noteDown}/>
                <input type="submit" value="Clear list" onClick={this.clearList}/>
            </form>
        )
    }
}

class MyNote extends React.Component{
    render(){      
        return (
            <div>{this.props.text.map(item => (
                <p>{item.text}</p>                
              ))}</div>
        )        
    }
}

