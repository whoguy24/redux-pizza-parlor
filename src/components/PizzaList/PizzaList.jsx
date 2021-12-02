import React from 'react';
import { useSelector } from 'react-redux';

function PizzaList() {

  const pizzas = useSelector((store) => store.pizzasReducer);

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

export default PizzaList;