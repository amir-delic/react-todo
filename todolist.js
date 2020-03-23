import React, {Component} from 'react';
import Todo from './todo';
import Todoform from './todoform';
import './todolist.css';

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
        this.change = this.change.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.completed = this.completed.bind(this);
    }
    update(id, updateTask) {
     const updateTodos = this.state.todos.map(todo => {
         if(todo.id === id) {
             return {...todo, task: updateTask};
         }
         return todo;
     });
     this.setState({todos:updateTodos});
    }
    completed(id){
        const updateTodos = this.state.todos.map(todo => {
            if(todo.id === id) {
                return {...todo, completed:!todo.completed};
            }
            return todo;
        });
        this.setState({todos:updateTodos});
    }
    change(newTodo) {
        this.setState(prevState => (
            {todos:[...prevState.todos, newTodo]}
        ))
    }
    remove(id){
        this.setState({todos: this.state.todos.filter(todo => todo.id !== id)})
    }
    render(){
        const todos = this.state.todos.map(todo => <Todo 
             key={todo.id}
             id={todo.id}
             completed={todo.completed}
             task={todo.task}
             toggleCompleted={this.completed}
             removeTodo={this.remove}
             updateTodo={this.update}
             /> )
        return (
            <div className="todolist-container">
                <h1>Todo list!</h1>
                <p>My first complete React Todo app... <i class="fab fa-react"></i> </p>
                <hr></hr>
                <Todoform changeTodos={this.change} />
                <ul>
                  {todos}     
                </ul>  
            </div>
        )
    }
}

export default Todolist;

