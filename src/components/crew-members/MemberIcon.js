import React from "react";
import { Doctor, Nurse, XIcon } from "../../images";
import styles from "../departments/departments.module.scss";
import { CREW_POSITIONS } from "../../constants";

const MemberIcon = ({ position }) => {
  return (
    <div>
      {position === CREW_POSITIONS.DOCTOR ? (
        <Doctor className={styles.crewMember} />
      ) : (
        <Nurse className={styles.crewMember} />
      )}
    </div>
  );
};

export { MemberIcon };
