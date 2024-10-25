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
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    console.log(this.annualData);
    return this.annualData;
  }
}
