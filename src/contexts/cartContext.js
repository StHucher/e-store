import React, { createContext } from "react";

export const CartContext = createContext();

const initialState = { cartItems: []}

/**
 * React context provider for the cart state.
 *
 * @returns {JSX.Element} The cart context provider.
 */
const CartContextProvider =({children}) => {

    const addProduct = (payLoad) => {
        debugger;
    }

    const contextValues = {
        addProduct,
        ...initialState
    }

    return (
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider