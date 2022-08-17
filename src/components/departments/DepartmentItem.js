import React from "react";
import { BoardDepartment } from "./department-board";
import styles from "./departments.module.scss";

const DepartmentItem = ({ item }) => {
  const { name } = item;

  return (
    <div className={styles.department}>
      <h3>{name}</h3>
      <h5>Rules:</h5>
      <h6>total seniority is more than 5 years</h6>
      <BoardDepartment />
    </div>
  );
};

export default DepartmentItem;
