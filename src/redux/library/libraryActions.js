import { LibraryTypes } from "./libraryTypes";

export const displaySelectedBookItem = bookItem => ({
    type: LibraryTypes.DISPLAY_SELECTED_BOOK,
    payload: bookItem
});