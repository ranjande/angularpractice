import React, {Component} from 'react';
import {applyMiddleware, combineReducers, createStore} from "redux";
import axios from "axios";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { EventEmitter } from "events";
import HeaderLayout from "../components/HeaderLayout";

class reduxPract extends Component {
  constructor() {
    super();

    const logger = (store) => (next) => (actions) => {
        console.log("action fired: ", actions);
        try{
          next(actions);    
        }catch (e) {
            console.log("Error Fired:", e);
        }

    }

    const middleware = applyMiddleware(logger);
   // const store = createStore(reducer, middleware)

    const userReducer = (state={}, actions) => {
        switch(actions.type){
            case "CHANGE_NAME": {
                state = {...state, name: actions.payload}
                break;
            }
            case "CHANGE_AGE" : {
                state = {...state, age: actions.payload}
                break;
            }
        }
        return state;
    };

    const tweetsReducer = (state=[], actions) => {
        return state;
    };

    const reducers = combineReducers({
        user: userReducer,
        tweets: tweetsReducer,
    })
    const store = createStore(reducers);

        store.subscribe(() => {
           console.log(store.getState())
           return "Changed :"+store.getState();      
        })

    store.dispatch({type: "CHANGE_NAME", payload : 21});
    store.dispatch({type: "CHANGE_AGE", payload : 13});
  }

  render() {
    return (
        <div>
        <HeaderLayout />
            <ul className="wrap">
                Hi []
            </ul>
        </div>
    );
  }
}
export default reduxPract;