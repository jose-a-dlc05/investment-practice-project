import { Injectable } from '@angular/core';
import { InvestmentData } from './user-input/user-input.component';
import { CalculatedInvestmentData } from './investment.model';

@Injectable({ providedIn: 'root' })
export class InvestmentService {
  resultData?: CalculatedInvestmentData[];

  calculateInvestmentResults(investmentData: InvestmentData) {
    let investmentValue = investmentData.initialInvestment;
    const annualData = [];

    for (let i = 0; i < investmentData.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (investmentData.expectedReturn / 100);
      investmentValue += interestEarnedInYear + investmentData.annualInvestment;
      const totalInterest =
        investmentValue -
        investmentData.annualInvestment * year -
        investmentData.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: investmentData.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested:
          investmentData.initialInvestment +
          investmentData.annualInvestment * year,
      });
    }

    // this.resultsData.set(annualData);
    this.resultData = annualData;
  }
}
