import { Component, Input } from '@angular/core';
import { InvestmentData } from '../user-input/user-input.component';
import { CalculatedInvestmentData } from '../app.component';

@Component({
  selector: 'app-output-data',
  standalone: true,
  imports: [],
  templateUrl: './output-data.component.html',
  styleUrl: './output-data.component.css',
})
export class OutputDataComponent {
  @Input({ required: true }) results!: CalculatedInvestmentData[];
}
