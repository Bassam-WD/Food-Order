import Modal from "../UI/Modal.jsx";
import Input from "../UI/Input.jsx";
import CartContext from "../../Store/CartContext.jsx";
import UserProgressContext from "../../Store/UserProgressContext.jsx";
import { useContext } from "react";
import Button from "../UI/Button.jsx";
import { currencyFormatter } from "../../utils/formatting.js";

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const totalPrice = cartCtx.items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  const isOpen = userProgressCtx.progress === "checkout";
  function handelCloseCheckout() {
    userProgressCtx.hideCheckout();
  }

  return (
    <Modal open={isOpen} onClose={handelCloseCheckout}>
      <form action="">
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(totalPrice)}</p>

        <Input title="Full Name" id="full-name" type="text" />
        <Input title="E-Mail Address" id="email" type="email" />
        <Input title="Street" id="street" type="text" />

        <div className="control-row">
          <Input title="Postal code" id="postal-code" type="text" />
          <Input title="City" id="city" type="text" />
        </div>

        <div className="modal-actions">
          <Button textButton onClick={handelCloseCheckout}>
            Close
          </Button>
          <Button>Submit Order</Button>
        </div>
      </form>
    </Modal>
  );
}
