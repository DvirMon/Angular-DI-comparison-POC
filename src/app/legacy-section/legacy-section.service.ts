import { Injectable } from '@angular/core';
import { ServiceTrackerService } from '../shared/service-tracker.service';

@Injectable()
export class LegacySectionService {
  private readonly instanceId: string;
  private readonly createdAt: Date;

  constructor(private tracker: ServiceTrackerService) {
    this.createdAt = new Date();
    this.instanceId = this.tracker.trackInstance('legacy');
  }

  getData(): string {
    return 'Data from Legacy Section Service';
  }

  getInstanceInfo(): string {
    return `Instance ID: ${this.instanceId} (Created at: ${this.tracker.formatDate(this.createdAt)})`;
  }
}