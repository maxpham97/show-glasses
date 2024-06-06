import { combineReducers } from '@reduxjs/toolkit';
import customTableSlice from './customTable/customTableSlice';

const rootReducer = combineReducers({
  [customTableSlice.name]: customTableSlice.reducer,
});

export default rootReducer;
