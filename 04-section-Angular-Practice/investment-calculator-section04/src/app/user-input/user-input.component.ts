import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  constructor(private investmentService: InvestmentService) {}

  initialInvestment = signal('1000');
  annualInvestment = signal('2000');
  expectedReturn = signal('3000');
  duration = signal('10');

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.initialInvestment(),
      expectedReturn: +this.expectedReturn(),
      annualInvestment: +this.annualInvestment(),
      duration: +this.duration(),
    });
  }
}
