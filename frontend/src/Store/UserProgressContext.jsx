import { createContext, useState } from "react";

const UserProgressContext = createContext({
  progress: "", //'cart','checkout'
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function UserProgressContextProvider({ children }) {
  const [userState, setUserState] = useState("");
  function showCart() {
    setUserState("cart");
  }
  function hideCart() {
    setUserState("");
  }
  function showCheckout() {
    setUserState("checkout");
  }
  function hideCheckout() {
    setUserState("");
  }

  const userCtxValue = {
    progress: userState,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };
  return (
    <UserProgressContext.Provider value={userCtxValue}>
      {children}
    </UserProgressContext.Provider>
  );
}
export default UserProgressContext;
