// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Vote, Questionnaire, User } = initSchema(schema);

export {
  Vote,
  Questionnaire,
  User
};