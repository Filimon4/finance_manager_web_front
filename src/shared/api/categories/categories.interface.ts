export interface CetegoriesRequest {
  name?: string;
  deleted?: boolean;
}

export interface BalanceResponse {
  id: number;
  name: string;
  base_type: "INCOME" | "EXPENSE";
  deleted: boolean;
  created_at: string;
  account_id: number;
}
