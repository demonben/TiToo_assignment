import React from "react";
import styles from "./crew-members.module.scss";
import { CREW_POSITIONS } from "../../constants";
import { Doctor, Nurse } from "../../images";

const CrewMemberItem = ({ item }) => {
  const { position, name, seniority } = item;
  return (
    <div className={styles.member}>
      {position === CREW_POSITIONS.DOCTOR ? (
        <Doctor className={styles.crewMember} />
      ) : (
        <Nurse className={styles.crewMember} />
      )}
      <h5>{name}</h5>
      <span className={styles.seniority}>{seniority} years</span>
    </div>
  );
};

export default CrewMemberItem;
