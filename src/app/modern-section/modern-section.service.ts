import { Injectable } from '@angular/core';
import { ServiceTrackerService } from '../shared/service-tracker.service';

@Injectable()
export class ModernSectionService {
  private readonly instanceId: string;
  private readonly createdAt: Date;

  constructor(private tracker: ServiceTrackerService) {
    console.log("ModernSectionService created");
    this.createdAt = new Date();
    this.instanceId = this.tracker.trackInstance('modern');
  }

  getData(): string {
    return 'Data from Modern Section Service';
  }

  getInstanceInfo(): string {
    return `Instance ID: ${this.instanceId} (Created at: ${this.tracker.formatDate(this.createdAt)})`;
  }
}