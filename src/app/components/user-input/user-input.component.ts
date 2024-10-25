import { Component, inject } from '@angular/core';
import { CaluculateService } from '../../caluculate.service';

@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestment = 0;
  annualInvestment = 0;
  expectedReturn = 0;
  duration = 0;

  private calculateService = inject(CaluculateService);

  calculate() {
    this.calculateService.calculate(
      this.initialInvestment,
      this.annualInvestment,
      this.expectedReturn,
      this.duration,
    );
  }
}
