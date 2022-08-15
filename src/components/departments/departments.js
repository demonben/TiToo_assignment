import { connect } from "react-redux";
import { DepartmentsComponent } from "./departments.component";

const mapStateToProps = ({ departments }) => ({
  list: departments.list,
});

export const Departments = connect(mapStateToProps)(DepartmentsComponent);
