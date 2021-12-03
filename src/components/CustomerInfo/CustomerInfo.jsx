  import {useSelector} from 'react-redux'

  function CustomerInfo() {

    const customerInfo = useSelector((store) => store.customerInfoReducer); //


    return (
        <div>
          <ul>
            {customerInfo.map((orders, i) => {
              return <p>Yay a pizza lives here.</p>;
            })}
          </ul>
        </div>
      );
      
  }


  export default CustomerInfo;