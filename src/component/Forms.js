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
            textItems: state.textItems.concat(newItem), //Добавление элеентов в массив должно происходить при помощи метода concat потому, что тот возвращает новый массив, а не видоизменяет текущий
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
                    <input type="text" name="name" className="all-input" onChange={this.handleChange} value={this.state.value}/>
                </label>
                <input type="submit" value="Note down" onClick={this.noteDown}/>
                <input type="submit" value="Clear list" onClick={this.clearList}/>
            </form>
        )
    }
}

// class MyNote extends React.Component{
//     constructor(props){
//         super(props)
//     }

//     delItem = (e, id)=>{
//         console.log(this.props.text)
//         this.setState({
//             textItems: 0
//         })
//     }

//     render(){      
//         return (
//             <div>{this.props.text.map(item => (
//                 <p key={item.id} className="list-item">
//                     {item.text} 
//                     <span onClick={this.delItem} className="del-item"></span>
//                     </p>                
//               ))}</div>
//         )        
//     }
// }


class MyNote extends Forms{
    constructor(props){
        super(props)
    }

    delItem = (e, id)=>{
        console.log(this.props.text)
        this.setState({
            textItems: 0
        })
    }

    render(){      
        return (
            <div>{this.props.text.map(item => (
                <p key={item.id} className="list-item">
                    {item.text} 
                    <span onClick={this.delItem} className="del-item"></span>
                    </p>                
              ))}</div>
        )        
    }
}