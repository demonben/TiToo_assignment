import { CREW_FETCH_DATA, UPDATE_CREW } from "../actions";
import update from "immutability-helper";

const initialState = {
  list: [],
  lastUpdated: null,
};

const updateCrew = (state, { crew }) =>
  update(state, {
    $merge: {
      list: crew,
      lastUpdated: Date.now(),
    },
  });

const actionsRepo = {
  [CREW_FETCH_DATA]: updateCrew,
  [UPDATE_CREW]: updateCrew,
};

export default (state = initialState, { type, payload }) =>
  !!actionsRepo[type] ? actionsRepo[type](state, payload) : state;
