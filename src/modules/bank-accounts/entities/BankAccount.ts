import { TransactionType } from 'src/modules/transactions/entities/transaction';

export enum BankAccountType {
  CHECKING = 'CHECKING',
  CASH = 'CASH',
  INVESTMENT = 'INVESTMENT',
}

export interface BankAccount {
  id: string;
  userId: string;
  name: string;
  color: string;
  initialBalance: number;
  type: BankAccountType;
  transactions?: { type: TransactionType; value: number }[];
}
