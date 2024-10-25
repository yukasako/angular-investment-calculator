import { Component, inject } from '@angular/core';
import { CaluculateService } from '../../caluculate.service';

@Component({
  selector: 'app-investment-result',
  standalone: false,
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
})
export class InvestmentResultComponent {
  constructor(private calculateService: CaluculateService) {}

  annualData = this.calculateService.annualData;
}
