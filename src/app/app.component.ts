import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { OutputDataComponent } from './output-data/output-data.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInputComponent, OutputDataComponent],
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent {}
