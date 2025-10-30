export interface ICetegoriesRequest {
  name?: string;
  deleted?: boolean;
}

export interface ICategoryResponse {
  id: number;
  name: string;
  base_type: "EXPENSE" | "INCOME";
  deleted: boolean;
  created_at: string;
  account_id: number;
  totalProfit: number;
}

export interface ICategoryBalanceResponse {
  overview: {
    totalIncome: number;
    totalExpense: number;
    totalProfit: number;
  };
  fromDate: string;
}

export interface ICategoryCreateRequest {
  name: string;
  baseType: "EXPENSE" | "INCOME";
}

export interface ICategoryUpdateRequest {
  id: number;
  name: string;
  baseType: "EXPENSE" | "INCOME";
}
