import { createContext, useReducer, useState } from "react";
import Product from "../pages/Product";

export const GlobalContext = createContext();

const changeState = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOG_IN":
      return { ...state, user: payload };
    case "LOG_OUT":
      return { ...state, user: null };
    default:
      return state;
  }
};

function GlobalContext({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    user: null,
    products: []
  });
  return (
    <GlobalContext.Provider value={{ ...state }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;
