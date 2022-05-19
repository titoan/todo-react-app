import React from "react";

// Вариант вывода списка №1. При помощи элемента\Через элемент
// const textItems = ['deah','to','all', 'of', 'us'];
// const elems = textItems.map((item)=> <li>{item}</li>);

// Вариант вывода списка №2. Через компонент
// export function TextList(props) {
//   const items = props.items;
//   const elems = items.map((item) => <li>{item}</li>);
//   return <ul>{elems}</ul>;
// }

// Вариант вывода списка №2.1. Передача пропсов через деструктуризацию объекта 
// export function TextList({items}) {    
//     const elems = items.map((item) => <li key={item.toString()}>{item}</li>);
//     return <ul>{elems}</ul>;
//   }



//   const ListItem = (props) =>{   
//     const value = props.val;    
//     return <li>{value}</li>
// }

// // В примере отображенны две эквивалентные записи
// export function TextList({items}) {
//     // const elem = items.map((item) => <ListItem key={item.toString()} val={item}/>)
//     return (
//     <ul>
//         {
//         items.map((item) => <ListItem key={item.toString()} val={item}/>)   
//         }
//         {/* {elem} */}
//     </ul>
//     )    ;
//   }




// ________________________________________________________________________________
export class TextList extends React.Component{
    constructor(props){
        super(props);        
        this.elems = props.items.map((item)=> <li>{item}</li>)
    }

    render(){
        return (<ul>{this.elems}</ul>)
    }
}
