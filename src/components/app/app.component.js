import React, { useEffect } from "react";
import { CrewMembers } from "../crew-members";
import { Departments } from "../departments";
import styles from "./app.module.scss";

const AppComponent = ({ applicationInit }) => {
  useEffect(() => {
    applicationInit();
  }, []);

  return (
    <div className={styles.root}>
      <Departments />
      <CrewMembers />
    </div>
  );
};

AppComponent.defaultProps = {
  applicationInit: () => {},
};

export { AppComponent };
