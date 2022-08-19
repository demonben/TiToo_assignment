import { connect } from "react-redux";
import { DepartmentBoard } from "./DepartmentBoard";

const mapStateToProps = ({ crew }) => ({
  crew: crew.list,
});

const mapDispatchToProps = (dispatch) => {
  return {};
};

export const BoardDepartment = connect(
  mapStateToProps,
  mapDispatchToProps
)(DepartmentBoard);
