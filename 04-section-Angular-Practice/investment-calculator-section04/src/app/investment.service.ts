import { Injectable } from '@angular/core';
import { InvestmentInput, InvestmentResults } from './models/investment-input';

@Injectable({ providedIn: 'root' })
export class InvestmentService {
  resultData?: InvestmentResults[];

  calculateInvestmentResults(data: InvestmentInput) {
    const annualData: InvestmentResults[] = [];
    const { initialInvestment, expectedReturn, annualInvestment, duration } =
      data;
    let investmentValue = data.initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.resultData = annualData;
    return annualData;
  }
}
