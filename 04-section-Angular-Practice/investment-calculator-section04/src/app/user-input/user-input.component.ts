import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<{
    initialInvestment: number;
    expectedReturn: number;
    annualInvestment: number;
    duration: number;
  }>();
  initialInvestment = '1000';
  annualInvestment = '2000';
  expectedReturn = '3000';
  duration = '10';

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.initialInvestment,
      expectedReturn: +this.expectedReturn,
      annualInvestment: +this.annualInvestment,
      duration: +this.duration,
    });
  }
}
