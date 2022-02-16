// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Accounts, Transactions } = initSchema(schema);

export {
  Accounts,
  Transactions
};