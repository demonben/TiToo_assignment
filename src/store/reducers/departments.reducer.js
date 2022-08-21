import { DEPARTMENTS_FETCH_DATA, DEPARTMENT_UPDATE_CREW } from "../actions";
import update from "immutability-helper";

const initialState = {
  list: null,
  lastUpdated: null,
};

const updateDepartments = (state, { departments }) =>
  update(state, {
    $merge: {
      list: departments,
      lastUpdated: Date.now(),
    },
  });

const updateDepartmentsCrew = (state, { departments }) =>
  update(state, {
    $merge: {
      list: departments,
      lastUpdated: Date.now(),
    },
  });

const actionsRepo = {
  [DEPARTMENTS_FETCH_DATA]: updateDepartments,
  [DEPARTMENT_UPDATE_CREW]: updateDepartments,
};

export default (state = initialState, { type, payload }) =>
  !!actionsRepo[type] ? actionsRepo[type](state, payload) : state;
