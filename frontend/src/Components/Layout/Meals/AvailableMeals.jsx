import MealItem from "./MealItem.jsx";
import useFetch from "../../../Hooks/useFetch.js";
import Error from "../../UI/Error.jsx";

const reqConfig = {};

export default function AvailableMeals() {
  const {
    data: availableMeals,
    isLoading,
    error,
  } = useFetch("http://localhost:3000/meals", reqConfig, []);

  return (
    <ul id="meals">
      {error && <Error title="Failad to featch meals" message={error} />}
      {isLoading && !error && <p className="center">Meals Is Loading...</p>}
      {!isLoading &&
        availableMeals.map((meal) => <MealItem key={meal.id} meal={meal} />)}
    </ul>
  );
}
