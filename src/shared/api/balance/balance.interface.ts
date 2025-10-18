export interface IBalanceResponse {
  overview: {
    totalIncome: number;
    totalExpense: number;
    totalProfit: number;
  };
  fromDate: string;
}
