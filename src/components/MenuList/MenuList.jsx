import React from 'react';
import { useSelector } from 'react-redux';

function MenuList() {

  const pizzas = useSelector((store) => store.menuReducer);

// We need to import the pizza table from Postico and return the pizzas to display:
  // We have to loop through the items. Instead of returning yay a pizza lives here, how can we return the pizzas? 🤔
// We need to use Warren's pizza GET ROUTE from App.jsx
// Maybe we need to use the menuReducer from index.js too
// Can't think of anything else we need to do at the moment. 

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
