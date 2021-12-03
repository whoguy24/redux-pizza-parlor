//this goes inside UserCheckout.js

import axios from 'axios';
import React, { useState, useEffect } from 'react';
//import {useSelector} from 'react-redux'
import axios from 'axios';



//create a function and pass state using useSelector/reducer and returning store

//function to get the customers information

//
function UserCheckout({getPizzaOrders}) {

    const [customer_name, setCustomerName] = useState('')
    const [street_address, setStreetAddress] = useState('')
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [total, setTotal] = useState('');
    const [type, setType] = useState('');
    const [pizzas, setPizzas] = useState('');
    const [city, setCity] = useState('');
    

const handleSubmit = event => {
    event.preventDefault();


const newOrder = {
    customer_name: setCustomerName,
    street_address: setStreetAddress,
    city: setCity,
    zip: setZip,
    total: setTotal,
    type: setType,
    pizzas: setPizzas,
    id: '1',
    quantity: '1'
}
axios({
    method: 'POST',
    url: '/api/order',
    data: newOrder
})
.then((response) => {
    console.log('In order POST', response);

    getPizzaOrders();
    
})

}//end handleSubmit function

return (
    <p>
        This is where the checkout is, kinda

    </p>
    
)




};

export default UserCheckout;