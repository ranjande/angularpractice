import { EventEmitter } from "events";

import dispatcher from "../../Pages/Dispatcher";

class TodoStore extends EventEmitter{
    constructor(){
        super()
        this.todos= [
            {
                id: 111,
                text: "Go Shopping",
                complete: false
            },
            {
                id: 112,
                text: "Pay Bills and go home",
                complete: false
            }
        ];
    }

    getAll(){
        return this.todos;
    }

    createTodo(id, text){
        this.todos.push({
            id,
            text,
            complete: false
        });
        this.emit("change");
    }

    deleteTodo(id){
        this.todos.pop();
        this.emit("change");
    }
    

/*

    handleActions(actionType , _todoObj){            
        console.log(actionType);
        switch(actionType){
            case "CREATE_TODO" : {
                this.createTodo(_todoObj.id, _todoObj.text);
                break;
            }
            case "RELOAD_TODO" : {
                this.deleteTodo(_todoObj.id);
               // this.todos = _todoObj.todos;  
            }

        }
    }*/
}

const todoStore = new TodoStore;
//dispatcher.register(todoStore.handleActions.bind(todoStore));
//window.todoStore = todoStore;
export default todoStore;