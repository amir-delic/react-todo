import React, {Component} from 'react';
import './todo.css';

class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            task:this.props.task
        }
        this.hendleRemove = this.hendleRemove.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.hendleUpdate = this.hendleUpdate.bind(this);
        this.hendleChange = this.hendleChange.bind(this);
        this.hendleCompleted = this.hendleCompleted.bind(this);
    }
    hendleUpdate(evt){
        evt.preventDefault();
       this.props.updateTodo(this.props.id, this.state.task);
       this.setState({isEditing:false})
    }
    hendleChange(evt) {
        this.setState({
            [evt.target.name]:evt.target.value
        })
    }
    hendleRemove(){
        this.props.removeTodo(this.props.id)
    }
    toggleEdit(){
        this.setState({isEditing:!this.state.isEditing})
    }
    hendleCompleted(){
        this.props.toggleCompleted(this.props.id)
    }
    render(){
        let result;
        if(this.state.isEditing){
            result = <form className="todo-edit" onSubmit={this.hendleUpdate}>
                          <input type="text"
                          value={this.state.task}
                          name="task"
                          onChange={this.hendleChange}
                          spellcheck="false"
                          />
                          <button onClick={this.toggleEdit}>Back</button>
                          <button>Save</button>
                     </form>
        } else {
            result = <div className="todo">
                          <li
                            onClick={this.hendleCompleted}
                            className={this.props.completed ? 'done' : ""}>
                            {this.props.task}
                            </li>
                            <button onClick={this.toggleEdit}><i class="fas fa-pen"></i></button>
                            <button onClick={this.hendleRemove}><i class="fas fa-trash-alt"></i></button>
                          
                     </div>
        }
        return result;
    }
}

export default Todo;