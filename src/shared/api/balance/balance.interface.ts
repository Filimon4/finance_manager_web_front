export interface BalanceResponse {
  overview: {
    totalIncome: number;
    totalExpense: number;
    totalProfit: number;
  };
  fromDate: string;
}
