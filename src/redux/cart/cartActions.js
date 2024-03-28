import { CartTypes } from "./cartTypes";

// export const setCollectionPageRendering = boolean => ({
//     type: CartTypes.COLLECTION_PAGE_RENDERED,
//     payload: boolean
// });

export const toggleCartHidden = () => ({
    type: CartTypes.TOGGLE_CART_HIDDEN
});

export const addItemToCart = item => ({
    type: CartTypes.ADD_ITEM_TO_CART,
    payload: item
});

export const removeItemFromCart = item => ({
    type: CartTypes.REMOVE_ITEM_FROM_CART,
    payload: item
});

export const clearItemFromCart = item => ({
    type: CartTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});