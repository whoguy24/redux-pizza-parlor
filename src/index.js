import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

// IMPORT REDUX
import { createStore, combineReducers, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Pizzas Reducer
const menuReducer = (state = [], action) => {
    if (action.type === 'SET_PIZZAS') {
        return action.payload
    }
    return state;
};

// customerOrders
const cartReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PIZZA_TO_CART':
            return [...state, action.payload];
        case 'REMOVE_PIZZA_FROM_CART':
            return state.filter(function (cartItem) {
                return cartItem.id != action.payload.id;
            });
        default: 
            return state;
    }
}

// customerOrders
const customerInfoReducer = (state = [], action) => {
    return state;
}

// Pizza Orders reducer
const checkoutInfoReducer = (state = [], action) => {
    if (action.type === 'SET_PIZZA_ORDERS'){
        return action.payload;
    }
    return state;
}

// Create Store Instance
const storeInstance = createStore(
    combineReducers({
        menuReducer,
        cartReducer,
        customerInfoReducer,
        checkoutInfoReducer
    }),
    applyMiddleware(
        logger
    )
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
