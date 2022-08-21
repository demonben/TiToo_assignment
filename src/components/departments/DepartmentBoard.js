import React from "react";
import { XIcon } from "../../images";
import styles from "./departments.module.scss";
import { MemberIcon } from "../crew-members/MemberIcon";

const DepartmentBoard = ({ crew, departmentCrew, deleteBoardMember }) => {

  return crew ? (
    <>
      <div className="Board">
        <h5>Crew members:</h5>
        <div className={styles.crew}>
          {departmentCrew.map((item) => (
            <div key={item.id} className={styles.member}>
              <XIcon
                className={styles.removeCrew}
                onClick={() => deleteBoardMember(item)}
              />
              <MemberIcon position={item.position} />
              <span>{item.name && item.name}</span>
              <span className={styles.seniority}>{item.seniority} years</span>
            </div>
          ))}
        </div>
      </div>
    </>
  ) : null;
};

DepartmentBoard.defaultProps = {
  crew: [],
};

export { DepartmentBoard };
