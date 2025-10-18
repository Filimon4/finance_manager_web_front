export interface IAccountRequest {
  name?: string;
  deleted?: boolean;
}

export interface IAccountResponse {
  id: number;
  name: string;
  main: boolean;
  deleted: boolean;
  created_at: string;
  account_id: number;
  currency_id: number;
}

export interface IAccountOverviewResponse {
  overview: {
    totalIncome: number;
    totalExpense: number;
    totalProfit: number;
  };
  fromDate: string;
}
