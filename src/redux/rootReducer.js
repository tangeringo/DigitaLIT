import { combineReducers } from "redux";

import libraryReducer from './library/libraryReducer';
import cartReducer from "./cart/cartReducer";


const rootReducer = combineReducers({
    library: libraryReducer,
    cart: cartReducer
});


export default rootReducer;