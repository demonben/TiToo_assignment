import React from "react";
import styles from "./crew-members.module.scss";
import { useDrag } from "react-dnd";
import { MemberIcon } from "./MemberIcon";

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
      <MemberIcon position={position} />

      <h5>{name}</h5>
      <span className={styles.seniority}>{seniority} years</span>
    </div>
  );
};

export default CrewMemberItem;
