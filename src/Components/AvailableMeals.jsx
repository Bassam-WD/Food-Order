import { useEffect, useState } from "react";
import MealItem from "./MealItem.jsx";

export default function AvailableMeals() {
  const [availableMeals, setAvailableMeals] = useState([]);
  useEffect(() => {
    async function getAvailableMeals() {
      const responce = await fetch("http://localhost:3000/meals");
      const allMeals = await responce.json();

      if (!responce.ok) {
        return;
      }
      return setAvailableMeals(allMeals);
    }
    getAvailableMeals();
  }, []);

  return (
    <div id="meals">
      {availableMeals.map((meal) => (
        <MealItem key={meal.id} {...meal} />
      ))}
    </div>
  );
}
