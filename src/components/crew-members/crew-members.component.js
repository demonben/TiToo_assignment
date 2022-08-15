import React from "react";
import { CREW_POSITIONS } from "../../constants";
import { Doctor, Nurse, Cactus } from "../../images";
import styles from "./crew-members.module.scss";

const CrewMembersComponent = React.memo(({ list }) => {
  const renderDepartments = React.useCallback(() => {
    if (list === null) {
      return (
        <div className={styles.wrapper}>
          <h4>Loading...</h4>
        </div>
      );
    }

    if (list.length === 0) {
      return (
        <div className={styles.wrapper}>
          <Cactus className={styles.notFound} />
          <h4>No Crew Members Found</h4>
        </div>
      );
    }

    return (
      <div className={styles.list}>
        {list.map(({ id, name, position, seniority }) => (
          <div key={id} className={styles.member}>
            {position === CREW_POSITIONS.DOCTOR ? (
              <Doctor className={styles.crewMember} />
            ) : (
              <Nurse className={styles.crewMember} />
            )}
            <h5>{name}</h5>
            <span className={styles.seniority}>{seniority} years</span>
          </div>
        ))}
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
