import React, { useState, useContext } from 'react';
import './header.css';
import restaurantImage from './assets/image.jpg';
import { CartContext } from './CartContext';

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const [isFormOpen, setIsFormOpen] = useState(false);

 
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCartIconClick = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleOrderButtonClick = () => {
    alert("order is submitted")
  };

  const handleCloseButtonClick = () => {
    setIsFormOpen(false);
  };

  return (
    <div>
      <header className="restaurant-header">
        <div className="header-section">
          <h1>ReactMeals</h1>
        </div>
        <div className="header-section">
          <span className="cart-icon" onClick={handleCartIconClick}>🛒</span>
          <span className="cart-value">({totalItems})</span>
        
        </div>
      </header>
      <div className="image-container">
        <img src={restaurantImage} alt="Restaurant" className="restaurant-image" />
        <div className="review-text">
          <h1>Delicious food delivered to you</h1>
          <p>Choose your favorite meal from our broad selection of available meals and enjoy delicious lunch or dinner at home.</p>
        </div>
      </div>
      <h1>Menu</h1>
    
      {isFormOpen && (
        <div className="cart-form">
          <form>
            <h2>Your Cart</h2>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  {item.name} - ${item.price}
                </li>
              ))}
            </ul>
            <p>Total Amount: ${totalAmount.toFixed(2)}</p>
            <div className="form-buttons">
              <button className="order-button" onClick={handleOrderButtonClick}>
                Order
              </button>
              <button className="close-button" onClick={handleCloseButtonClick}>
                Close
              </button>
            </div>
          </form>
         
        </div>
      )}
      
    </div>
  );
};

export default Header;



