import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentResults } from '../models/investment-input';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  @Input({ required: true }) results!: InvestmentResults[];
}
