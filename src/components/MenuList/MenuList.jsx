import React from 'react';
import { useSelector } from 'react-redux';

function MenuList() {

  const pizzas = useSelector((store) => store.menuReducer);

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