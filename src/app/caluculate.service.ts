import { Injectable } from '@angular/core';

type AnnualData = {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
};

@Injectable({
  providedIn: 'root',
})
export class CaluculateService {
  constructor() {}

  annualData: AnnualData[] = [];

  floorNumber(value: number) {
    return Math.floor(value * 1000) / 1000;
  }

  calculate(
    initialInvestment: number,
    annualInvestment: number,
    expectedReturn: number,
    duration: number,
  ) {
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      this.annualData.push({
        year: year,
        interest: this.floorNumber(interestEarnedInYear),
        valueEndOfYear: this.floorNumber(investmentValue),
        annualInvestment: annualInvestment,
        totalInterest: this.floorNumber(totalInterest),
        totalAmountInvested: this.floorNumber(
          initialInvestment + annualInvestment * year,
        ),
      });
    }

    console.log(this.annualData);
    return this.annualData;
  }
}
