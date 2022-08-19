import React from "react";
import { Doctor, XIcon } from "../../images";
import styles from "./departments.module.scss";
import { useDrag } from "react-dnd";
import { CREW_MEMBER } from "../../constants/crewMember";

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
              <Doctor className={styles.crewMember} />
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
