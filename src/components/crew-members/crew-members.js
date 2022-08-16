import { connect } from "react-redux";
import { CrewMembersComponent } from "./CrewMembers";

const mapStateToProps = ({ crew }) => ({
  list: crew.list,
});

export const CrewMembers = connect(mapStateToProps)(CrewMembersComponent);
