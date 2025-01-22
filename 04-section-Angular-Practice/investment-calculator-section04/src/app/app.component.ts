import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentInput, InvestmentResults } from './models/investment-input';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    UserInputComponent,
    InvestmentResultsComponent,
    CommonModule,
  ],
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent {
  resultsData: InvestmentResults[] = [];

  onCalculateInvestmentResults(data: InvestmentInput) {
    const annualData = [];
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

    this.resultsData = annualData;

    return annualData;
  }
}
