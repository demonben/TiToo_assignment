import { connect } from "react-redux";
import { DepartmentsComponent } from "./DepartmentsComponent";

const mapStateToProps = ({ departments }) => ({
  list: departments.list,
});

export const Departments = connect(mapStateToProps)(DepartmentsComponent);
