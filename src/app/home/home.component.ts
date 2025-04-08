import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <h1>Welcome to Angular DI POC</h1>
    <p>This project demonstrates different dependency injection approaches in Angular.</p>
  `,
  styles: [`
    h1 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }
    
    p {
      color: #34495e;
      font-size: 1.1rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {}