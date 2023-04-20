import React, { createContext } from "react";

export const CartContext = createContext();

const initialState = { cartItems: []}

/**
 * React context provider for the cart state.
 *
 * @returns {JSX.Element} The cart context provider.
 */
const CartContextProvider =({children}) => {
    return (
        <CartContext.Provider value={initialState}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider