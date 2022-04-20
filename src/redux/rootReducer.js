import { combineReducers } from "redux";
import { DataReducer } from "./reducers/dataReducer";

export const rootReducer = combineReducers({
  data: DataReducer,
});
