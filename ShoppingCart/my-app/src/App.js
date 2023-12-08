import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import MealList from './components/MealList';
import Cart from './components/Cart';

const dummyMeals = [
  { name: 'Tandoori Chicken', price: 12.99 },
  { name: 'Butter-Paneer', price: 14.99 },
  { name: 'Butter and Garlic Naan', price: 9.99 },
  { name: 'Butter-Chicken', price: 9.99 },
];

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  // const { cartItems } = useContext(CartContext);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div className="App">
      <Header />
      <MealList meals={dummyMeals} />

      <div className="cart-icon" onClick={isCartOpen ? closeCart : openCart}>


      </div>

      {isCartOpen && <Cart isCartOpen={isCartOpen} closeCart={closeCart} />}
    </div>
  );
};

export default App;

