import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';


function MenuItem ({pizzaObject}) {

    const [inCart, setInCart] = useState(false);
    const dispatch = useDispatch();

    function addPizzaToCart(pizzaObject) {
        dispatch({
            type: 'ADD_PIZZA_TO_CART',
            payload: pizzaObject,
        })
        setInCart(true)
    }
    
    function removePizzaFromCart (pizzaObject) {
        dispatch({
            type: 'REMOVE_PIZZA_FROM_CART',
            payload: pizzaObject
        })
        setInCart(false)
    }

    return (
        <div>
            <p><img src={pizzaObject.image_path} height="100" width="100"/></p>
            <p>{pizzaObject.name}</p>
            <p>{pizzaObject.description}</p>
            <p>{pizzaObject.price} </p>
            { inCart ?
                <button onClick = { () => {removePizzaFromCart(pizzaObject)}}>Remove from Cart</button>
                :
                <button onClick = { () => {addPizzaToCart(pizzaObject)}}>Add to Cart</button>
            }
        </div>
    )

}

export default MenuItem;
