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
} //going to store a list of objects (pizzas) we added to the cart & also removes when user removes

// customerOrders
const customerInfoReducer = (state = [], action) => {
    return state;
}//where customer enters in their information and that info will get rapped up into an object
//the object will get stored in this reducer
//& that info will get stored into the database under orders
//

// Pizza Orders reducer
const checkoutInfoReducer = (state = [], action) => {
    if (action.type === 'SET_PIZZA_ORDERS'){
        return action.payload;
    }
    return state;
}//customers order and customers info will store all this into the database called LineItem
// this ties the customer with the pizzas they orders using id's

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
