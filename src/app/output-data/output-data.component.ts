import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-output-data',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './output-data.component.html',
  styleUrl: './output-data.component.css',
})
export class OutputDataComponent {
  resultsData = inject(InvestmentService);

  get results() {
    return this.resultsData.resultData;
  }
}
