import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    //اتاكد ان الايتم  مضافة قبل كدا للكارت او لا
    const itemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    // اخد نسخة علشان منعدلش علي الحالة الاصلية
    const updatedItems = [...state.items];
    // لو العنصر موجود نحدث الكمية
    if (itemIndex > -1) {
      const updateItem = {
        ...state.items[itemIndex],
        quantity: state.items[itemIndex].quantity + 1,
      };
      updatedItems[itemIndex] = updateItem;
    }
    // لو مش موجود نضيفة ونخلي الكمية واحد
    else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_ITEM") {
    const itemIndex = state.items.findIndex((item) => item.id === action.id);
    // نمسك الايتم
    const catchItem = state.items[itemIndex];
    // اخد نسخة علشان منعدلش علي الحالة الاصلية
    const updateItems = [...state.items];

    // لو الكمية واحد
    if (catchItem.quantity === 1) {
      updateItems.splice(itemIndex, 1);
    }
    // لو الكمية اكتر من واحد
    else {
      // حذف واحد من الكمية
      const updateItem = {
        ...catchItem,
        quantity: catchItem.quantity - 1,
      };
      // تحديث الايتم
      updateItems[itemIndex] = updateItem;
    }
    return { ...state, items: updateItems };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, items: [] };
  }
  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchAction] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatchAction({ type: "ADD_ITEM", item });
  }

  function removeItem(id) {
    dispatchAction({ type: "REMOVE_ITEM", id });
  }

  function clearCart() {
    dispatchAction({ type: "CLEAR_CART" });
  }

  const cartContextValue = {
    items: cart.items,
    addItem,
    removeItem,
    clearCart,
  };
  console.log(cartContextValue);

  return <CartContext value={cartContextValue}>{children}</CartContext>;
}
export default CartContext;
