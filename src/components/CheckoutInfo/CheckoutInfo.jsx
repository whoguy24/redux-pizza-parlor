  import {useState} from 'react-redux'
  import axios from 'axios';


// Taking customers information and their orders
// Identifying it by an id (order_id, pizz_id, quantity)
// Store it in the database inside line_item table

//const getCustomerInfo = useSelector((store => store.customerInfoReducer)

function CheckoutInfo (getPizzaOrders, ){

  const [customersInfo, setCustomersInfo] = useState('');
  const [customersOrder, setCustomersOrder] = useState('');

  const handleCheckout = event => {
    event.preventDefault();
    console.log('Adding order', {customersInfo, customersOrder});

    const finalOrder = {
      customersInfo: setCustomersInfo, 
      customersOrder: setCustomersOrder
    }
    axios({
      method: 'POST',
      url: '/api/order',
      data: finalOrder
    })
    .then((response) => {
      getPizzaOrders();
    })



  }//end handle
    
return (
      <form onSubmit={handleCheckout}>
        <table 
         
          value={customersInfo}
          onChange={(event) => setCustomersInfo(event.target.value)}
        />

        <table 
          value={customersOrder}
          onChange={(event) => setCustomersOrder(event.target.value)}
        />

        <button type="submit"> Check Out </button>
      </form>
    


    )


  
  
  }




    


  export default CheckoutInfo;