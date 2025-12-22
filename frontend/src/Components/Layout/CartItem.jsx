import { currencyFormatter } from "../../utils/formatting";

export default function CartItem({
  name,
  quantity,
  price,
  onIncrease,
  onDecrease,
}) {
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} x {currencyFormatter.format(price)}
      </p>
      <div className="cart-item-actions">
        <button className="text-button" onClick={onDecrease}>
          -
        </button>
        <p className="center">{quantity}</p>
        <button className="text-button " onClick={onIncrease}>
          +
        </button>
      </div>
    </li>
  );
}
