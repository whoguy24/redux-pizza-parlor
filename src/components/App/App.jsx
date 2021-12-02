import React from 'react';
// Make sure axios is imported.
import axios from 'axios';
// Make sure useEffect is imported
// Make sure useDispatch is imported
import './App.css';

function App() {

// Make sure to include useDispatch functionality here

// Need useEffect to render our GET request:
  // useEffect arrow function
      // inside is the axios GET request function
      // before ending function, include an empty array

// Need to make the axios GET request function
  // method - GET
  // url: route
    // then (res)
      // dispatch
        //  type: SOME ACTION IN CAPS LOCK
        //  payload: res.data aka response data recieved
      // end dispatch
// end the axios GET request function

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>

      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      {/* Insert a tag, insert Order Component name, insert name of axios GET request function as a prop */}

    </div>
  );
}

export default App;
