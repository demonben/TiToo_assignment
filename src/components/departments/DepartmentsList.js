import React from "react";
import DepartmentItem from "./DepartmentItem";
import styles from "./departments.module.scss";

const DepartmentsList = ({ list }) => {

  return (
    <div className={styles.list}>
      {list.map((item) => (
        <DepartmentItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default DepartmentsList;
