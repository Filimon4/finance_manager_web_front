export interface IOperationsRequest {
  name?: string;
}

export interface IOperationsResponse {
  id: number;
}

export interface ICreateOperationRequest {
  type: "INCOME" | "EXPENSE" | "TRANSFER";
  name: string;
  amount: number;
  bankAccountId: number;
  categoryId?: number;
  description?: string;
  toBankAccountId?: number;
}

export interface IUpdateOperationRequest {
  id: number;
}
