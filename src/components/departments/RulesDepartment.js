import React from "react";

const RulesDepartment = ({ rules }) => {
  const { seniority, crew } = rules;

  return (
    <div>
      <h5>Rules:</h5>
      <p>
        Seniority is more than {seniority.min} {" "}
        years.
      </p>
      <p>
        Crew should be {crew.doctors} doctors and {crew.nurses} nurses
      </p>
    </div>
  );
};

export { RulesDepartment };
