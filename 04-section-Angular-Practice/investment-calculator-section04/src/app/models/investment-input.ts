export interface InvestmentInput {
  initialInvestment: number;
  expectedReturn: number;
  annualInvestment: number;
  duration: number;
}

export interface InvestmentResults {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}
