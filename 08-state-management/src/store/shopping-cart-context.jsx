import { createContext, useReducer } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products.js";

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const id = action.id;
    const updatedItems = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === id
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = DUMMY_PRODUCTS.find((product) => product.id === id);
      updatedItems.push({
        id: id,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }

    return {
      items: updatedItems,
    };
  }

  if (action.type === 'UPDATE_QUANTITY') {
    const productId = action.productId;
    const amount = action.amount;
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === productId
    );

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
    };
  }

  return state;
};


export default function CartContextProvider({children}) {
  const [shoppingCart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  function handleAddItemToCart(id) {
    dispatchCartAction({ type: 'ADD_ITEM', id: id });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    dispatchCartAction({ type: 'UPDATE_QUANTITY', productId: productId, amount: amount });
  }
  const cartCtx = {
    items: shoppingCart.items,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
  };
  
  return <CartContext.Provider value={cartCtx}>
    {children}
  </CartContext.Provider>
}
