import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, resetCart } from '../redux/cartReducer';

const Cart = () => {
    const count = useSelector((state) => state.cartCount);

    const dispatch = useDispatch();
  return (
    <div>
      <h2>Cart</h2>
      <p>Cart Items: {count}</p>
      <button onClick={() => dispatch(addToCart())}>Add to cart</button>
      <button
        onClick={() => dispatch(removeFromCart())}
        style={{ margin: "0 10px" }}
        disabled={count === 0}
      >
        Remove from cart
      </button>
      <button onClick={() => dispatch(resetCart())}>Reset</button>
    </div>
  );
}

export default Cart;