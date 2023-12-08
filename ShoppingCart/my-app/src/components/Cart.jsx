import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import './cart.css';
import { CartContext } from './CartContext';

const Cart = ({ isCartOpen, closeCart }) => {
  const { cartItems, removeFromCart, reduceItemQuantity } = useContext(CartContext);

  const handleCloseCart = () => {
    closeCart();
  };

  
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleDeleteItemClick = (itemId) => {
    removeFromCart(itemId); 
  };

  const handleReduceQuantity = (itemId) => {
    reduceItemQuantity(itemId); 
  };

  return ReactDOM.createPortal(
    <div className={`cart-modal ${isCartOpen ? 'show' : ''}`}>
      <div className="cart-content">
        <h2>Your Cart</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} x {item.quantity}
              <button onClick={() => handleReduceQuantity(item.id)}>-</button>
              <button onClick={() => handleDeleteItemClick(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <div className="total-amount">
          <strong>Total: ${totalAmount.toFixed(2)}</strong>
        </div>
        <div className="cart-actions">
          <button className="order-btn">Order</button>
          <button className="close-btn" onClick={handleCloseCart}>
            Close
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('cart-root')
  );
};

export default Cart;




