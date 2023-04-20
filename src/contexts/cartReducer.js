export const CartReducer = (state, action) => {
    debugger;

    switch (action.type) {
        case "ADD":
            const index = state.cartItems.FindIndex(x => x.id === action.payLoad.id);

            if (index === -1) {
                state.cartItems.push({...action.payLoad, quantity:1});
            } else {
                state.carItems[index].quantity++;
            }

            return state;
          

        case "REMOVE":
            return state;

        default:
            return state;
    }
}
