import React, {Component} from 'react';
import './todoform.css';
import uuid from 'uuid/v4';

class Todoform extends Component {
    constructor(props){
        super(props);
        this.state = {
            task:""
        }
        this.hendleChange = this.hendleChange.bind(this);
        this.hendleSubmit = this.hendleSubmit.bind(this);
    }
    hendleChange(evt) {
        this.setState({
            [evt.target.name]:evt.target.value
        })
    }
    hendleSubmit(evt) {
        evt.preventDefault();
        if(this.state.task !== "") {
        const newState = {...this.state, id: uuid(), completed: false};
        this.props.changeTodos(newState);
        this.setState({task:""});
    }
    }
    render(){
        return (
            <div className="todoform">
           <form  onSubmit={this.hendleSubmit}>
               <input
               placeholder="New Todo..."
               id="todo"
               name = "task"
               value = {this.state.task}
               onChange={this.hendleChange}
               spellcheck="false"
               />
               <button>Add Todo!</button>
           </form>
           </div>
        )
    }
}

export default Todoform;