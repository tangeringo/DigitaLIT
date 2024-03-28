import { CartTypes } from "./cartTypes";
import { addItemToCartUtilityFunction, removeItemFromCartUtilityFunction } from "./cartUtils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
    // boolean: ''
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // case CartTypes.COLLECTION_PAGE_RENDERED:
        //     return {
        //         ...state,
        //         boolean: action.payload
        //     }
        case CartTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartTypes.ADD_ITEM_TO_CART:
            return {
                ...state,
                    cartItems: addItemToCartUtilityFunction(
                        state.cartItems, action.payload
                )
            }
        case CartTypes.REMOVE_ITEM_FROM_CART: 
            return {
                ...state,
                    cartItems: removeItemFromCartUtilityFunction(
                        state.cartItems, action.payload
                )
            }
        case CartTypes.CLEAR_ITEM_FROM_CART: 
            return {
                ...state,
                    cartItems: state.cartItems.filter(cartItem => 
                        cartItem.id !== action.payload.id
                )
            }
        default: 
            return state;
    }
}

export default cartReducer;
