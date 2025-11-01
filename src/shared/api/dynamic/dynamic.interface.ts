export interface MonthlyAnalytics {
  year: number;
  month: number;
  income: number;
  expense: number;
  delta: number;
  balanceChange: number;
}

export interface IAnalyticsResponse {
  months: MonthlyAnalytics[];
  totalIncome: number;
  totalExpense: number;
  totalDelta: number;
}
