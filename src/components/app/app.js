import { connect } from "react-redux";
import { applicationInit } from "../../store/actions/application.actions";
import { AppComponent } from "./app.component";

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  applicationInit,
};

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
