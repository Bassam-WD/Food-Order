import LogoImg from "../../../assets/logo.jpg";

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={LogoImg} alt="Logo-img" />
        <h1>Food Order</h1>
      </div>
      <button
        className="text-button"
        //   onClick={open cart modal}
      >
        Cart (3)
      </button>
    </header>
  );
}
