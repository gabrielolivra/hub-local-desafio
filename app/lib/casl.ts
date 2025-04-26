import { createMongoAbility, MongoAbility } from '@casl/ability';

interface Irules {
  action: string;
  subject: string;
}
const createAbility = (rules: Irules[]) => createMongoAbility(rules);

export const ability = createAbility([]);

export const updateAbility = (ability: MongoAbility, rules: Irules[]) => {
  ability.update(rules);
  return ability;
};
