export interface ICetegoriesRequest {
  name?: string;
  deleted?: boolean;
}

export interface ICategoryResponse {
  id: number;
  name: string;
  base_type: "INCOME" | "EXPENSE";
  deleted: boolean;
  created_at: string;
  account_id: number;
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
  baseType: "INCOME" | "EXPENSE";
}

export interface ICategoryUpdateRequest {
  id: number;
  name: string;
  baseType: "INCOME" | "EXPENSE";
}
