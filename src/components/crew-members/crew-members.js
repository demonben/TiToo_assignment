import { connect } from "react-redux";
import { CrewMembersComponent } from "./crew-members.component";

const mapStateToProps = ({ crew }) => ({
  list: crew.list,
});

export const CrewMembers = connect(mapStateToProps)(CrewMembersComponent);
