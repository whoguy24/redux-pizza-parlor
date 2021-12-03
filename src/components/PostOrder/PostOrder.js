//this goes inside UserCheckout.js

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux'


function PostOrder ({getPizzaOrders}) {

    // const [customer_name, setCustomerName] = useState('')
    // const [street_address, setStreetAddress] = useState('')
    // const [city, setCity] = useState('');
    // const [zip, setZip] = useState('');
    // const [total, setTotal] = useState('');
    // const [type, setType] = useState('');
    // const [pizzas, setPizzas] = useState('');
    


const postData = {
    customer_name: setCustomerName,
    street_address: setStreetAddress,
    city: setCity,
    zip: setZip,
    total: setTotal,
    type: setType,
    pizzas: [{ id: 1,quantity: 1},
             {id: 2, quantity: 1}],
    id: '1',
    quantity: '1'
}
axios({
    method: 'POST',
    url: '/api/order',
    data: postData
})
.then((response) => {
    console.log('In order POST', response);
    //maybe navigate?

    getPizzaOrders();
    
})

};


export default PostOrder;