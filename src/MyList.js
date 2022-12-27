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
        listArray.push(input);
        this.setState ({myList: listArray, userInput:''});
    }   
}
clearItem() {
    let listArray = this.state.myList;
    listArray = [];
    this.setState({myList: listArray});
}
isChecked = () => {
    this.setState({
        icon: greenCheck
    })
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
                    <li onClick={this.isChecked} key={index}>{item}<img src={this.state.icon} alt='checklist' className="icon-start"/></li>
                    ))}
                </ul>
                <button onClick={() => this.clearItem(this.state.userInput)}>CLEAR ALL</button>
            </form>

        </div>
    )
}
}