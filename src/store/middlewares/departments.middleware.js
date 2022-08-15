import { APPLICATION_INIT } from "../actions";
import { fetchDepartments } from "../actions/departments.actions";

export const departmentsInitMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === APPLICATION_INIT) {
      dispatch(fetchDepartments());
    }
  };

export const departmentsMiddleware = [departmentsInitMiddleware];
