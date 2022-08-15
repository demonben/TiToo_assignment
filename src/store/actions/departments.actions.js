import { DEPARTMENTS_FETCH_DATA } from ".";
import { getDepartments } from "../../api/departments.api";

export const fetchDepartments = () => async (dispatch) => {
  const { departments } = await getDepartments();

  dispatch({
    type: DEPARTMENTS_FETCH_DATA,
    payload: {
      departments,
    },
  });
};
