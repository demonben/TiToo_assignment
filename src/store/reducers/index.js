import { combineReducers } from "redux";
import departmentsReducer from "./departments.reducer";
import crewReducer from "./crew.reducer";

export const reducers = () =>
  combineReducers({
    departments: departmentsReducer,
    crew: crewReducer,
  });
