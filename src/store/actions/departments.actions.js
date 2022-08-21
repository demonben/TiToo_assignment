import { DEPARTMENTS_FETCH_DATA, DEPARTMENT_UPDATE_CREW } from ".";
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

export const updateDepartmentCrew = (departments) => (dispatch) => {
  dispatch({
    type: DEPARTMENT_UPDATE_CREW,
    payload: {
      departments,
    },
  });
};
