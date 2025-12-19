import { currencyFormatter } from "../../utils/formatting.js";
import Button from "../UI/Button.jsx";

export default function MealItem({ name, price, description, image, id }) {
  console.log({ name, price, description, image, id });

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${image}`} alt="" />
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(price)}</p>
          <p className="meal-item-description">{description}</p>
        </div>
        <p className="meal-item-actions ">
          <Button>Add To Cart</Button>
        </p>
      </article>
    </li>
  );
}
