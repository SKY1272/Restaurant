import React from 'react';
import Meal from './Meal';

const MealList = ({ meals }) => {
  return (
    <div className="meal-list">
      {meals.map((meal, index) => (
        <Meal key={index} name={meal.name} price={meal.price} />
      ))}
    </div>
  );
};

export default MealList;
