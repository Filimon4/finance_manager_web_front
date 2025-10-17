export interface CetegoriesRequest {
  name?: string;
  deleted?: boolean;
}

export interface CategoryResponse {
  id: number;
  name: string;
  base_type: "INCOME" | "EXPENSE";
  deleted: boolean;
  created_at: string;
  account_id: number;
}

export interface CategoryBalanceResponse {
  overview: {
    totalIncome: number;
    totalExpense: number;
    totalProfit: number;
  };
  fromDate: string;
}
