import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestment = '1000';
  annualInvestment = '2000';
  expectedReturn = '3000';
  duration = '10';

  onSubmit() {
    console.log(this.initialInvestment);
  }
}
