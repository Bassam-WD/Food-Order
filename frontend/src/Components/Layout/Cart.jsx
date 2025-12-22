import { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../Store/CartContext.jsx";
import UserProgressContext from "../../Store/UserProgressContext.jsx";
import { currencyFormatter } from "../../utils/formatting.js";
import Button from "../UI/Button.jsx";

export default function Cart() {
  const cartCTX = useContext(CartContext);
  const totalPrice = cartCTX.items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const userProgressCtx = useContext(UserProgressContext);
  const isOpen = userProgressCtx.progress === "cart";

  function handelCloseCart() {
    userProgressCtx.hideCart();
  }

  return (
    <Modal className="cart" open={isOpen}>
      <div>
        <h2>Your Cart</h2>
        <ul>
          {cartCTX.items.map((item) => (
            <li key={item.id} className="cart-item">
              <p>
                {item.name} - {item.quantity} x{" "}
                {currencyFormatter.format(item.price)}
              </p>
              <div className="cart-item-actions">
                <button className="text-button">-</button>
                <p className="center">{item.quantity}</p>
                <button className="text-button ">+</button>
              </div>
            </li>
          ))}
        </ul>
        <p className="cart-total">{currencyFormatter.format(totalPrice)}</p>
        <div className="modal-actions">
          <Button textButton onClick={handelCloseCart}>
            close
          </Button>
          <Button>Go to Checkout</Button>
        </div>
      </div>
    </Modal>
  );
}
