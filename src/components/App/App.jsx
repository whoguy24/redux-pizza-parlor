import React from 'react';
import axios from 'axios';
import './App.css';

// Import Nonsense
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Import Components
import MenuList from '../MenuList/MenuList.jsx';
import CustomerInfo from '../CustomerInfo/CustomerInfo.jsx'

function App() {

  // Set up Dispatch
  const dispatch = useDispatch();

  // Run on Page Load
  useEffect(() => {
    refreshPizzas();
    getPizzaOrders();
  }, []);

  // Pizzas GET request
  const refreshPizzas = () => {
    axios({
      method: 'GET',
      url: '/api/pizza'
    }).then ((response) => {
      console.log(`GET request from '/api/pizza': ${response.data}.`);
      dispatch({
        type: 'SET_PIZZAS',
        payload: response.data
      })
    }).catch (error => {
      console.log(`GET request from '/api/pizza' has failed: ${error}`);
    });
  };

  // axios GET request for pizza orders
  const getPizzaOrders = () => {
    axios({
      method: 'GET',
      url: '/api/order'
    })
    .then((res) => {
      const pizzaOrders = res.data;
      dispatch({
        type: 'SET_PIZZA_ORDERS',
        payload: pizzaOrders
      })
    })
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>

      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>

      <MenuList />
      <CustomerInfo getPizzaOrders={getPizzaOrders} />

    </div>
  );
}

export default App;
