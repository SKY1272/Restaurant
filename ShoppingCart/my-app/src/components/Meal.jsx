import React, { useState, useContext } from 'react';
import { CartContext } from './CartContext';
import './meals.css'
const Meal = ({ name, price }) => {
  const [quantity, setQuantity] = useState(0);
  const { addToCart } = useContext(CartContext);

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    setQuantity(value);
  };

  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleReduceQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = (event) => {
    event.preventDefault();
    if (quantity > 0) {
      addToCart({ name, price, quantity });
      console.log(`Added ${quantity} ${name}(s) to cart.`);
      setQuantity(0);
    } else {
      console.log('Please enter a valid quantity.');
    }
  };

  return (
    <div className="meal-item">
      <div className="meal-info">
        <h3 className="meal-name">{name}</h3>
        <div className="meal-price">${price}</div>
      </div>
      <div className="meal-actions">
        <form onSubmit={handleAddToCart} className="quantity-form">
          <button type="button" onClick={handleReduceQuantity} className="quantity-btn">
            -
          </button>
          <input
            type="number"
            min="0"
            value={quantity}
            onChange={handleQuantityChange}
            className="quantity-input"
          />
          <button type="button" onClick={handleAddQuantity} className="quantity-btn">
            +
          </button>
          <button type="submit" className="add-to-cart">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Meal;






