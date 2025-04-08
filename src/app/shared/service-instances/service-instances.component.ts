import { Component } from '@angular/core';
import { ServiceTrackerService, ServiceInstance } from '../service-tracker.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-instances',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="instances-container">
      <h3>Active Service Instances</h3>
      <div class="instances-grid">
        @for (instance of instances; track instance.id) {
          <div class="instance-card" [class.legacy]="instance.type === 'legacy'" [class.modern]="instance.type === 'modern'">
            <div class="instance-type">{{ instance.type | titlecase }} Service</div>
            <div class="instance-time">Created at: {{ formatDate(instance.createdAt) }}</div>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .instances-container {
      margin: 2rem 0;
      padding: 1rem;
      background: #f8f9fa;
      border-radius: 8px;
      border: 1px solid #dee2e6;
    }

    h3 {
      color: #2c3e50;
      margin: 0 0 1rem 0;
    }

    .instances-grid {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }

    .instance-card {
      padding: 1rem;
      border-radius: 6px;
      color: white;
    }

    .instance-card.legacy {
      background: #2c3e50;
    }

    .instance-card.modern {
      background: #3498db;
    }

    .instance-type {
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    .instance-time {
      font-size: 0.9rem;
      opacity: 0.9;
    }
  `]
})
export class ServiceInstancesComponent {
  instances: ServiceInstance[];

  constructor(private tracker: ServiceTrackerService) {
    this.instances = tracker.getAllInstances();
  }

  formatDate(date: Date): string {
    return this.tracker.formatDate(date);
  }
}