import React, { useState,memo } from "react";
import { Doctor, XIcon } from "../../images";
import styles from "./departments.module.scss";
import { useDrop, useDrag } from "react-dnd";

const DepartmentBoard = memo(({ crew, removeCrewMember }) => {
console.log(removeCrewMember(4));
  const [board, setBoard] = useState([]);


  const [{ isOver }, drop] = useDrop(() => ({
    accept: "member",
    drop: (item) => addCrewMemberToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver,
    }),
  }));

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "member",
    item: crew?{ id: crew.id }:0,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging,
    }),
  }));

  const addCrewMemberToBoard = (id) => {
    const boardList = crew.filter((member) => id === member.id);
    setBoard((board) => [...board, boardList[0]]);
  };

  return (
    <>
      <div className="Board" ref={drop}>
        <h5>Crew members:</h5>
        {board.map((item) => (
          <div key={item.id} className={styles.crew} >
            <div className={styles.member} ref={drag}>
              <XIcon className={styles.removeCrew} />
              <Doctor className={styles.crewMember} />
              <span>{item.name}</span>
              <span className={styles.seniority}>{item.seniority} years</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
});

DepartmentBoard.defaultProps = {
  crew: null,
};

export { DepartmentBoard };
