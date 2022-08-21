import React, { useEffect, useMemo } from "react";
import { BoardDepartment } from "./department-board";
import styles from "./departments.module.scss";
import { useDrop } from "react-dnd";
import { CREW_MEMBER } from "../../constants/crewMember";
import { RulesDepartment } from "./RulesDepartment";
import { updateCrew } from "../../store/actions/crew.actions";
import { updateDepartmentCrew } from "../../store/actions/departments.actions";
import { useDispatch } from "react-redux";

const DepartmentItem = ({ item, crew, departments }) => {
  const { id, name, rules, departmentCrew, currentCapacity } = item;
  const dispatch = useDispatch();
  let departmentsArr = useMemo(() => [...departments], [departments]);
  const crewArr = useMemo(() => [...crew], [crew]);
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: CREW_MEMBER,
      drop: (item) => addCrewMemberToBoard(item),
      collect: (monitor) => ({
        isOver: !!monitor.isOver,
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [item, crew]
  );

  const deleteBoardMember = (item) => {
    update(item);

    const updatedBoard = departmentCrew.filter((boardItem) => {
      return boardItem.id !== item.id;
    });
    departmentsArr.forEach((department) => {
      if (department.id === id) {
        department.departmentCrew = updatedBoard;
      }
      checkDepartmentCapacity(department.departmentCrew, department);
    });
    dispatch(updateDepartmentCrew(departmentsArr));
  };

  const addCrewMemberToBoard = (item) => {
    if (rules.seniority.min <= item.seniority) {
      const boardList = crew.filter((member) => {
        return item.id === member.id;
      });

      departmentsArr.forEach((department) => {
        if (department.id === id) {
          department.departmentCrew.push(boardList[0]);
        }
        checkDepartmentCapacity(department.departmentCrew, department);
      });
      update(item);

      dispatch(updateDepartmentCrew(departmentsArr));
    }
  };

  const checkDepartmentCapacity = (departmentCrew, department) => {
    department.currentCapacity = { doctors: 0, nurses: 0 };
    departmentCrew.forEach((crew) => {
      if (crew.position === "doctor") {
        department.currentCapacity.doctors += 1;
      } else if (crew.position === "nurse") {
        department.currentCapacity.nurses += 1;
      }
    });
  };

  const update = (item) => {
    crewArr.forEach((member) => {
      if (member.id === item.id) {
        member.isVisible = !member.isVisible;
      }
    });
    dispatch(updateCrew(crewArr));
  };

  return (
    <div className={styles.department} ref={drop}>
      <h3>{name}</h3>
      <RulesDepartment rules={rules} />
      <BoardDepartment
        departmentCrew={departmentCrew}
        deleteBoardMember={deleteBoardMember}
      />
    </div>
  );
};

DepartmentItem.defaultProps = {
  crew: [],
};

export { DepartmentItem };
