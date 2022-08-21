import { connect } from "react-redux";
import { DepartmentItem } from "./DepartmentItem";

const mapStateToProps = ({ departments, crew }) => ({
  departments: departments.list,
  crew: crew.list,
});

const mapDispatchToProps = (dispatch) => {
  return {
    removeCrewMember: () => dispatch(),
  };
};

export const ItemDepartment = connect(
  mapStateToProps,
  mapDispatchToProps
)(DepartmentItem);
