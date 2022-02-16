import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type AccountsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TransactionsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Accounts {
  readonly id: string;
  readonly name?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Accounts, AccountsMetaData>);
  static copyOf(source: Accounts, mutator: (draft: MutableModel<Accounts, AccountsMetaData>) => MutableModel<Accounts, AccountsMetaData> | void): Accounts;
}

export declare class Transactions {
  readonly id: string;
  readonly description?: string;
  readonly date?: string;
  readonly amount?: number;
  readonly Accounts?: Accounts;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly transactionsAccountsId?: string;
  constructor(init: ModelInit<Transactions, TransactionsMetaData>);
  static copyOf(source: Transactions, mutator: (draft: MutableModel<Transactions, TransactionsMetaData>) => MutableModel<Transactions, TransactionsMetaData> | void): Transactions;
}