import { createSelector } from 'reselect';

const selectLibrary = state => state.library;

export const selectLibrarySelectedBook = createSelector(
    [selectLibrary],
    library => library.selectedBook
);

