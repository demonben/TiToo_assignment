import React from "react";
import { Doctor, Nurse, XIcon } from "../../images";
import styles from "./departments.module.scss";
import { useDrag } from "react-dnd";
import { CREW_MEMBER } from "../../constants/crewMember";
import { CREW_POSITIONS } from "../../constants";

const DepartmentBoard = ({ crew, board, deleteBoardMember }) => {
  const [{ isDragging }, drag] = useDrag(() => {
    return {
      type: CREW_MEMBER,
      item: crew ? { id: crew.id } : 0,
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging,
      }),
    };
  });

  return crew ? (
    <>
      <div className="Board">
        <h5>Crew members:</h5>
        {board.map((item) => (
          <div key={item.id} className={styles.crew}>
            <div className={styles.member} ref={drag}>
              <XIcon
                className={styles.removeCrew}
                onClick={() => deleteBoardMember(item)}
              />
              {item.position === CREW_POSITIONS.DOCTOR ? (
                <Doctor className={styles.crewMember} />
              ) : (
                <Nurse className={styles.crewMember} />
              )}
              <span>{item.name && item.name}</span>
              <span className={styles.seniority}>{item.seniority} years</span>
            </div>
          </div>
        ))}
      </div>
    </>
  ) : null;
};

DepartmentBoard.defaultProps = {
  crew: [],
};

export { DepartmentBoard };
