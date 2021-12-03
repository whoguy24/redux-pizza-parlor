import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

// IMPORT REDUX
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// Pizzas Reducer
const menuReducer = (state = [], action) => {
    if (action.type === 'SET_PIZZAS') {
        return action.payload
    }
    return state;
};

// customerOrders
const cartReducer = (state = [], action) => {
    return state;
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
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
