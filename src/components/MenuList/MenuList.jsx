import React from 'react';
import { useSelector } from 'react-redux';

function MenuList() {

  const pizzas = useSelector((store) => store.menuReducer);
  const cart = useSelector((store) => store.cartReducer);

  function addPizzaToCart(pizzaObject) {
    dispatch({
      type: 'ADD_PIZZA_TO_CART',
      payload: pizzaObject
    })
  }

  function removePizzaFromCart (pizzaObject) {
    dispatch({
      type: 'REMOVE_PIZZA_FROM_CART',
      payload: pizzaObject
    })
  }

  return (
    <div>
      <ul>
        {pizzas.map((pizza, i) => {
          return <p>Yay a pizza lives here.</p>;
        })}
      </ul>
    </div>
  );
}

export default MenuList;