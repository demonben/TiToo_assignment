import React from "react";
import styles from "./crew-members.module.scss";
import CrewMemberItem from "./CrewMemberItem";

const CrewMembersList = ({ list }) => {
  return (
    <div className={styles.list}>
      {list.map(
        (item) => item.isVisible && <CrewMemberItem key={item.id} item={item} />
      )}
    </div>
  );
};

export default CrewMembersList;
