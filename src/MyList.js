import { Component } from "react";
import empty from './empty.jpg';
import greenCheck from './green-check.png';
export class MyList extends Component {
    
state = {
    userInput: '',
    myList: [],
    icon: empty
}
onFormSubmit (e) {
    e.preventDefault();
}
onChangeEvent(e) {
    this.setState({userInput:e});
}
addItem(input) {
    if (input==='') {
        alert ('Please enter some information!');
    } else {
        let listArray = this.state.myList;
        listArray.push({
            todo: input,
            done: false
        });
        this.setState ({myList: listArray, userInput:''});
    }   
}
clearItem() {
    let listArray = this.state.myList;
    listArray = [];
    this.setState({myList: listArray});
}
isChecked (i) {
    const todos = [];
    this.state.myList.forEach((todo, index) => {
        index === i ? todos.push({...todo, done: true}) : todos.push(todo)})
    this.setState({myList: todos})
}
render () {
    return (
        <div className="container-my-list">
            <form onSubmit={this.onFormSubmit}>
                <input placeholder="Enter something..."
                type='text' value={this.state.userInput}
                onChange={(e) => {this.onChangeEvent(e.target.value)}} />
                <button onClick={() => this.addItem(this.state.userInput)}>ADD</button>
                <ul>
                    {this.state.myList.map((item, index)=>(
                    <li onClick={() => this.isChecked(index)} key={index} className={item.done === true ? "crossed" : null}>{item.todo}<img src={item.done === true ? greenCheck : empty} width='25px' alt="check"/></li>
                    ))}
                </ul>
                <button onClick={() => this.clearItem(this.state.userInput)}>CLEAR ALL</button>
            </form>

        </div>
    )
}
}