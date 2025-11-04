import { Component, input, Input } from '@angular/core';
import { CalculatedInvestmentData } from '../app.component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-output-data',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './output-data.component.html',
  styleUrl: './output-data.component.css',
})
export class OutputDataComponent {
  results = input<CalculatedInvestmentData[]>();
}
