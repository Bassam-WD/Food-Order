export default function MealItem({ name, price, description, image, id }) {
  console.log({ name, price, description, image, id });

  return (
    <div className="meal-item">
      <img src={`http://localhost:3000/${image}`} alt="" />
      <h3>{name}</h3>
      <p className="meal-item-price">{price}</p>
      <p className="meal-item-description">{description}</p>
      <button className="meal-item-actions button">Add To Cart</button>
    </div>
  );
}
