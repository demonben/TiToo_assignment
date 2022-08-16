import React, { memo, useCallback } from "react";
import styles from "./crew-members.module.scss";
import { CREW_POSITIONS } from "../../constants";
import { Doctor, Nurse } from "../../images";
import EmptyDepartment from "../EmptyDepartment";
import Loader from "../Loader";
import CrewMembersList from "./CrewMembersList";

const CrewMembersComponent = memo(({ list }) => {
  const renderDepartments = useCallback(() => {
    if (list === null) {
      return <Loader />;
    }

    if (list.length === 0) {
      return <EmptyDepartment />;
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
