import { connect } from "react-redux";
import { DepartmentItem } from "./DepartmentItem";

const mapStateToProps = ({ crew }) => ({
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
