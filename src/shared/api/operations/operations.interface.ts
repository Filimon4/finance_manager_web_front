export interface IOperationsRequest {
  name?: string;
  fromDate?: string;
  toDate?: string;
  dateOrder?: "desc" | "asc";
}

export interface IOperationsResponse {
  id: number;
  account_id: number;
  amount: string;
  bank_account_id: number;
  category_id: number;
  created_at: string;
  description: string;
  name: string;
  transfer_pair_id: number;
  type: "INCOME" | "EXPENSE" | "TRANSFER_IN" | "TRANSFER_OUT";
}

export interface ICreateOperationRequest {
  type?: "INCOME" | "EXPENSE" | "TRANSFER" | null | "";
  name: string;
  amount: number;
  categoryId: number;
  description?: string;
  toBankAccountId?: number;
}

export interface IUpdateOperationRequest {
  id: number;
  name: string;
  amount: number;
  type: "INCOME" | "EXPENSE";
  description: string;
}
