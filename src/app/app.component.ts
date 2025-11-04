import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import {
  InvestmentData,
  UserInputComponent,
} from './user-input/user-input.component';
import { OutputDataComponent } from './output-data/output-data.component';

export interface CalculatedInvestmentData {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInputComponent, OutputDataComponent],
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent {
  annualData: CalculatedInvestmentData[] = [];
  calculateInvestmentResults(investmentData: InvestmentData) {
    let investmentValue = investmentData.initialInvestment;

    for (let i = 0; i < investmentData.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (investmentData.expectedReturn / 100);
      investmentValue += interestEarnedInYear + investmentData.annualInvestment;
      const totalInterest =
        investmentValue -
        investmentData.annualInvestment * year -
        investmentData.initialInvestment;
      this.annualData.push({
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
  }
}
