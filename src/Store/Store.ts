import { createStore, combineReducers } from "redux";
import { cashReducer } from './cashReducer.ts';
import { customerReducer } from './customerReducer.ts';

const rootReducer = combineReducers({
  cash: cashReducer,
  customer: customerReducer,
})

export const store = createStore(rootReducer);
