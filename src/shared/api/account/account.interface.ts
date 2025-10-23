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

export interface IAccountCreateResponse {
  id: number;
  currency_id: number;
  main: boolean;
  name: string;
}

export interface IAccountOverviewResponse {
  overview: {
    totalIncome: number;
    totalExpense: number;
    totalProfit: number;
  };
  fromDate: string;
}

export interface IAccountCreateRequest {
  name: string;
  baseAmount: number;
  currencyId: number;
}

export interface IAccountUpdateRequest {
  id: number;
  name: string;
  main: boolean;
}
