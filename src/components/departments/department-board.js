import { connect } from "react-redux";
import { removeCrewMember } from "../../store/actions/crew.actions";
import { DepartmentBoard } from "./DepartmentBoard";

const mapStateToProps = ({ crew }) => ({
  crew: crew.list,
});

const mapDispatchToProps = { removeCrewMember };

export const BoardDepartment = connect(
  mapStateToProps,
  mapDispatchToProps
)(DepartmentBoard);
