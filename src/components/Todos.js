import React, {Component} from 'react';
import { EventEmitter } from "events";
import todoStore from "../components/Store/TodosStore";
import dispatcher from "../Pages/Dispatcher";

export default class Todos extends React.Component{
    constructor(){
        super();
        this.state = {
            todos: todoStore.getAll(),
        };
    }

    componentWillMount(){
        todoStore.on("change", () => {
            this.getTodos = this.getTodos.bind(this);
           console.log("count", todoStore.listenerCount("change"));
        });
    }


    componentWillUnMount(){
        todoStore.removeListerner("change", this.getTodos);
    }

    createTodo(){
        todoStore.createTodo(Math.random(), 'Madhulika');
    }

    getTodos(){
        this.setState({
            todos: todoStore.getAll(),
        });
    }

     deleteTodos(){
        todoStore.deleteTodo();
    }   

    render(){
        const { todos } = this.state;
        const TodoComponents = todos.map((todos) => {
                return <li key={todos.id}>{todos.text}</li>;
        });
        return(
            <div>
                <button onClick={this.createTodo.bind(this)}>Create</button>
  
                &nbsp;&nbsp;
                <button onClick={this.deleteTodos.bind(this)}>Delete</button>
                <h1>Todos</h1>
                <ul>{TodoComponents}</ul>
            </div>
        );
    }
}