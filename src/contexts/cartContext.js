import React, { createContext, useReducer } from "react";
import { CartReducer } from "./cartReducer";

export const CartContext = createContext();

const initialState = { cartItems: []}

const CartContextProvider =({children}) => {
    const [state, dispatch] = useReducer(CartReducer, initialState);

// payload = {id, title, price} il provient de categoryProduct.js
    const addProduct = (payload) => {
        dispatch({ type: "ADD", payload });
    }

    const contextValues = {
        addProduct,
        ...state
    }

    return (
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider