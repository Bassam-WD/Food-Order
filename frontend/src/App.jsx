import Header from "./Components/Layout/Header.jsx";
import AvailableMeals from "./Components/Layout/AvailableMeals.jsx";
import { CartContextProvider } from "./Store/CartContext.jsx";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <AvailableMeals />
    </CartContextProvider>
  );
}

export default App;
