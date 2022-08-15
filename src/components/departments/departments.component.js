import React from "react";
import { Cactus, Doctor, XIcon } from "../../images";
import styles from "./departments.module.scss";

const DepartmentsComponent = React.memo(({ list }) => {
  const renderDepartments = React.useCallback(() => {
    if (list === null) {
      return (
        <div className={styles.wrapper}>
          <h4>Loading...</h4>
        </div>
      );
    }

    if (list.length === 0) {
      return (
        <div className={styles.wrapper}>
          <Cactus className={styles.notFound} />
          <h4>No Departments Found</h4>
        </div>
      );
    }

    return (
      <div className={styles.list}>
        {list.map(({ id, name, rules, crew }) => (
          <div key={id} className={styles.department}>
            <h3>{name}</h3>
            <h5>Rules:</h5>
            {/* TODO: Rules display */}
            <h5>Crew members:</h5>
            {/* TODO: Implement crew display - this is just a mock */}
            <div className={styles.crew}>
              <div className={styles.member}>
                <XIcon className={styles.removeCrew} />
                <Doctor className={styles.crewMember} />
                <span>Doctor name</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }, [list]);

  return (
    <div className={styles.root}>
      <h2>Departments</h2>
      <div className={styles.departments}>{renderDepartments()}</div>
    </div>
  );
});

DepartmentsComponent.defaultProps = {
  list: null,
};

export { DepartmentsComponent };
