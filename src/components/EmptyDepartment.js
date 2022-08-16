import React from 'react'
import { Cactus } from "../images";
import styles from "./departments/departments.module.scss";



const EmptyDepartment = () => {
    return (
        <div className={styles.wrapper}>
          <Cactus className={styles.notFound} />
          <h4>No Departments Found</h4>
        </div>
      );
}

export default EmptyDepartment