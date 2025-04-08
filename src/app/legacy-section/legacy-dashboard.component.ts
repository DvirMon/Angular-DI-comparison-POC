import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LegacySectionService } from './legacy-section.service';

@Component({
  selector: 'app-legacy-dashboard',
  template: `
    <h2>Legacy Dashboard</h2>
    <div class="service-info">
      <h3>Service Instance Information</h3>
      <p>{{ instanceInfo }}</p>
    </div>
    <p>{{ data }}</p>
    <a routerLink="details">Go to Details</a>
  `,
  styles: [`
    h2 { color: #2c3e50; }
    .service-info {
      background: #f8f9fa;
      padding: 1rem;
      border-radius: 4px;
      margin: 1rem 0;
      border: 1px solid #dee2e6;
    }
    h3 {
      color: #2c3e50;
      font-size: 1.1rem;
      margin: 0 0 0.5rem 0;
    }
    a { 
      color: #3498db;
      text-decoration: none;
      &:hover { text-decoration: underline; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LegacyDashboardComponent {
  data: string;
  instanceInfo: string;

  constructor(private service: LegacySectionService) {
    this.data = service.getData();
    this.instanceInfo = service.getInstanceInfo();
  }
}