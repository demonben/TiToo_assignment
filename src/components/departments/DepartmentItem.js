import React from "react";
import { Doctor, XIcon } from "../../images";
import styles from "./departments.module.scss";

const DepartmentItem = ({ item }) => {
  const { name } = item;
  return (
    <div className={styles.department}>
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
  );
};

export default DepartmentItem;
