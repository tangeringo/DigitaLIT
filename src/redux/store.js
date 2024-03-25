import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

import { thunk } from 'redux-thunk';
import logger from 'redux-logger';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = configureStore({
    reducer: rootReducer, 
    middleware: () => middlewares
});


// later implement redux persist