import LogoImg from "../../assets/logo.jpg";
import Button from "../UI/Button.jsx";
import CartContext from "../../Store/CartContext.jsx";
import UserProgressContext from "../../Store/UserProgressContext.jsx";
import { useContext } from "react";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const totalCartItem = cartCtx.items.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  const userProgressCtx = useContext(UserProgressContext);
  function handelOpenCart() {
    userProgressCtx.showCart();
  }
  return (
    <header id="main-header">
      <div id="title">
        <img src={LogoImg} alt="Logo-img" />
        <h1>Food Order</h1>
      </div>
      <nav>
        <Button textButton onClick={handelOpenCart}>
          Cart ({totalCartItem})
        </Button>
      </nav>
    </header>
  );
}
