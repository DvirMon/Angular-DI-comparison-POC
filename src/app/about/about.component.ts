import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <h1>About This POC</h1>
    <p>This project compares legacy module-based DI with modern standalone route-scoped DI.</p>
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
export class AboutComponent {}