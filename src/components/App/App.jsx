// make sure to make a new git branch
import React from 'react';
// Make sure axios is imported.
import axios from 'axios';
// Make sure useEffect is imported
import {useEffect} from 'react';
// Make sure useDispatch is imported
import {useDispatch} from 'react-redux';
import './App.css';

function App() {

// Make sure to include useDispatch functionality here
  const dispatch = useDispatch();

// Need useEffect to render our GET request:
  // useEffect arrow function
      // inside is the axios GET request function
      // before ending function, include an empty array
  useEffect(() => {
    makePizzaOrdersReducerMatchTheStateOfOurPizzaOrdersTable();
  }, []);

// Need to make the axios GET request function
  // method - GET
  // url: route
    // then (res)
      // dispatch
        //  type: SOME ACTION IN CAPS LOCK
        //  payload: res.data aka response data recieved
      // end dispatch
// end the axios GET request function
makePizzaOrdersReducerMatchTheStateOfOurPizzaOrdersTable = () => {
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
      {/* Insert a tag, insert Order Component name, insert name of axios GET request function as a prop */}
      <PizzaOrders makePizzaOrdersReducerMatchTheStateOfOurPizzaOrdersTable={makePizzaOrdersReducerMatchTheStateOfOurPizzaOrdersTable} />
    </div>
  );
}

//lets merge with master!

export default App;
