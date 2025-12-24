import { useContext, useState, useActionState } from "react";
import { currencyFormatter } from "../../utils/formatting.js";
import CartContext from "../../Store/CartContext.jsx";
import UserProgressContext from "../../Store/UserProgressContext.jsx";
import useFetch from "../../Hooks/useFetch.js";
import Modal from "../UI/Modal.jsx";
import Input from "../UI/Input.jsx";
import Button from "../UI/Button.jsx";
import Error from "../UI/Error.jsx";

// depsتعريف برا الكمبوننت علشان مكانو في الميموري ميتغيرش ويسبب مشاكل عند الاستخدام في ال
const reqConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Checkout() {
  const [inputErrors, setInputErrors] = useState({
    city: true,
    email: true,
    name: true,
    phoneNumber: true,
    postalCode: true,
    street: true,
  });
  console.log(inputErrors, "errors check out");
  const { data, error, sendRequest, clearData } = useFetch(
    "http://localhost:3000/orders",
    reqConfig
  );

  const [formState, formAction, isSending] = useActionState(handelActon, null);

  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const totalPrice = cartCtx.items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  //  check Modale State
  const isOpen = userProgressCtx.progress === "checkout";

  // ####### Start Handel Functions ##########
  function handelCloseCheckout() {
    userProgressCtx.hideCheckout();
  }

  async function handelActon(prevState, fd) {
    const customerData = Object.fromEntries(fd); // return object {inputName : value}

    if (!Object.values(inputErrors).includes(true)) {
      console.log("NO errors", customerData);
      await sendRequest(
        JSON.stringify({
          order: {
            items: cartCtx.items,
            customer: customerData,
          },
        })
      );
    }
  }

  function handelFinsh() {
    userProgressCtx.hideCheckout();
    cartCtx.clearCart();
    clearData();
  }
  // ####### End Handel Functions ##########

  // action Buttons
  let actions = (
    <>
      <Button textButton onClick={handelCloseCheckout}>
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );

  // Show State is loding || hide action Buttons
  if (isSending) {
    actions = <span>Sending Order Data ....</span>;
  }

  // show Modal ==> order sbmitted Successfally
  if (data && !error) {
    return (
      <Modal open={isOpen} onClose={handelFinsh}>
        <h2>{data.message}</h2>
        <strong>Your Order was Submitted Successfally.</strong>
        <p>
          We will get back to you whith more details via email or phone
          number...
        </p>
        <p>Thanks for trusting ☺️</p>

        <div className="modal-actions">
          <Button onClick={handelFinsh}>Okey</Button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal open={isOpen} onClose={handelCloseCheckout}>
      <form action={formAction}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(totalPrice)}</p>

        <Input
          title="Full Name"
          id="name"
          type="text"
          setErrors={setInputErrors}
        />

        <Input
          title="E-Mail Address"
          id="email"
          type="email"
          setErrors={setInputErrors}
        />
        <Input
          title="Phone Number"
          id="phoneNumber"
          type="phone"
          setErrors={setInputErrors}
        />
        <Input
          title="Street"
          id="street"
          type="text"
          setErrors={setInputErrors}
        />

        <div className="control-row">
          <Input
            title="Postal code"
            id="postalCode"
            type="postal"
            setErrors={setInputErrors}
          />
          <Input
            title="City"
            id="city"
            type="text"
            setErrors={setInputErrors}
          />
        </div>

        {error && <Error title="Faild to submit order" message={error} />}

        <div className="modal-actions">{actions}</div>
      </form>
    </Modal>
  );
}
