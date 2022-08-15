import { CREW_FETCH_DATA } from ".";
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
