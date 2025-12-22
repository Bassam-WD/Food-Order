import Header from "./Components/Layout/Header.jsx";
import AvailableMeals from "./Components/Layout/Meals/AvailableMeals.jsx";
import { CartContextProvider } from "./Store/CartContext.jsx";
import { UserProgressContextProvider } from "./Store/UserProgressContext.jsx";
import Cart from "./Components/Layout/Cart/Cart.jsx";
import Checkout from "./Components/Layout/Checkout.jsx";
function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <AvailableMeals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
