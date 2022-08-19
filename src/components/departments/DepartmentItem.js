import React, { useState } from "react";
import { BoardDepartment } from "./department-board";
import styles from "./departments.module.scss";
import { useDrop } from "react-dnd";
import { CREW_MEMBER } from "../../constants/crewMember";
import { RulesDepartment } from "./RulesDepartment";

const DepartmentItem = ({ item, crew }) => {
  const { name, rules } = item;
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: CREW_MEMBER,
    drop: (item) => addCrewMemberToBoard(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver,
    }),
  }));

  const deleteBoardMember = (e) => {
    const updatedBoard = board.filter((item) => {
      return item.id !== e.id;
    });
    setBoard(() => [...updatedBoard]);
  };

  const addCrewMemberToBoard = (item) => {
    if (item) {
      const boardList = crew.filter((member) => item.id === member.id);
      setBoard((board) => [...board, boardList[0]]);
    }
  };

  return (
    <div className={styles.department} ref={drop}>
      <h3>{name}</h3>
      <RulesDepartment rules={rules} />
      <BoardDepartment board={board} deleteBoardMember={deleteBoardMember} />
    </div>
  );
};

DepartmentItem.defaultProps = {
  crew: [],
};

export { DepartmentItem };
