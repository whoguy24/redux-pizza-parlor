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

  return (


    


    <div>

      <button onClick={() => {refresh()}}>refresh</button>
      <button onClick={() => {addPizzaToCart()}}>Add Pizza</button>
      <button onClick={() => {removePizzaFromCart()}}>Remove Pizza</button>


      <ul>
        {pizzas.map((pizza, i) => {
          return <p>Yay a pizza lives here.</p>;
        })}
      </ul>
    </div>
  );
}

export default MenuList;