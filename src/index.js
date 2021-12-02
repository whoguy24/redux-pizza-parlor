import React from 'react';
import ReactDOM from 'react-dom';
// import redux items: createStore, combineReducers, applyMiddleware
import {createStore, combineReducers, applyMiddleware} from 'redux';

// import Provider from react-redux
import {Provider} from 'react-redux';

// import logger from redux logger
import logger from 'redux-logger';


import './index.css';
import App from './components/App/App';


// We have to make our pizzaOrders Reducer
    // its arguments is state which is an empty array and action
        // include if statement - if the action.type is equal to dispatch type
            // return the dispatch's payload which is pizza orders via action.payload
        // end if statement
    // return state
    // close out the reducer function
    const pizzaOrderList = (state = [], action) => {
        if (action.type === 'SET_PIZZA_ORDERS'){
            console.log(action);
            return action.payload;
        }
        return state;
    }


// We have to create our Redux Store
    // use createStore
        // Use combineReducer
            // add the names of each reducer, seperated by comma if more than one
        // end combineReducer
        // use applyMiddleWare(logger)
    // end createStore
    const reduxStore = createStore(
        combineReducers({
            pizzaOrderList
        }),
        applyMiddleWare(logger)
    );


// We have to make sure this is sandwiched by Provider
ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
