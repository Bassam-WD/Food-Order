import MealItem from "./MealItem.jsx";
import useFetch from "../../../Hooks/useFetch.js";
import Error from "../../UI/Error.jsx";

const reqConfig = {};

export default function AvailableMeals() {
  const {
    data: availableMeals,
    isLoading,
    error,
  } = useFetch("https://food-order-production-bassam.up.railway.app/meals", reqConfig, []);

  return (
    <ul id="meals">
      {error && <Error title="Failed to fetch meals" message={error} />}
      {isLoading && !error && <p className="center">Meals Are Loading...</p>}
      {!isLoading &&
        availableMeals.map((meal) => <MealItem key={meal.id} meal={meal} />)}
    </ul>
  );
}
