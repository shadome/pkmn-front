import { combineReducers } from "redux";

import foodReducer from "../reducers/FoodReducer"

const rootReducer = combineReducers({
  foodReducer: foodReducer,
  // state: (state = {}) => state
});

export default rootReducer;