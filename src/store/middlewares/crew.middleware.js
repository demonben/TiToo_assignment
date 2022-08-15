import { APPLICATION_INIT } from "../actions";
import { fetchCrew } from "../actions/crew.actions";

export const crewInitMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === APPLICATION_INIT) {
      dispatch(fetchCrew());
    }
  };

export const crewMiddleware = [crewInitMiddleware];
