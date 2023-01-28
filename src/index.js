import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
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

// const REDUCER_NAME2 = (state = [], action) => {
//     console.log('in da second reducer', state)

// }

// Redux Store - Front End DataBase
const storeInstance = createStore(

    combineReducers({
        pizzaList,
        // REDUCER_NAME2
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