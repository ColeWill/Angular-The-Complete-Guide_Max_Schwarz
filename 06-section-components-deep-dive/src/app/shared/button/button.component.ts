import { Component } from '@angular/core';

@Component({
  // select buttons with appButton and a tags with appButton to add ng-content
  selector: 'button[appButton], a[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {}
