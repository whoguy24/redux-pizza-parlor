  
import {useSelector} from 'react-redux'


  function PizzaOrders() {

    const orders = useSelector((store) => store.pizzaOrderList); //


    return (
        <div>
          <ul>
            {orders.map((orders, i) => {
              return <p>Yay a pizza lives here.</p>;
            })}
          </ul>
        </div>
      );
      
  }


  export default PizzaOrders;