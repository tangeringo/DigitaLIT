import { LibraryTypes } from "./libraryTypes";
import { updateSelectedBookItemInfo } from "./libraryUtils";

const INITIAL_STATE = {
    selectedBook: {id: 0, imgSource: "", name: "", quantity: 1, price: 0, description: ""},
}


const libraryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LibraryTypes.DISPLAY_SELECTED_BOOK:
            return {
                ...state,
                selectedBook: updateSelectedBookItemInfo(state.selectedBook, action.payload)
            }
        
        default:
            return state;
    }
}

export default libraryReducer;