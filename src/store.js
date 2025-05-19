// store.js
import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './venueSlice';
import avReducer from './avSlice';
import mealsReducer from './mealsSlice';

export default configureStore({
  reducer: {
    //names venue,av,meals are store state name, it should same in Useselector
    venue: venueReducer,
    av:avReducer,
    meals:mealsReducer
  },
});
