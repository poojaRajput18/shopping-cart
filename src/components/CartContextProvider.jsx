import React, { createContext, useEffect, useReducer } from "react";
import { products } from "../utils/mockData";
import { cartReducer } from "../utils/reducer";

export const CartContext = createContext();
const initialState = {
  totalAmount: 0,
  totalItems: 0,
  items: products,
};

const CartContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  const removeItem = (id) => {
    return dispatch({
      type: "DELETE",
      payload: id,
    });
  };

  const searchItems = (value) => {
      console.log({value});
      return dispatch({
        type: "SEARCH_ITEM",
        payload: value
      })
  }

  useEffect(() => {
    dispatch({
      type: "GET_TOTAL",
    });
  }, [state.items]);

  return (
    <CartContext.Provider
      value={{ ...state, increment, decrement, removeItem, searchItems }}
    >
        {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
