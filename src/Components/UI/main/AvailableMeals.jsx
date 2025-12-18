import MealItem from "./MealItem.jsx";
import useFetch from "../../../Hooks/useFetch.js";

export default function AvailableMeals() {
  const {
    data: availableMeals,
    isLoading,
    error,
  } = useFetch("http://localhost:3000/meals");
  return (
    <div id="meals">
      {error && (
        <div className="error">
          <h2>Error</h2>
          <p>{error}</p>
        </div>
      )}
      {isLoading && !error && <p className="center">Meals Is Loading...</p>}
      {!isLoading &&
        availableMeals.map((meal) => <MealItem key={meal.id} {...meal} />)}
    </div>
  );
}
6;
