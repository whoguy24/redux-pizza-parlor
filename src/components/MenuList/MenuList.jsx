import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function MenuList() {

    // Set up Dispatch
    const dispatch = useDispatch();

  const pizzas = useSelector((store) => store.menuReducer);
  const cart = useSelector((store) => store.cartReducer);

  function refresh() {
    console.log(cart);
  }

  function addPizzaToCart() {
    let pizza1 = {
      id:10,
      name:'Warrens Special Homemade Frozen Pizza',
      description: '',
      price: '',
      image_path: ''
    }
    dispatch({
      type: 'ADD_PIZZA_TO_CART',
      payload: pizza1,
    })
    console.log(cart);
  }

  function removePizzaFromCart () {
    let pizza1 = {
      id:10,
      name:'Warrens Special Homemade Frozen Pizza',
      description: '',
      price: '',
      image_path: ''
    }
    dispatch({
      type: 'REMOVE_PIZZA_FROM_CART',
      payload: pizza1
    })
    console.log(cart);
  }

// We need to import the pizza table from Postico and return the pizzas to display:
  // We have to loop through the items. Instead of returning yay a pizza lives here, how can we return the pizzas? 🤔
// We need to use Warren's pizza GET ROUTE from App.jsx
// Maybe we need to use the menuReducer from index.js too
// Can't think of anything else we need to do at the moment.

  return (


  


    <div>
        {pizzas.map((pizza, i) =>
          <ul key={i}>
            <p><img src={pizza.image_path} height="100" width="100"/></p>
            <p>{pizza.name}</p>
            <p>{pizza.description}</p>
            <p>{pizza.price} </p>
          </ul>
        )}
    </div>
  );
}

export default MenuList;
