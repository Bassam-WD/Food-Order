import { useContext } from "react";
import Modal from "../../UI/Modal.jsx";
import CartContext from "../../../Store/CartContext.jsx";
import UserProgressContext from "../../../Store/UserProgressContext.jsx";
import { currencyFormatter } from "../../../utils/formatting.js";
import Button from "../../UI/Button.jsx";
import CartItem from "./CartItem.jsx";

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

  function handelOpenCheckout() {
    userProgressCtx.showCheckout();
  }

  return (
    <Modal
      className="cart"
      open={isOpen}
      onClose={isOpen ? handelCloseCart : null}
    >
      <div>
        <h2>Your Cart</h2>
        <ul>
          {cartCTX.items.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              onIncrease={() => cartCTX.addItem(item)}
              onDecrease={() => cartCTX.removeItem(item.id)}
            />
          ))}
        </ul>
        <p className="cart-total">{currencyFormatter.format(totalPrice)}</p>
        <div className="modal-actions">
          <Button textButton onClick={handelCloseCart}>
            close
          </Button>
          {cartCTX.items.length > 0 && (
            <Button onClick={handelOpenCheckout}>Go to Checkout</Button>
          )}
        </div>
      </div>
    </Modal>
  );
}
