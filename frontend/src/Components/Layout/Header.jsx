import LogoImg from "../../assets/logo.jpg";
import Button from "../UI/Button.jsx";

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={LogoImg} alt="Logo-img" />
        <h1>Food Order</h1>
      </div>
      <nav>
        <Button textButton>Cart (0)</Button>
      </nav>
    </header>
  );
}
