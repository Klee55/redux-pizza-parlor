import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.jsx';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";


// Reducer PizzaList
const pizzaList = (state = ['pizza', 'anotha pizza', 'anchovy🤢', 'pineapple🤮', 'mushroom🍄'], action) => {
    console.log('in da reducer', state)
    // do a thing function (return = action.payload)
    if (action.type === "REDUCER_NAME") {
        console.log(action.payload);
        return action.payload;
    }
    return state;

}
// End of Reducer PizzaList

const addPizza = (state = [], action) => {
    console.log('in addPizza reducer', state);
    if (action.type === "ADD_PIZZA") {
        console.log(action.payload);
        
        // return array instead of one object
        return [...state, action.payload];
        
    }
    return state;

}

// Redux Store - Front End DataBase
const storeInstance = createStore(

    combineReducers({
        pizzaList,
        addPizza
    }),
    applyMiddleware(logger)

)
// End of Redux Store


// Start of App
ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root')
);
// End of App

export { storeInstance }