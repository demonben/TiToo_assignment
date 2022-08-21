import React, { memo, useCallback } from "react";
import styles from "./crew-members.module.scss";
import Loader from "../Loader";
import CrewMembersList from "./CrewMembersList";

const CrewMembersComponent = memo(({ list }) => {
  const renderDepartments = useCallback(() => {

    if (list.length === 0) {
      return <Loader />;
    }

    return (
      <div className={styles.list}>
        <CrewMembersList list={list} />
      </div>
    );
  }, [list]);

  return (
    <div className={styles.root}>
      <h2>Crew Members</h2>
      <div className={styles.departments}>{renderDepartments()}</div>
    </div>
  );
});

CrewMembersComponent.defaultProps = {
  list: null,
};

export { CrewMembersComponent };
