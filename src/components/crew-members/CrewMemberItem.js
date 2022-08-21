import React from "react";
import styles from "./crew-members.module.scss";
import { CREW_POSITIONS } from "../../constants";
import { Doctor, Nurse } from "../../images";
import { useDrag } from "react-dnd";
const CrewMemberItem = ({ item }) => {
  const { id, position, name, seniority } = item;

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "member",
    item: { id: id, seniority: seniority, position: position },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging,
    }),
  }));

  return (
    <div className={styles.member} ref={drag}>
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
