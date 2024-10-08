import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h1>Your Cart</h1>
      <ul>
        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cart.map(item => (
            <li key={item.id}>
              <p>{item.name} - ${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Cart;
