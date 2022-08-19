import React from "react";
import {ItemDepartment} from "./department-item";
import styles from "./departments.module.scss";

const DepartmentsList = ({ list }) => {
  return (
    <div className={styles.list}>
      {list.map((item) => (
        <ItemDepartment key={item.id} item={item} />
      ))}
    </div>
  );
};

export default DepartmentsList;
