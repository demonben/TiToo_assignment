import React, { memo, useCallback } from "react";
import styles from "./departments.module.scss";
import EmptyDepartment from "../EmptyDepartment";
import Loader from "../Loader";
import DepartmentsList from "./DepartmentsList";

const DepartmentsComponent = memo(({ list }) => {
  const renderDepartments = useCallback(() => {
    if (list === null) {
      return <Loader />;
    }

    if (list.length === 0) {
      return <EmptyDepartment />;
    }

    return <DepartmentsList list={list} />;
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

