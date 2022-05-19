import logo from './logo.svg';
import './App.css';
import React from 'react';
import userEvent from '@testing-library/user-event';



// Указание значение по умолчанию через деструктуризацию
const MyComponent = ({text = 'deafault death'}) =>{
  return <p>{text}</p>
};

// Указание значение по умолчанию через оператор "или"
const MyComponent2 = (props) =>{
  return <p>{props.text || 'default death'}</p>
};

function FuncComponent(props){
  return (
    <div className='container'>
      <p>Death to all of us</p>
    </div>
  );
}

// Классовый компонент 
class MyClassComponent extends React.Component{
  render(){
    return <p>{this.props.text || 'default class death'}</p>
  }
}

const element = <h1 className='ann' tabIndex={2}>Немедленно в укрытие</h1>;

class App extends React.Component{
  render(){
    return(
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyComponent text="Death to all of us"/>        
        <MyComponent text="smells like global warming"/>
        <MyComponent2/>
        <MyComponent2 text = "А ты хуле думал?"/>
        <MyClassComponent/>
        <MyClassComponent text="Ну а хуле"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {element}
        <FuncComponent/>
      </header>
    </div>
    )
  }
}

export default App;
