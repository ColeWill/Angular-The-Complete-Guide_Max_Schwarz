import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';

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
export class AppComponent {}
