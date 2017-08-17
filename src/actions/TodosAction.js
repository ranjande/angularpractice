import dispatcher from "../Pages/Dispatcher";

export function createTodo(id, text){
    dispatcher.dispatch({
        type: "CREATE_TODO",
        id,
        text,
    });
}

export function deleteTodo(id){
    dispatcher.dispatch({
        type: "DELETE_TODO",
        id,
    });
}

export function receiveTodos(){

    dispatcher.dispatch(
        {type: "RELOAD_TODO"});
        let imagePath = "../assets/images/";
        setTimeout(() => {
            dispatcher.dispatch({type: "RECEIVE_TODOS", todos :
            [
                {
                    id: 111,
                    text: "Go Shopping and pay bill",
                    complete: false
                },
                {
                    id: 112,
                    text: "Pay Bills and enjoy with your sweet heart",
                    complete: false
                }
            ]});
        }, 1000);
}

