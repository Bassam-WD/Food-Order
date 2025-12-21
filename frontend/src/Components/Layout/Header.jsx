import LogoImg from "../../assets/logo.jpg";
import Button from "../UI/Button.jsx";
import CartContext from "../../Store/CartContext.jsx";
import { useContext } from "react";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const totalCartItem = cartCtx.items.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  return (
    <header id="main-header">
      <div id="title">
        <img src={LogoImg} alt="Logo-img" />
        <h1>Food Order</h1>
      </div>
      <nav>
        <Button textButton>Cart ({totalCartItem})</Button>
      </nav>
    </header>
  );
}
