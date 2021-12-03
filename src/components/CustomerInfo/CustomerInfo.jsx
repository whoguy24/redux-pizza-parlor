import { useState } from 'react';
import { useDispatch } from 'react-redux';

function CustomerInfo(){

  const [customer_name, setCustomerName] = useState('')
  const [street_address, setStreetAddress] = useState('')
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');


  const dispatch = useDispatch();

  // const onCustomerInfoSubmit () => {
  //   dispatch({
  //     type: (SOME CAPS LOCK)
  //     payload: ?????
  //   })
  // }

  //added more stuff

  return (
    <div>
      <input
        value={customer_name}
        onChange={(event) => {setCustomerName(event.target.value)}}
        placeholder="Name" />
    </div>

    <div>
    <input
      value={street_address}
      onChange={(event) => {setStreetAddress(event.target.value)}}
      placeholder="Street Address" />
    </div>

    <div>
    <input
      value={city}
      onChange={(event) => {setCity(event.target.value)}}
      placeholder="City" />
    </div>

    <div>
    <input
      value={zip}
      onChange={(event) => {setZip(event.target.value)}}
      placeholder="Zip" />
    </div>

    <div>
      <button onClick={onCustomerInfoSubmit}>Next</button>
    </div>


  )

};

  export default CustomerInfo;
