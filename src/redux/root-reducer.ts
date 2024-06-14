import { combineReducers } from '@reduxjs/toolkit';
import customTableSlice from './customTable/customTableSlice';
import basketSlice from './basket/basketSlice';

const rootReducer = combineReducers({
  [customTableSlice.name]: customTableSlice.reducer,
  [basketSlice.name]: basketSlice.reducer
});

export default rootReducer;
