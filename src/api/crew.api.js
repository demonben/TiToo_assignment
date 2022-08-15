import { timeout } from "../utils";
import { faker } from "@faker-js/faker";
import { CREW_POSITIONS } from "../constants";

const generateCrewMember = () => ({
  id: faker.datatype.uuid(),
  name: faker.name.findName(),
  seniority: faker.datatype.number({ min: 0, max: 20 }),
  position: Math.random() < 0.5 ? CREW_POSITIONS.DOCTOR : CREW_POSITIONS.NURSE,
});

export const getCrew = async () => {
  await timeout(Math.random() * 3000);

  return {
    crew: [...Array(faker.datatype.number({ min: 10, max: 30 })).keys()].map(
      (i) => generateCrewMember()
    ),
  };
};
