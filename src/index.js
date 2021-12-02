import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

// IMPORT REDUX
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// Pizzas Reducer
const pizzasReducer = (state = [], action) => {
    if (action.type === 'SET_PIZZAS') {
        return action.payload
    }
    return state;
};

// Pizza Orders reducer
const pizzaOrderList = (state = [], action) => {
    if (action.type === 'SET_PIZZA_ORDERS'){
        return action.payload;
    }
    return state;
}

// Create Store Instance
const storeInstance = createStore(
    combineReducers({
        pizzasReducer,
        pizzaOrderList
    }),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
