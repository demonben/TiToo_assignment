import { CREW_FETCH_DATA, UPDATE_CREW } from ".";
import { getCrew } from "../../api/crew.api";

export const fetchCrew = () => async (dispatch) => {
  const { crew } = await getCrew();
  
  dispatch({
    type: CREW_FETCH_DATA,
    payload: {
      crew,
    },
  });
};

export const updateCrew = (crew) => (dispatch) => {
  dispatch({
    type: UPDATE_CREW,
    payload: {
      crew,
    },
  });
};
