interface IntFilter {
  gte?: number;
  equals?: number;
  lte?: number;
}

export interface IOperationsRequest {
  name?: string;
  categoryId?: number;
  amount?: IntFilter;
  bankAccountId?: number;
  toDate?: string;
  fromDate?: string;
  dateOrder?: "asc" | "desc";
}

export interface IOperationsResponse {
  id: number;
  name: string;
  exchange_rate: string;
  amount: string;
  created_at: string;
  account_id: number;
}

export interface ICreateOperationRequest {
  name: string;
  baseType: "INCOME" | "EXPENSE";
}

export interface IUpdateOperationRequest {
  id: number;
  name: string;
  baseType: "INCOME" | "EXPENSE";
}
