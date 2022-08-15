import { timeout } from "../utils";
import { faker } from "@faker-js/faker";

const generateDepartment = ({ name }) => ({
  id: faker.datatype.uuid(),
  name,
  rules: {
    seniority: {
      min: faker.datatype.number({ min: 0, max: 5 }),
      max: faker.datatype.number({ min: 5, max: 10 }),
    },
    crew: {
      nurses: faker.datatype.number({ min: 0, max: 10 }),
      doctors: faker.datatype.number({ min: 0, max: 10 }),
    },
  },
  crew: [],
});

export const getDepartments = async () => {
  await timeout(Math.random() * 3000);

  return {
    departments: [
      generateDepartment({ name: "children" }),
      generateDepartment({ name: "covid" }),
      generateDepartment({ name: "emergency" }),
    ],
  };
};
